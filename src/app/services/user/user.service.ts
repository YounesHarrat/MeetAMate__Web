import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { ApiService } from 'src/app/api/api.service';
import { Game } from '../../models/game';
import { GameInfo } from '../../models/game-info';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  user: User = new User();
  profile: any;
  http: HttpClient;
  API_URL: string;
  options;

  constructor(
    public auth: AuthService,
    private apiService: ApiService) {
      this.http = this.apiService.httpClient;
      this.API_URL = this.apiService.API_URL;
      this.options = this.apiService.httpOptions;
    }

  ngOnInit() {

  }

  public getAllUsers(): any {
    return this.http.get(this.API_URL+'user/getAll', this.options );
  }


  getAll() {
    this.apiService
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
