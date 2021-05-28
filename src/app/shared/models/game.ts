import { GameInfo } from "./game-info";

export class Game {
  id: string = "";
  title: string = "";
  pictureUrl: string = "";
  info: GameInfo = new GameInfo();
}
