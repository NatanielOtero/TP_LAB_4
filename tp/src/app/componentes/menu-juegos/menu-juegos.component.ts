import { Component, OnInit } from '@angular/core';
import { MiFirebaseService } from '../../servicios/mi-firebase.service';
import { ActivatedRoute, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-menu-juegos',
  templateUrl: './menu-juegos.component.html',
  styleUrls: ['./menu-juegos.component.css']
})
export class MenuJuegosComponent implements OnInit {


  juegos: any[];
  isLogged : boolean = false;
  nombreUsuario : string;
  emailUsuario : string;
  msgs: any[];
  
  constructor(private auth : MiFirebaseService, public routes : ActivatedRoute, public router : Router) {
      this.msgs = [];
      this.juegos = [
          {name: 'Adivina el numero', desc: "Adivina el numero secreto, Crees que podras?",img : "assets/images/adivina.png"},
          {name: 'Agilidad Aritmetica', desc: "Resuelve las operaciones en el menor tiempo posible, Acepta el desafio",img : "assets/images/cerebro.jpg" },
          {name: 'Anagrama', desc: "Descifra la palabra desordenada",img : "assets/images/anagramas.jpg"},
          {name: 'Piedra papel tijera', desc: "Juega contra la maquina en este clasico juego",img : "../../../assets/images/ppt.jpg"},
          {name: 'TaTeTi', desc: "Logra marcar 3 en linea para ganar",img : "assets/images/adivina.png"},
          {name: 'BlackJack', desc: "Prueba tu suerte en este juego de cartas",img : "assets/images/memoria.jpg"},
          
          
      ];
      console.log(this.juegos);
  }

  

  ngOnInit()
  {
    this.auth.getAuth().subscribe( user =>{
          if(user)
          {
            this.isLogged=true;
            this.nombreUsuario = user.displayName;
            this.emailUsuario = user.email;
          }
          else
          {
            this.isLogged = false;
            this.router.navigate(['/']);
          }

      })
  }

}
