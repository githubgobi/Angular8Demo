import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'; // new
import { ListComponent } from './list/list.component'; // new
import { LoginComponent } from './login/login.component'; // new
import { RegisterComponent } from './register/register.component'; // new
import { AuthGuard } from './_helpers'; // new

const routes: Routes = [
{ path: '' , component : HomeComponent, canActivate: [AuthGuard]}, // new
{ path: 'list', component : ListComponent, canActivate: [AuthGuard]}, //new
{ path: 'login', component: LoginComponent},
{ path: 'register', component: RegisterComponent},

// otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
