import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

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
    // {name:" Liste des jeux", route:"/jeux", icon:"videogame_asset"},
    {name:" Communauté", route:"/communaute", icon:"group"},
    {name:" Support", route:"/parametres", icon:"contact_support"},
    // {name:" Paramètre", route:"/parametres", icon:"settings"},
  ]
  

  private _mobileQueryListener: () => void;
  router: Router;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, router: Router, public auth: AuthService) {
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
    this.auth.user$.subscribe((profile) => {
      if(profile?.email){
        this.fillerNav.push({name:" Se Deconnecter", route:"/authentification", icon:"fingerprint"})
      }
      else{
        this.fillerNav.push({name:" Se connecter", route:"/authentification", icon:"fingerprint"})
      }
    })
  }
}
