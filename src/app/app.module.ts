import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';

import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { VerticalMenuComponent } from './vertical-menu/vertical-menu.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ShortNewsComponent } from './startPage/short-news/short-news.component';
import { ShortSzuflaComponent } from './startPage/short-szufla/short-szufla.component';
import { ShortTeamMembersComponent } from './startPage/short-team-members/short-team-members.component';
import { ShortEventsComponent } from './startPage/short-events/short-events.component';
import { ShortGaleryComponent } from './startPage/short-galery/short-galery.component';
import { ShortContactsComponent } from './startPage/short-contacts/short-contacts.component';
import { ShortMembersDataComponent } from './startPage/short-members-data/short-members-data.component';
import { IndoorPracticeComponent } from './practices/indoor-practice/indoor-practice.component';
import { OutdoorPracticeComponent } from './practices/outdoor-practice/outdoor-practice.component';
import { ContactComponent } from './contact/contact.component';
import { StartPageComponent } from './startPage/start-page/start-page.component';
import { PracticesComponent } from './practices/practises/practices.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  { path: '',                 redirectTo: 'startPage', pathMatch: 'full' },
  { path: 'startPage',        component: StartPageComponent },
  { path: 'news',             component: NewsComponent },
  { path: 'practices',        component: PracticesComponent,
    children:[ 
      { path: '',               redirectTo: 'indoorPractice', pathMatch: 'full' },
      { path: 'indoorPractice', component: IndoorPracticeComponent },
      { path: 'outdoorPractice',component: OutdoorPracticeComponent },
    ]
  },
  { path: 'contact',            component: ContactComponent }
];

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
    ShortMembersDataComponent,
    IndoorPracticeComponent,
    OutdoorPracticeComponent,
    ContactComponent,
    StartPageComponent,
    PracticesComponent,
    HeaderMenuComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes), // <-- routes
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB35US8O5Fakotbr2WtYvoxP6T9UcuSJDY'
    })
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "hu-HU" },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
