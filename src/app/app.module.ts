import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavContentComponent } from './sidenav/sidenav-content/sidenav-content.component';
import { ForceChangeDialogComponent } from './shared/force/force-change-dialog/force-change-dialog.component';
import {HttpClientModule} from "@angular/common/http";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./in-memory-data.service";
import {RouterModule} from "@angular/router";
import { WelcomeComponent } from './welcome/welcome.component';
import { SidenavContainerComponent } from './sidenav/sidenav-container/sidenav-container.component';
import {CharacterModule} from "./character/character.module";
import {FormsModule} from "@angular/forms";
import {MaterialModule} from "./material/material.module";
import {CommonModule} from "@angular/common";
import {AngularFireModule} from "@angular/fire";
import {environment} from "../environments/environment";
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import {AngularFireAuthModule} from "@angular/fire/auth";

// import {CharacterService} from "./character/character.service";

@NgModule({
  declarations: [
    AppComponent,
    SidenavContentComponent,
    WelcomeComponent,
    SidenavContainerComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    CharacterModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false}
    )
  ],
  providers: [],
  entryComponents: [ForceChangeDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
