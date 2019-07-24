import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'; // new

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'; // new
import { ListComponent } from './list/list.component'; // new
import { LoginComponent } from './login/login.component'; // new
import { RegisterComponent } from './register/register.component'; // new

// other imports
import { FormsModule } from '@angular/forms'; // new
import { HttpClientModule } from '@angular/common/http';  // new
// used to create fake backend
import { fakeBackendProvider } from './_helpers'; // new
import { JwtInterceptor, ErrorInterceptor } from './_helpers';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, // new
    ListComponent, // new
    LoginComponent, // new
    RegisterComponent // new
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // new
    HttpClientModule,   // new
    ReactiveFormsModule // new
  ],
  providers: [
    // provider used to create fake backend
        fakeBackendProvider,

      { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
      { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
