import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parametres',
  templateUrl: './parametres.component.html',
  styleUrls: ['./parametres.component.css']
})
export class ParametresComponent implements OnInit {

  colors = ['red', 'blue', 'green'];


  constructor() { }

  ngOnInit(): void {
  }

}
