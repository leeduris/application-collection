import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';

import { AngularFireModule } from 'angularfire2';
import { AuthGuard } from './auth.service';
import { routes } from './app.routes';



export const firebaseConfig = {
  apiKey: "AIzaSyBdf3d0Zy-oQONhuB1LSnrTsPWZvVmNELI",
  authDomain: "a02authfirebase.firebaseapp.com",
  databaseURL: "https://a02authfirebase.firebaseio.com",
  projectId: "a02authfirebase",
  storageBucket: "a02authfirebase.appspot.com",
  messagingSenderId: "237403544844"
};


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routes
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

