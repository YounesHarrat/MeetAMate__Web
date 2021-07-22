
import { FriendStatus } from './friend-status';
import { Game } from './game';
import { GameInfo } from './game-info';
import { SocialNetworkData } from './social-network-data';

export class User {

  //auth0 Info


  // personal Info
  pseudo: string = "";
  avatarIMG: string = "";

  nom: string = "";
  prenom: string = "";
  age: string = "";

  // favorite Game
  favorite: string = "";

  // User's info on each game he played
  gameUser: Array<Game> = [];

  // User's friends info and their most played gameUser
  friendsList: Array<FriendStatus> = [];

  // User's SocialNetworkData
  socialNetwork: Array<SocialNetworkData> = [];

  // User's SocialNetworkData
  communityList: Array<SocialNetworkData> = [];
}
