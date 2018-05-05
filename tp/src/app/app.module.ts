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
import { FormsModule } from '@angular/forms';
import { MiFirebaseService } from './servicios/mi-firebase.service';

import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { CargandoComponent } from './componentes/cargando/cargando.component';
import { NgStyle, CommonModule } from '@angular/common';
import { AdivinaComponent } from './componentes/juegos/adivina/adivina.component';
import { PptComponent } from './componentes/juegos/ppt/ppt.component';
import { AgilidadComponent } from './componentes/juegos/agilidad/agilidad.component';
import { BlackjackComponent } from './componentes/juegos/blackjack/blackjack.component';
import { AnagramaComponent } from './componentes/juegos/anagrama/anagrama.component';
import { TatetiComponent } from './componentes/juegos/tateti/tateti.component';
import { JugadorService } from './servicios/jugador.service';


const config = {
  apiKey: "AIzaSyBdZQqwfomKDBdD4huu-Rhn06s5sQ-RSPw",
  authDomain: "tp-saladejuegos.firebaseapp.com",
  databaseURL: "https://tp-saladejuegos.firebaseio.com",
  projectId: "tp-saladejuegos",
  storageBucket: "tp-saladejuegos.appspot.com",
  messagingSenderId: "338133003717"
};

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
    MenuJuegosComponent,
    CargandoComponent,
    AdivinaComponent,
    PptComponent,
    AgilidadComponent,
    BlackjackComponent,
    AnagramaComponent,
    TatetiComponent,
  
  ],
  imports: [
    CommonModule,    
    BrowserModule,
    MaterialModuleModule,
    PrimeModuleModule,
    RuteoModuleModule,
    FormsModule,   
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config),  
  ],
  providers: [MiFirebaseService,JugadorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
