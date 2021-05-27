import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-communaute',
  templateUrl: './communaute.component.html',
  styleUrls: ['./communaute.component.css']
})
export class CommunauteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 display = false;
 onPress() {
   console.log("ehheheh")
   this.display = true;
 }
}
