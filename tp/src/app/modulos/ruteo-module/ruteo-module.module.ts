import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from '../../componentes/menu/menu.component';
import { LoginComponent } from '../../componentes/login/login.component';
import { RegistroComponent } from '../../componentes/registro/registro.component';
import { CabeceraComponent } from '../../componentes/cabecera/cabecera.component';
import { DatosComponent } from '../../componentes/datos/datos.component';
import { PrincipalComponent } from "../../componentes/principal/principal.component";
import { ErrorComponent } from "../../componentes/error/error.component";
import { MenuJuegosComponent } from '../../componentes/menu-juegos/menu-juegos.component';
import { CargandoComponent } from '../../componentes/cargando/cargando.component';

const MiRuteo = [
  {path: '' , component: PrincipalComponent},
  {path: 'Login' , component: LoginComponent},  
  {path: 'Registro' , component: RegistroComponent},
  {path: 'Principal' , component: PrincipalComponent}, 
  {path: 'Menu' , component: MenuComponent},    
  {path: 'MenuJuegos' , component: CargandoComponent}, 
  {path: '**' , component: ErrorComponent},
  {path: 'error' , component: ErrorComponent}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(MiRuteo),
  ],
  exports:[    
    RouterModule
  ],
  declarations: []
})
export class RuteoModuleModule { }
