import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { ApiService } from 'src/app/api/api.service';
import { AuthProfile } from 'src/app/models/auth-profile';
import { Game } from '../../models/game';
import { GameInfo } from '../../models/game-info';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  user: User = new User();
  profile: any;

  API_URL = "http://localhost:8000/";

  resp: any = null;

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
  constructor(
    private http: HttpClient,
    private auth: AuthService) {

    }

  ngOnInit() {
    console.log('userService init', localStorage);

  }

  public getAllUsers(): any {
    return this.http.get(this.API_URL+'user/getAll', this.options );
  }

  public onAuth(authProfile: AuthProfile) {
    this.user = new User();
    this.user.authProfile = authProfile;
    let authProfileJson = JSON.stringify(authProfile);
    this.http.post(this.API_URL+'api/auth_profiles', authProfileJson, this.options)
    .subscribe(obs => {
      console.log('inside subscription ', obs);

    });
    console.log('onAuth::user', {
      user: this.user,
    });
    localStorage.setItem('isLoggedIn', "true");
    localStorage.setItem('token', this.user.authProfile.sub);
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
        this.user.avatarIMG = profile.picture;
        // this.user.socialNetwork = this.seerakNetworkMock;
        // this.user.friendsList = this.seerakFriendsListMock;
        // this.user.gameUser = this.seerakGameUserMock;
        console.log('UserService init', {
          profile,
          user: this.user,
        });
      }
    );
  }

  setFavorite(jeux: Game) {
    this.user.favorite = jeux.title;
  }

  setPseudo(pseudo:string) {
    this.user.pseudo = pseudo;
  }

  setAge(age:string) {
    this.user.age = age;
  }

  addToGameUser(jeux: Game) {
    const found  = this.user.gameUser.find(o => o.id === jeux.id );
    console.log('addToGameUser', jeux, found, this.user.gameUser );
    if ( !found ) {
      this.user.gameUser.push(jeux)
    }
  }

}
