import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { MiFirebaseService } from '../../servicios/mi-firebase.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  
  
  constructor(public auth : MiFirebaseService, public routes : ActivatedRoute,public router : Router) { }

  items: MenuItem[];
  items2: MenuItem[];


    salir()
    {
        this.auth.logOut();
        this.router.navigate(["/"]);
        
    }
    est()
    {
        this.router.navigate(["/Menu/Estadisticas"]);
    }
    ngOnInit() {


        this.items = [
            {label: 'Adivina',routerLink:'/Menu/Adivina' },
            {label: 'Agilidad',routerLink:'/Menu/Agilidad' },
            {label: 'Piedra Papel tijera',routerLink:'/Menu/ppt'},
            {label: 'TaTeTi',routerLink:'/Menu/Tateti' },
            {label: 'Anagrama',routerLink:'/Menu/Anagrama'},
            {label: 'Blackjack', routerLink:'/Menu/BlackJack'}              
        ];       
    }

}
