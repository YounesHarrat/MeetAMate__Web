import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-jeux',
  templateUrl: './jeux.component.html',
  styleUrls: ['./jeux.component.css']
})
export class JeuxComponent implements OnInit {

  ListeDeJeux = [
    {id:"1", title:"Apex Legend", pictureUrl:"https://labo.fnac.com/wp-content/uploads/2019/02/apex-legends.png"},
    {id:"2", title:"Rocket League", pictureUrl:"https://image.api.playstation.com/vulcan/ap/rnd/202009/1717/O4a5fDUWo54zIJzOyKgV73U2.png"},
    {id:"3", title:"Fortnite", pictureUrl:"https://store-images.s-microsoft.com/image/apps.39723.70702278257994163.958bb3bc-e151-4401-a360-075b4cb46da9.85b8ec28-bfa4-4a95-9e7a-156869284a19"},
    {id:"4", title:"Apex Legend", pictureUrl:"https://labo.fnac.com/wp-content/uploads/2019/02/apex-legends.png"},
    {id:"5", title:"Rocket League", pictureUrl:"https://image.api.playstation.com/vulcan/ap/rnd/202009/1717/O4a5fDUWo54zIJzOyKgV73U2.png"},
    {id:"6", title:"Fortnite", pictureUrl:"https://store-images.s-microsoft.com/image/apps.39723.70702278257994163.958bb3bc-e151-4401-a360-075b4cb46da9.85b8ec28-bfa4-4a95-9e7a-156869284a19"},
    {id:"7", title:"Apex Legend", pictureUrl:"https://labo.fnac.com/wp-content/uploads/2019/02/apex-legends.png"},
    {id:"8", title:"Rocket League", pictureUrl:"https://image.api.playstation.com/vulcan/ap/rnd/202009/1717/O4a5fDUWo54zIJzOyKgV73U2.png"},
    {id:"9", title:"Fortnite", pictureUrl:"https://store-images.s-microsoft.com/image/apps.39723.70702278257994163.958bb3bc-e151-4401-a360-075b4cb46da9.85b8ec28-bfa4-4a95-9e7a-156869284a19"},
    {id:"10", title:"Apex Legend", pictureUrl:"https://labo.fnac.com/wp-content/uploads/2019/02/apex-legends.png"},
    {id:"11", title:"Rocket League", pictureUrl:"https://image.api.playstation.com/vulcan/ap/rnd/202009/1717/O4a5fDUWo54zIJzOyKgV73U2.png"},
    {id:"12", title:"Fortnite", pictureUrl:"https://store-images.s-microsoft.com/image/apps.39723.70702278257994163.958bb3bc-e151-4401-a360-075b4cb46da9.85b8ec28-bfa4-4a95-9e7a-156869284a19"},

  ]

  totalSize= this.ListeDeJeux.length;
  pageSize = 5;
  pageIndex = 0;

  constructor() { }

  ngOnInit(): void {

  }

  lowValue: number = 0;
  highValue: number = 5;

  // used to build an array of papers relevant at any given time
  public getPaginatorData(event: PageEvent): PageEvent {
    //event.pageIndex = this.pageIndex;
    this.lowValue = event.pageIndex * event.pageSize;
    this.highValue = this.lowValue + event.pageSize;
    console.log('return this::', event);

    return event;
  }

}

