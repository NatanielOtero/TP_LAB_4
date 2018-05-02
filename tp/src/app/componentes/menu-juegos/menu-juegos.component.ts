import { Component, OnInit } from '@angular/core';
import { MiFirebaseService } from '../../servicios/mi-firebase.service';
import { ActivatedRoute, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-menu-juegos',
  templateUrl: './menu-juegos.component.html',
  styleUrls: ['./menu-juegos.component.css']
})
export class MenuJuegosComponent implements OnInit {


  cars: any[];
  isLogged : boolean = false;
  nombreUsuario : string;
  emailUsuario : string;
  msgs: any[];

  constructor(private auth : MiFirebaseService, public routes : ActivatedRoute, public router : Router) {
      this.msgs = [];
      this.cars = [
          {vin: 'r3278r2', year: 2010, brand: 'Audi', color: 'Black'},
          {vin: 'jhto2g2', year: 2015, brand: 'BMW', color: 'White'},
          {vin: 'h453w54', year: 2012, brand: 'Honda', color: 'Blue'},
          {vin: 'g43gwwg', year: 1998, brand: 'Renault', color: 'White'},
          {vin: 'gf45wg5', year: 2011, brand: 'VW', color: 'Red'}
          
          
      ];
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
