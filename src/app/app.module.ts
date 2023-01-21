import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CartasComponent } from './pages/cartas/cartas.component';
import { HttpClientModule } from '@angular/common/http';
import { CartaComponent } from './widgets/carta/carta.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/login/signup/signup.component';
import { SigninComponent } from './pages/login/signin/signin.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cartas', component: CartasComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartasComponent,
    CartaComponent,
    LoginComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
