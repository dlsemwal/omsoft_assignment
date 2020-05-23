import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegistartionComponent } from './registartion/registartion.component';


const routes: Routes = [
   {path:'',  redirectTo:'login',pathMatch: 'full'},
  {path:'login', component:LoginComponent, pathMatch: 'full'},
  {path:'signup', component:RegistartionComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
