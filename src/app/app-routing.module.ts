import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BioComponent } from './components/bio/bio.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { WhoAmIComponent } from './components/who-am-i/who-am-i.component';

import { ContactMeComponent } from './pages/contact-me/contact-me.component';
import { HomeComponent } from './pages/home/home.component';
import { MyWorkComponent } from './pages/my-work/my-work.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'my-work',component:MyWorkComponent},
  {path:'contact-me',component:ContactMeComponent},
  {path:'who-am-i',component:WhoAmIComponent},
  {path:'short-bio',component:BioComponent},
  {path:'hobbies',component:HobbiesComponent},
  {path:'..',component:HomeComponent}

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
