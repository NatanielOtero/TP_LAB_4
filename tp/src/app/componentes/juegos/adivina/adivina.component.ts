import { Component, OnInit } from '@angular/core';
import { MiFirebaseService } from '../../../servicios/mi-firebase.service';
import { Usuario } from '../../../clases/usuario';

import { JugadorService } from '../../../servicios/jugador.service';
import { JuegoAdivina } from '../../../clases/juego-adivina';


@Component({
  selector: 'app-adivina',
  templateUrl: './adivina.component.html',
  styleUrls: ['./adivina.component.css']
})
export class AdivinaComponent implements OnInit {
  nombreJugador : string;
  nuevoJuego: JuegoAdivina = new JuegoAdivina();;
  Mensajes : string;
  ocultarVerificar : boolean = false;

  constructor(public auth : MiFirebaseService) 
  { 
    
  }

  comenzarJuego() //comienza juego
  {
   
    (<HTMLInputElement>document.getElementById("numeroIngresado")).disabled = false;
    this.nuevoJuego.generarNumero();
    this.ocultarVerificar = false;
  }

  verificar()
  {
    if (this.nuevoJuego.numeroIngresado <= 0 || this.nuevoJuego.numeroIngresado >= 101)
    {
      this.MostrarMensaje("¡Atención! debe ingresar un número de 1 a 100","Error");
    }
    else
    {
      this.nuevoJuego.verificarJuego();
     

      if (this.nuevoJuego.resultado == "Ganó")
      {
        //this.enviarJuego.emit(this.nuevoJuego);
        this.MostrarMensaje("¡Felicitaciones adivinaste el numero secreto!, era: "+this.nuevoJuego.numeroSecreto,this.nuevoJuego.resultado);
        this.ocultarVerificar = true;
        //Acá reiniciar el juego
      
      }
      else
      {
        if (this.nuevoJuego.resultado == "Erró")
        {
          let mensaje : string;
          
                  switch (this.nuevoJuego.intentos) 
                  {
                    case 1:
                      mensaje = "No, intento fallido, ánimo.";
                      break;
                      case 2:
                      mensaje ="Incorrecto, ¿¿¿te estarás acercando???";
                      break;
                      case 3:
                      mensaje ="No es el número, yo crei que la tercera era la vencida.";
                      break;
                      case 4:
                      mensaje ="No era el "+this.nuevoJuego.numeroIngresado+".";
                      break;
                      case 5:
                      mensaje =" intentos y nada.";
                      break;
                      case 6:
                      mensaje ="Mmm, ¿afortunado en el amor?";
                      break;
                      case 10:
                      mensaje = "Último intento, ¿tendrás la gran suerte de adivinar?"
                      break;                     
                    default:
                      mensaje ="Ya le erraste "+ this.nuevoJuego.intentos+" veces, ¡adiviná de una vez hermano!.";
                      break;
                  }
                 
                  this.MostrarMensaje("#"+this.nuevoJuego.intentos+" "+mensaje+" Ayuda: "+this.nuevoJuego.retornarAyuda(),this.nuevoJuego.resultado);
                 
        }
        else
        {
          this.MostrarMensaje("Se te acabaron los 10 intentos, ¡perdiste!",this.nuevoJuego.resultado);
          this.ocultarVerificar = true;
          (<HTMLInputElement>document.getElementById("numeroIngresado")).disabled = false;
        }

      }
    }
  }  

  MostrarMensaje(mensaje:string="este es el mensaje",resultado : string) 
  {
    this.Mensajes = mensaje;    
    var x = document.getElementById("snackbar");
    if(resultado == "Ganó")
    {
        x.className = "show Ganador";
    }
    else
    {
        x.className = "show Perdedor";
    }

    if(resultado == "Error")
    {
      x.className = "show Perdedor";
    }

    var model = this;

    setTimeout(
    function()
    { 
      x.className = x.className.replace("show", "");     

    }, 3000);    
  }

  reiniciarJuego()
  {
    
    this.nuevoJuego = new JuegoAdivina();
    this.nuevoJuego.numeroIngresado = null;
    (<HTMLInputElement>document.getElementById("numeroIngresado")).disabled = true;
  }
  
 

  ngOnInit() {
    this.auth.getAuth().subscribe( user =>{
      let mail = user.email;
      let splitted = mail.split("@",1);
      this.nombreJugador = splitted[0];
    });
    this.nuevoJuego.numeroIngresado = null;
    (<HTMLInputElement>document.getElementById("numeroIngresado")).disabled = true;
  }

}
