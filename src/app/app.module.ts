import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { HeaderInfosComponent } from './header-infos/header-infos.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    HeaderInfosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "hu-HU" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
