import { GameInfo } from "./game-info";

export class Game {
  id: string = "";
  nom: string = "";
  picture: string = "";
  backgroundPicture: string = "";
  info: GameInfo = new GameInfo();
}
