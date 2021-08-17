import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { ApiService } from 'src/app/api/api.service';
import { AuthProfile } from 'src/app/models/auth-profile';
import { Game } from '../../models/game';
import { GameInfo } from '../../models/game-info';
import { User } from '../../models/user';
import { AuthProfileService } from '../authProfile/authProfile.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  user! : User;

  API_URL = "http://localhost:8000/api";

  resp: any = null;
  profile_Id = "";
  profile_email = "";

  options = {headers: new HttpHeaders({
      'Access-Control-Allow-Headers':	'Content-Type, Authorization, access-control-allow-origin, responseType, access-control-allow-headers,access-control-allow-methods, X-API-KEY, Origin, X-Requested-With, Accept, Access-Control-Request-Method',
      'Access-Control-Allow-Methods' : 'GET, POST, OPTIONS, PUT, DELETE',
      'Access-Control-Allow-Origin' : 'http://localhost:4200',
      'Allow': 'GET',
      'Content-Type': 'application/json; utf-8',
      'Accept': 'application/json',
    }),

  };


  // User ATTRIBUTES
  userObservable!: BehaviorSubject<User>;


  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private authProfileService: AuthProfileService) {
      this.userObservable = new BehaviorSubject<User>(new User());
    }

  ngOnInit() {
    this.auth.user$.subscribe(
      data => {
        if ( data && data.email) {
          this.getUserByEmail(data?.email);
        }
      }
    );
  }

  // GET

  public getAllUsers(): any {
    return this.http.get(this.API_URL+'/users', this.options );
  }

  public async getUserByEmail(email: string) {

    await this.getAllUsers()
    .subscribe( (data: any) => {
      const Json = JSON.stringify(data);
      const obj = JSON.parse(Json);
      Object.keys(obj).forEach( (element:any) => {
        let user = obj[element];
        if ( user.mail === email ) {
          // this.user = user;
          this.user.id = user.id;
          this.user.mail = user.mail
          this.userObservable.next(user);
        }
      });
    });

  }

  // POST

  public postNewUser(user: any) {
    this.http.post(this.API_URL+'/users', user, this.options)
    .subscribe(obs => {
      console.log('POST USER inside subscription ', obs);
    });
  }


  // FUNCTIONS

  public async onAuth(authProfile: AuthProfile) {
    this.user = new User();
    this.user.authProfile = authProfile;
    this.authProfileService.onAuth(authProfile);
    this.profile_email = authProfile.email;
    let cd = await this.authProfileService.isNewAuthProfile(authProfile)
    if ( cd ) {
        const body = {
          auth_profile_id: this.profile_Id,
          nom: this.user.nom,
          prenom: this.user.prenom,
          age: this.user.age,
          mail: this.profile_email,
          pseudo: this.user.pseudo,
          avatar: this.user.avatar,
        }
        this.postNewUser(body);
    } else {
      console.log('%c NO NEED TO POST A NEW USER TO DATABASE ! IT ALREADY EXISTS', 'color:red');
    }
    localStorage.setItem('isLoggedIn', "true");
    localStorage.setItem('token', authProfile.sub);
    this.getUserByEmail(this.profile_email);
    this.verifyUser(this.profile_email);
  }

  init() {
    // set auth0 info into our user
    this.auth.user$.subscribe(
      (profile: any) => {
        // @ts-ignore: Object is possibly 'null'
        this.user.nom = profile.family_name;
        // @ts-ignore: Object is possibly 'null'
        this.user.prenom = profile.given_name;
        this.user.age = "?";
        this.user.pseudo = "?";
        this.user.favorite = "?";
        // @ts-ignore: Object is possibly 'null'
        this.user.avatar = profile.picture;
        // this.user.socialNetwork = this.seerakNetworkMock;
        // this.user.friendsList = this.seerakFriendsListMock;
        // this.user.games = this.seerakGameUserMock;
        console.log('UserService init', {
          profile,
          user: this.user,
        });
      }
    );
  }

  verifyUser( email: string) {
    console.log('verifyUser::', {
      user: this.user,
      userObs: this.userObservable,
      email,
    });

  }

  setFavorite(jeux: Game) {
    this.user.favorite = jeux.nom;
  }

  setPseudo(pseudo:string) {
    this.user.pseudo = pseudo;
  }

  setAge(age:string) {
    this.user.age = age;
  }

  addToGameUser(jeux: Game) {
    const found  = this.user.games.find(o => o.id === jeux.id );
    console.log('addToGameUser', jeux, found, this.user.games );
    if ( !found ) {
      this.user.games.push(jeux)
    }
  }

}
