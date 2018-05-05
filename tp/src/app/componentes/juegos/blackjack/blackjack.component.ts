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
    
      this.resultado= this.juego.verificarJuego();
      if(this.resultado == "gano" || this.resultado =="perdio")
      {
        this.corto = false;
        this.jugando = true;
        this.nuevo = false;
      }
    
    
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
    if(this.resultado == "Gano" || this.resultado =="Perdio")
    {
      this.corto = false;
      this.jugando = true;
      this.nuevo = false;
    }
    console.log(this.juego);
    
    this.mostrar = false;
    
  }

}
