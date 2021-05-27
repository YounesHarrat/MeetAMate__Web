import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-communaute',
  templateUrl: './communaute.component.html',
  styleUrls: ['./communaute.component.css']
})
export class CommunauteComponent implements OnInit {
  display:boolean;

  constructor() { 
    this.display = false;
  }

  ngOnInit(): void {
  }
 
  onPress() {
    this.display = true;
  }
}
