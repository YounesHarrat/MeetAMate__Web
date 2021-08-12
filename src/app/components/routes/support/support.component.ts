import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {

  colors = ['red', 'blue', 'green'];


  constructor() { }

  ngOnInit(): void {
  }

}
