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
import { ImagenCartaComponent } from './widgets/carta/imagen-carta/imagen-carta.component';
import { CartaPageComponent } from './pages/cartas/carta-page/carta-page.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { AuthGuard } from './guards/auth.guard';
import { LogoutGuard } from './guards/logout.guard';
import { BtnLogoutComponent } from './widgets/btn-logout/btn-logout.component';
import { BtnPaypalComponent } from './widgets/btn-paypal/btn-paypal.component';
import { BtnCarritoComponent } from './widgets/btn-carrito/btn-carrito.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { PasarelaComponent } from './pages/pasarela/pasarela.component';
import { FacturacionComponent } from './pages/pasarela/facturacion/facturacion.component';
import { CompraComponent } from './pages/pasarela/compra/compra.component';
import { PagoComponent } from './pages/pasarela/pago/pago.component';
import { CompraModule } from './pages/pasarela/compra/compra.module';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cartas', component: CartasComponent },
  { path: 'carrito', component: CarritoComponent },
  {
    path: 'pasarela',
    component: PasarelaComponent,
    children: [
      { path: 'facturacion', component: FacturacionComponent },
      { path: 'pago', component: PagoComponent },
      { path: 'compra', component: CompraComponent },
    ],
  },

  { path: 'carta/:id', component: CartaPageComponent },
  { path: 'login', component: LoginComponent, canActivate: [LogoutGuard] },
  { path: 'usuario', component: UsuariosComponent, canActivate: [AuthGuard] },
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
    SigninComponent,
    ImagenCartaComponent,
    CartaPageComponent,
    UsuariosComponent,
    BtnLogoutComponent,
    BtnPaypalComponent,
    BtnCarritoComponent,
    CarritoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    CompraModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
