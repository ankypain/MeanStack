import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MyLoginComponent } from './my-login/my-login.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegPageComponent } from './reg-page/reg-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule,Router } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MyLoginComponent,
    LoginPageComponent,
    RegPageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
