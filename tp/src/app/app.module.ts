import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModuleModule } from "./modulos/material-module/material-module.module";
import { PrimeModuleModule } from "./modulos/prime-module/prime-module.module";
import { RuteoModuleModule } from "./modulos/ruteo-module/ruteo-module.module";
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { DatosComponent } from './componentes/datos/datos.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { ErrorComponent } from './componentes/error/error.component';
import { MenuJuegosComponent } from './componentes/menu-juegos/menu-juegos.component';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    RegistroComponent,
    CabeceraComponent,
    DatosComponent,
    PrincipalComponent,
    ErrorComponent,
    MenuJuegosComponent
  ],
  imports: [
    BrowserModule,
    MaterialModuleModule,
    PrimeModuleModule,
    RuteoModuleModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
