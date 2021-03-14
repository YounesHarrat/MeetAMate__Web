import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavBarComponent } from './components/top-nav-bar/top-nav-bar.component';
import { LeftSideNavBarComponent } from './components/left-side-nav-bar/left-side-nav-bar.component';
import { RightSideNavBarComponent } from './components/right-side-nav-bar/right-side-nav-bar.component';
import { BotNavBarComponent } from './components/bot-nav-bar/bot-nav-bar.component';
import { CenteredContentComponent } from './components/centered-content/centered-content.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    LeftSideNavBarComponent,
    RightSideNavBarComponent,
    BotNavBarComponent,
    CenteredContentComponent
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
