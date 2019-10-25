import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent} from './login-page/login-page.component';
import { RegPageComponent } from './reg-page/reg-page.component';


const routes: Routes = [{
  path:'login',
  component: LoginPageComponent
},
{
  path:'register',
  component:RegPageComponent
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
