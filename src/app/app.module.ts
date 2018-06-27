import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { BestcoursesComponent } from './bestcourses/bestcourses.component';
import { LearnerstylesComponent } from './learnerstyles/learnerstyles.component';
import {ProfileComponent } from './profile/profile.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    BestcoursesComponent,
    LearnerstylesComponent,
    ProfileComponent,
    ContactUsComponent,
    SignUpComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
