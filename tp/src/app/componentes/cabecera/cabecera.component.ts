import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  
  
  constructor() { }

  items: MenuItem[];
  items2: MenuItem[];

    ngOnInit() {
        this.items = [
            {
                label: 'Juegos',
                items: [
                  {label: 'Adivina el Numero'},
                  {label: 'Agilidad Aritmetica'},     
                  {label: 'Piedra Papel Tijera'},
                  {label: 'TaTeTi'},
                  {label: 'Blackjack'},                   
                                    
                ]
            }            
        ];
        this.items2 = [
            {
                label: 'Perfil',
                items: [
                  {label: 'Records'},
                  {label: 'Salir'},                        
                                    
                ]
            }
        ]
    }

}
