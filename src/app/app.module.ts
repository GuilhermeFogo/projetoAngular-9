import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { LoginModule } from './page/login/login.module';
import { FormLoginComponent } from './module/users/form-login/form-login.component';
import { GerenciaClienteComponent } from './page/gerencia-cliente/gerencia-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
