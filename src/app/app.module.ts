import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';
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

import { CalendarModule } from 'angular-calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WhatIsUltimateComponent } from './ultimate/what-is-ultimate/what-is-ultimate.component';
import { SotgComponent } from './ultimate/sotg/sotg.component';
import { LinkKeeperComponent } from './link-keeper/link-keeper.component';
import { LinkItemComponent } from './link-keeper/link-item/link-item.component';
import { SzaubComponent } from './events/szaub/szaub.component';

import { SuiModule } from 'ng2-semantic-ui';
import { MatchItemComponent } from './events/szaub/match-item/match-item.component';
import { SulifrizbiComponent } from './events/sulifrizbi/sulifrizbi.component';
import { SzupikupaComponent } from './events/szupikupa/szupikupa.component';
import { DiscoverComponent } from './events/discover/discover.component';

import { HttpClientModule } from '@angular/common/http';
import { NewsEditorComponent } from './admin/news-editor/news-editor.component';
import { AdminComponent } from './admin/admin.component';

// Import Angular plugin.
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import { DomSanitizer } from '@angular/platform-browser';
import { NewsListComponent } from './admin/news-list/news-list.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ImageUploadModule } from 'angular2-image-upload';

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
      { path: 'szupi',      component: SzupikupaComponent },
      { path: 'sulifrizbi', component: SulifrizbiComponent },
      { path: 'szaub',      component: SzaubComponent },
      { path: 'discover',   component: DiscoverComponent },
    ]
  },
  { path: 'ultimate',       component: UltimateControllerComponent,
    children:[
      { path: '',           redirectTo: 'ultimate', pathMatch: 'full' },
      { path: 'ultimate',   component: WhatIsUltimateComponent },
      { path: 'sotg',       component: SotgComponent },
      { path: 'knowledge',  component: UnderconstructionComponent },
      { path: 'links',      component: LinkKeeperComponent },
      { path: 'training',   component: UnderconstructionComponent },
      { path: 'ultiquiz',   component: UnderconstructionComponent },
    ]
  },
  { path: 'contact',        component: ContactComponent },
  { path: 'admin',          component: AdminComponent },
  { path: 'admin/newsEditor/:newsID',component: NewsEditorComponent },
  { path: 'newsList',       component: NewsListComponent }
];

@Pipe({ name: 'safeHtml'})
export class SafeHtmlPipe implements PipeTransform  {
  constructor(private sanitized: DomSanitizer) {}
  transform(value) {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}

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
    UltimateControllerComponent,
    WhatIsUltimateComponent,
    SotgComponent,
    LinkKeeperComponent,
    LinkItemComponent,
    SzaubComponent,
    MatchItemComponent,
    SulifrizbiComponent,
    SzupikupaComponent,
    DiscoverComponent,
    NewsEditorComponent,
    AdminComponent,
    SafeHtmlPipe,
    NewsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes), // <-- routes
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB35US8O5Fakotbr2WtYvoxP6T9UcuSJDY'
    }),
    CalendarModule.forRoot(),
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    SuiModule,
    HttpClientModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    Ng2SmartTableModule,
    ImageUploadModule.forRoot()
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "hu-HU" },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
