import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MyWorkComponent } from './pages/my-work/my-work.component';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';
import { WhoAmIComponent } from './components/who-am-i/who-am-i.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { BioComponent } from './components/bio/bio.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MyWorkComponent,
    ContactMeComponent,
    WhoAmIComponent,
    HobbiesComponent,
    BioComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
