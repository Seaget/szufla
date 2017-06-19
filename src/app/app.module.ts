import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { VerticalMenuComponent } from './vertical-menu/vertical-menu.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ShortNewsComponent } from './short-news/short-news.component';
import { ShortSzuflaComponent } from './short-szufla/short-szufla.component';
import { ShortTeamMembersComponent } from './short-team-members/short-team-members.component';
import { ShortEventsComponent } from './short-events/short-events.component';
import { ShortGaleryComponent } from './short-galery/short-galery.component';
import { ShortContactsComponent } from './short-contacts/short-contacts.component';
import { ShortMembersDataComponent } from './short-members-data/short-members-data.component';

@NgModule({
  declarations: [
    AppComponent,
    VerticalMenuComponent,
    NavigationBarComponent,
    ShortNewsComponent,
    ShortSzuflaComponent,
    ShortTeamMembersComponent,
    ShortEventsComponent,
    ShortGaleryComponent,
    ShortContactsComponent,
    ShortMembersDataComponent
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
