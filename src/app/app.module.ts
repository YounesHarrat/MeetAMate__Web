import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavBarComponent } from './components/main/top-nav-bar/top-nav-bar.component';
import { RightSideNavBarComponent } from './components/main/right-side-nav-bar/right-side-nav-bar.component';
import { BotNavBarComponent } from './components/main/bot-nav-bar/bot-nav-bar.component';
import { MaterialModule } from './material/material.module';
import { AccueilComponent } from './components/routes/accueil/accueil.component';
import { JeuxComponent } from './components/routes/jeux/jeux.component';
import { CommunauteComponent } from './components/routes/communaute/communaute.component';
import { AmisComponent } from './components/routes/amis/amis.component';
import { ProfilComponent } from './components/routes/profil/profil.component';
import { SupportComponent } from './components/routes/support/support.component';
import { MainPageProfilComponent } from './components/routes/profil/pageProfil/main-page-profil/main-page-profil.component';
import { TopInfosUserComponent } from './components/routes/profil/pageProfil/top-infos-user/top-infos-user.component';
import { LeftListGameUserComponent } from './components/routes/profil/pageProfil/left-list-game-user/left-list-game-user.component';
import { RightFriendsUserComponent } from './components/routes/profil/pageProfil/right-friends-user/right-friends-user.component';
import { PageCommunauteComponent } from './components/routes/communaute/page-communaute/page-communaute.component';
import { AuthentificationComponent } from './components/routes/authentification/authentification.component';

import { CarouselComponent } from './components/routes/jeux/carousel/carousel';
// import { NgxGlideModule } from 'ngx-glide';

import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';

import { LoginButtonComponent } from './shared/Log_Buttons/loginButton/login-button.component';
import { LogoutButtonComponent } from './shared/Log_Buttons/logoutButton/logout-button.component';

// Services
import { UserService } from './services/user/user.service';
import { SigninButtonComponent } from './shared/Log_Buttons/signinButton/signin-button.component';
import { NonConnecterComponent } from './shared/LoggedOut/non-connecter/non-connecter.component';
import { HttpClientModule } from '@angular/common/http';
import { UserProfilDialogComponent } from './shared/Dialogs/user-profil-dialog/user-profil-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GenericActionSuccessSnackBarComponent } from './shared/SnackBars/GenericActionSuccessSnackBarComponent';
import { GenericActionErrorSnackBarComponent } from './shared/SnackBars/GenericActionErrorSnackBarComponent';
import { GenericMessageSnackBarComponent } from './shared/SnackBars/GenericMessageSnackBarComponent';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    RightSideNavBarComponent,
    BotNavBarComponent,
    ProfilComponent,
    AccueilComponent,
    JeuxComponent,
    CommunauteComponent,
    AmisComponent,
    SupportComponent,
    MainPageProfilComponent,
    TopInfosUserComponent,
    LeftListGameUserComponent,
    RightFriendsUserComponent,
    PageCommunauteComponent,
    AuthentificationComponent,
    LoginButtonComponent,
    LogoutButtonComponent,
    SigninButtonComponent,
    CarouselComponent,
    NonConnecterComponent,
    UserProfilDialogComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    // 👇 add and initialize AuthModule
    AuthModule.forRoot({
      ...env.auth,
    }),
    HttpClientModule,
    ScrollingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [
    UserProfilDialogComponent,
  ],
  providers: [UserService, GenericActionSuccessSnackBarComponent, GenericActionErrorSnackBarComponent, GenericMessageSnackBarComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
