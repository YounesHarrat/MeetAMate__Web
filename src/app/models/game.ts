import { GameInfo } from "./game-info";

export class Game {
  id: string = "";
  nom: string = "";
  picture: string = "";
  background_picture: string = "";
  info: GameInfo = new GameInfo();
}
