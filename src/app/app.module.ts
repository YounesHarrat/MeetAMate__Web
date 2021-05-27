import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavBarComponent } from './components/main/top-nav-bar/top-nav-bar.component';
import { CenteredContentComponent } from './components/main/centered-content/centered-content.component';
import { RightSideNavBarComponent } from './components/main/right-side-nav-bar/right-side-nav-bar.component';
import { BotNavBarComponent } from './components/main/bot-nav-bar/bot-nav-bar.component';
import { MaterialModule } from './material/material.module';
import { AccueilComponent } from './components/routes/accueil/accueil.component';
import { JeuxComponent } from './components/routes/jeux/jeux.component';
import { ForumComponent } from './components/routes/forum/forum.component';
import { CommunauteComponent } from './components/routes/communaute/communaute.component';
import { AmisComponent } from './components/routes/amis/amis.component';
import { ProfilComponent } from './components/routes/profil/profil.component';
import { ParametresComponent } from './components/routes/parametres/parametres.component';
import { MainPageProfilComponent } from './components/routes/profil/pageProfil/main-page-profil/main-page-profil.component';
import { TopInfosUserComponent } from './components/routes/profil/pageProfil/top-infos-user/top-infos-user.component';
import { LeftListGameUserComponent } from './components/routes/profil/pageProfil/left-list-game-user/left-list-game-user.component';
import { RightFriendsUserComponent } from './components/routes/profil/pageProfil/right-friends-user/right-friends-user.component';
import { AuthentificationComponent } from './components/routes/authentification/authentification.component';


import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';

import { LoginButtonComponent } from './shared/authButtons/loginButton/login-button.component';
import { LogoutButtonComponent } from './shared/authButtons/logoutButton/logout-button.component';

// Services
import { UserService } from '../app/shared/services/user/user.service';
import { SigninButtonComponent } from './shared/authButtons/signinButton/signin-button.component';
@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    CenteredContentComponent,
    RightSideNavBarComponent,
    BotNavBarComponent,
    ProfilComponent,
    AccueilComponent,
    JeuxComponent,
    ForumComponent,
    CommunauteComponent,
    AmisComponent,
    ParametresComponent,
    MainPageProfilComponent,
    TopInfosUserComponent,
    LeftListGameUserComponent,
    RightFriendsUserComponent,
    AuthentificationComponent,
    LoginButtonComponent,
    LogoutButtonComponent,
    SigninButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    ScrollingModule,
    // 👇 add and initialize AuthModule
    AuthModule.forRoot({
      ...env.auth,
    }),
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
