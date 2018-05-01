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
            {label: 'Adivina', icon: 'fa-bar-chart'},
            {label: 'Agilidad', icon: 'fa-calendar'},
            {label: 'Piedra Papel tijera', icon: 'fa-book'},
            {label: 'TaTeTi', icon: 'fa-support'},
            {label: 'Blackjack', icon: 'fa-twitter'}
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