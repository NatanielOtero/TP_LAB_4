import { Component, OnInit } from '@angular/core';
import { JuegoPropio } from "../../../clases/juego-propio";
import { MiFirebaseService } from '../../../servicios/mi-firebase.service';

@Component({
  selector: 'app-blackjack',
  templateUrl: './blackjack.component.html',
  styleUrls: ['./blackjack.component.css']
})
export class BlackjackComponent implements OnInit {
  juego : JuegoPropio;
  resultado : any;
  display : boolean = false;
  jugo :boolean = false;
  mostrar :boolean = true;
  jugando : boolean = true;
  corto : boolean = true;
  nuevo : boolean = true;
  cargando : boolean = false;
  nombreJugador :string;
  constructor(public auth : MiFirebaseService) {
    this.juego = new JuegoPropio();
   }

  ngOnInit() {
    this.auth.getAuth().subscribe( user =>{
      let mail = user.email;      
      let splitted = mail.split("@",1);
      this.nombreJugador = splitted[0];
    });
  }
  mas()
  {

    this.juego.jugar();
 
    this.cargando = true;    
    const interval = window.setInterval(() => {   
   
    
       
        this.resultado= this.juego.verificarJuego();
        if(this.resultado == "Ganó" || this.resultado =="Perdió")
        {
          this.corto = false;
          this.jugando = true;
          this.nuevo = false;
          this.guardar();   
        }
        this.cargando = false;
   
    }, 1000); 
    
     
    
    
    console.log(this.juego);

  }
  cortar()
  {
      this.nuevo = false;
      this.jugando = true;
      this.corto = false;
      this.resultado= this.juego.cortar();
      console.log(this.juego);
      console.log(this.resultado);
      this.guardar();   
  }

 
  showDialog()
  {
    this.display = true;
  }
  jugar()
  {
    
    this.corto = true;
    this.resultado = "";
    this.nuevo = true;
    this.jugo = true;
    this.jugando = false;
    this.juego = new JuegoPropio();
    this.juego.jugar();
    this.juego.jugar();   
    this.resultado= this.juego.verificarJuego();
    if(this.resultado == "Ganó" || this.resultado =="Perdió")
    {
      this.corto = false;
      this.jugando = true;
      this.nuevo = false;  
      this.guardar();    
    }
    console.log(this.juego);
    
    this.mostrar = false;
    
  }

  guardar()
  {
    this.juego.usuario = this.nombreJugador;
    this.juego.juego = "BlackJack";
    console.log(this.juego);
    this.auth.guardarBlackjack(this.juego);

  }
}
