import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-non-connecter',
  templateUrl: './non-connecter.component.html',
  styleUrls: ['./non-connecter.component.css']
})
export class NonConnecterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToConnexion(){
    this.router.navigateByUrl('/authentification');
  }
}
