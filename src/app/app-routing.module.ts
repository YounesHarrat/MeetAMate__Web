import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AccueilComponent } from './components/routes/accueil/accueil.component';
import { AmisComponent } from './components/routes/amis/amis.component';
import { CommunauteComponent } from './components/routes/communaute/communaute.component';
import { JeuxComponent } from './components/routes/jeux/jeux.component';
import { SupportComponent } from './components/routes/support/support.component';
import { ProfilComponent } from './components/routes/profil/profil.component';
import { AuthentificationComponent } from './components/routes/authentification/authentification.component';

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full'},
  { path: "", component: AppComponent, pathMatch: 'full'},
  { path: 'accueil', component: AccueilComponent},
  { path: 'profil', component: ProfilComponent},
  //{ path: 'jeux', component: JeuxComponent},
  { path: 'communaute', component: CommunauteComponent},
  { path: 'parametres', component: SupportComponent},
  { path: 'amis', component: AmisComponent},
  { path: 'authentification', component: AuthentificationComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
