
import { AuthProfile } from './auth-profile';
import { FriendStatus } from './friend-status';
import { Game } from './game';
import { GameInfo } from './game-info';
import { SocialNetworkData } from './social-network-data';

export class User {
  get(v: string): any {
    switch(v) {
      case 'nom':
        return this.nom;
      case 'prenom':
        return this.prenom;
      case 'age':
        return this.age;
      case 'mail':
        return this.mail;
      case 'email':
        return this.mail;
      case 'pseudo':
        return this.pseudo;
      case 'avatar':
        return this.avatar;
      case 'games':
        return this.games;
      case 'id':
        return this.id;
      case 'authProfile':
        return this.authProfile;
      case 'favorite':
        return this.favorite;
      case 'friendsList':
        return this.friendsList;
      case 'communityList':
        return this.communityList;
    }
  }

  id: number = -1;
  //auth0 Info
  authProfile: AuthProfile = new AuthProfile;

  // personal Info
  nom: string = "";
  prenom: string = "";
  age: string = "";
  mail: string = "";
  pseudo: string = "";
  avatar: string = "";
  // User's info on each game he played
  games: Array<Game> = [];



  // favorite Game
  favorite: string = "";



  // User's friends info and their most played gameUser
  friendsList: Array<FriendStatus> = [];

  // // User's SocialNetworkData
  // socialNetwork: Array<SocialNetworkData> = [];

  // User's SocialNetworkData
  communityList: Array<SocialNetworkData> = [];

}
