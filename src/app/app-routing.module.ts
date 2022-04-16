import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';
import { HomeComponent } from './pages/home/home.component';
import { MyWorkComponent } from './pages/my-work/my-work.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'my-work',component:MyWorkComponent},
  {path:'contact-me',component:ContactMeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
