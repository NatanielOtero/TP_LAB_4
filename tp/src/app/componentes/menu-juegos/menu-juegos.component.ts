import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-juegos',
  templateUrl: './menu-juegos.component.html',
  styleUrls: ['./menu-juegos.component.css']
})
export class MenuJuegosComponent implements OnInit {


  cars: any[];

  msgs: any[];

  constructor() {
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
  {}

}
