import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SinguppageComponent } from './singuppage/singuppage.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { FeedPageComponent } from './feed-page/feed-page.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'sign_up', component: SinguppageComponent },
  // { path: '**', component: PageNotFoundComponent }
  // { path: 'table_data', component: TableDataComponent },
  ];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SinguppageComponent,
    DashboardPageComponent,
    FeedPageComponent
  ],
  imports: [
    RouterModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
