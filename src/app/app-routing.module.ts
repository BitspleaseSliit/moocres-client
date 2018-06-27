import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LearnerstylesComponent } from './learnerstyles/learnerstyles.component';
import { BestcoursesComponent } from './bestcourses/bestcourses.component';
import {ProfileComponent} from './profile/profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'learnerstyles', component: LearnerstylesComponent },
  { path: 'bestcourses', component: BestcoursesComponent },
  { path: 'profile', component : ProfileComponent},
  { path: 'signup', component : SignUpComponent},
  { path: 'login', component : LogInComponent},
  { path: 'contact-us', component : ContactUsComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
