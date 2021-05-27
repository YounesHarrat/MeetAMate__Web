import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.css']
})
export class TopNavBarComponent implements OnInit {

  mobileQuery: MediaQueryList;

  //fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);
  fillerNav = [
    {name:" Accueil", route:"/accueil", icon:"home"},
    {name:" Profil", route:"/profil", icon:"account_circle"},
    {name:" Liste des jeux", route:"/jeux", icon:"videogame_asset"},
    {name:" Forum", route:"/forum", icon:"contact_support"},
    {name:" Communauté", route:"/communaute", icon:"contact_support"},
    {name:" Paramètre", route:"/parametres", icon:"settings"},
    {name:" Se connecter/deconnecter", route:"/authentification", icon:"fingerprint"}
  ]


  private _mobileQueryListener: () => void;
  router: Router;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, router: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.router = router;
  }

  redirectHome(): void {
    this.router.navigateByUrl("/accueil");
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = true;

  ngOnInit(): void {
  }

}
