import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { TopNavBarComponent } from './components/main/top-nav-bar/top-nav-bar.component';
import { LeftSideNavBarComponent } from './components/main/left-side-nav-bar/left-side-nav-bar.component';
import { CenteredContentComponent } from './components/main/centered-content/centered-content.component';
import { RightSideNavBarComponent } from './components/main/right-side-nav-bar/right-side-nav-bar.component';
import { BotNavBarComponent } from './components/main/bot-nav-bar/bot-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    LeftSideNavBarComponent,
    CenteredContentComponent,
    RightSideNavBarComponent,
    BotNavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
