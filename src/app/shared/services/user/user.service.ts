import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Game } from '../../models/game';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  user: User = new User();
  profile: any;
  constructor(public auth: AuthService) { }

  ngOnInit() {



  }

  init() {
    // set auth0 info into our user
    this.auth.user$.subscribe(
      (profile) => {
        // @ts-ignore: Object is possibly 'null'
        this.user.nom = profile.family_name;
        // @ts-ignore: Object is possibly 'null'
        this.user.prenom = profile.given_name;
        this.user.age = "?";
        this.user.pseudo = "?";
        this.user.favorite = "?";

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
}
