
export class GameInfo {

  Id: Number = 0;
  Nom: string ="";
  Heures: Number = 0;

  constructor(id:Number=0, nom: string='', heure: Number=0) {
    this.Id = id;
    this.Nom = nom;
    this.Heures = heure;
  }
}
