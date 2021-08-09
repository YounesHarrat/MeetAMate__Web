
import { AuthProfile } from './auth-profile';
import { FriendStatus } from './friend-status';
import { Game } from './game';
import { GameInfo } from './game-info';
import { SocialNetworkData } from './social-network-data';

export class User {

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
