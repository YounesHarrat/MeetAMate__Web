
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { AuthProfile } from 'src/app/models/auth-profile';


@Injectable({
  providedIn: 'root',
})
export class AuthProfileService {

  // HTTP HEADERS AND URL
  API_URL = "http://localhost:8000/api";
  options = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Headers':	'Content-Type, Authorization, access-control-allow-origin, responseType, access-control-allow-headers,access-control-allow-methods, X-API-KEY, Origin, X-Requested-With, Accept, Access-Control-Request-Method',
      'Access-Control-Allow-Methods' : 'GET, POST, OPTIONS, PUT, DELETE',
      'Access-Control-Allow-Origin' : 'http://localhost:4200',
      'Allow': 'GET',
      'Content-Type': 'application/json; utf-8',
      'Accept': 'application/json',
    }),

  };

  // AUTHPROFILE ATTRIBUTES
  authProfilesObservable!: BehaviorSubject<AuthProfile>;

  currentEmail = "";
  authProfiles: any;
  result: any;

  constructor( private http: HttpClient) {
    this.authProfiles = [];
    this.authProfilesObservable = new BehaviorSubject<AuthProfile>(new AuthProfile());
    this.getAuthProfiles();
  }

  // GET

  private async getAuthProfiles() {
    return await this.http.get(this.API_URL+'/auth_profiles', this.options)
    .subscribe(
      profiles => {
        const profileJson = JSON.stringify(profiles);
        const profilesObject = JSON.parse(profileJson);
        this.authProfilesObservable.next(profilesObject);
      }
    );
  }

  public getAuthProfileByEmail(email: string) {

    this.authProfilesObservable
    .subscribe( (data: any) => {
      const Json = JSON.stringify(data);
      const obj = JSON.parse(Json);
      Object.keys(obj).forEach( (element:any) => {
        let authProfile = obj[element];

        console.log('checking result', authProfile, email);
        if ( authProfile.email === email ) {
          this.result = authProfile;
          console.log('checking result', authProfile);
        }
      });
    })


    return this.result;

  }

  // POST

  private postAuthProfile(authProfile: string) {
    console.log('postAuthProfile');

    this.http.post(this.API_URL+'/auth_profiles', authProfile, this.options)
    .subscribe(obs => {
      console.log('POST AuthProfile inside subscription ', obs);

    });
  }

  public onAuth(authProfile: AuthProfile) {
    if ( this.isNewAuthProfile(authProfile) ) {
      this.addAuthProfile(authProfile);
    } else {
      console.log('%c NO NEED TO POST A NEW AuthProfile TO DATABASE ! IT ALREADY EXISTS', 'color:red');
    }
  }

  private addAuthProfile(authProfile: AuthProfile) {
    let authProfileJson = JSON.stringify(authProfile);

    this.postAuthProfile(authProfileJson);
  }

  public isNewAuthProfile( authProfile: AuthProfile ): boolean {
    this.authProfilesObservable.asObservable().subscribe(
      data => {
        this.authProfiles = data;

        for (let  i = 0; i < this.authProfiles.length; i++) {
          if ( this.authProfiles[i].email === authProfile.email ) {
            this.currentEmail = this.authProfiles[i].email;
            break;
          }
        }
        this.result = this.currentEmail === "" ? true : false;
      }
    );
    return this.result;
  }


}
