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
import { MemberControllerComponent } from './members/memberController/memberController.component';
import { MembersComponent } from './members/members/members.component';
import { PlayersComponent } from './members/players/players.component';
import { ManagersComponent } from './members/managers/managers.component';
import { ShortManagersDataComponent } from './members/short-managers-data/short-managers-data.component';
import { NewsArticleItemComponent } from './news/news-article-item/news-article-item.component';
import { NewsSzaub3Component } from './news/news-szaub3/news-szaub3.component';
import { NewsSulifrizbi4Component } from './news/news-sulifrizbi4/news-sulifrizbi4.component';
import { ArticleComponent } from './news/article/article.component';
import { UnderconstructionComponent } from './underconstruction/underconstruction.component';
import { NewsAboutUsComponent } from './news/news-about-us/news-about-us.component';
import { CalendarComponent } from './calendar/calendar.component';
import { NewsControllerComponent } from './news/news-controller/news-controller.component';
import { EventsControllerComponent } from './events/events-controller/events-controller.component';
import { UltimateControllerComponent } from './ultimate/ultimate-controller/ultimate-controller.component';

const routes: Routes = [
  { path: '',                 redirectTo: 'startPage', pathMatch: 'full' },
  { path: 'article',          component: ArticleComponent,
    children:[ 
      { path: '',               redirectTo: 'sulifrizbi4', pathMatch: 'full' },
      { path: 'sulifrizbi4',    component: NewsSulifrizbi4Component },
      { path: 'szaub3',         component: NewsSzaub3Component },
    ] },
  { path: 'startPage',        component: StartPageComponent },
  { path: 'news',             component: NewsControllerComponent,
    children:[ 
      { path: 'news',             component: NewsComponent },
      { path: 'newsAboutUs',      component: UnderconstructionComponent },
    ]
  },
  { path: 'practices',        component: PracticesComponent,
    children:[ 
      { path: '',               redirectTo: 'indoorPractice', pathMatch: 'full' },
      { path: 'indoorPractice', component: IndoorPracticeComponent },
      { path: 'outdoorPractice',component: OutdoorPracticeComponent },
    ]
  },
  { path: 'members',        component: MemberControllerComponent,
    children:[ 
      { path: '',           redirectTo: 'players', pathMatch: 'full' },
      { path: 'managers',   component: ManagersComponent },
      { path: 'players',    component: PlayersComponent },
      { path: 'members',    component: MembersComponent },
    ]
  },
  { path: 'calendar',       component: CalendarComponent },
  { path: 'events',         component: EventsControllerComponent,
    children:[
      { path: '',           redirectTo: 'ultimate', pathMatch: 'full' },
      { path: 'szupi',      component: UnderconstructionComponent },
      { path: 'sulifrizbi', component: UnderconstructionComponent },
      { path: 'szaub',      component: UnderconstructionComponent },
      { path: 'discover',   component: UnderconstructionComponent },
    ]
  },
  { path: 'ultimate',        component: UltimateControllerComponent,
    children:[
      { path: '',           redirectTo: 'ultimate', pathMatch: 'full' },
      { path: 'ultimate',   component: UnderconstructionComponent },
      { path: 'sotg',       component: UnderconstructionComponent },
      { path: 'knowledge',  component: UnderconstructionComponent },
      { path: 'links',      component: UnderconstructionComponent },
      { path: 'training',   component: UnderconstructionComponent },
      { path: 'ultiquiz',   component: UnderconstructionComponent },
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
    NewsComponent,
    MembersComponent,
    PlayersComponent,
    ManagersComponent,
    ShortManagersDataComponent,
    NewsArticleItemComponent,
    NewsSzaub3Component,
    NewsSulifrizbi4Component,
    ArticleComponent,
    UnderconstructionComponent,
    MemberControllerComponent,
    NewsAboutUsComponent,
    CalendarComponent,
    NewsControllerComponent,
    EventsControllerComponent,
    UltimateControllerComponent
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
