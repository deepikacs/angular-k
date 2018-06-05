import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SinguppageComponent } from './singuppage/singuppage.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { FeedPageComponent } from './feed-page/feed-page.component';
import { LoginComponent } from './login/login.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'sign_up', component: SinguppageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard-page', component:DashboardPageComponent},
  { path: 'feed-page', component:FeedPageComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SinguppageComponent,
    DashboardPageComponent,
    FeedPageComponent,
    LoginComponent

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
