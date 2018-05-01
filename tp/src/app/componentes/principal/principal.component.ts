import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  displayLogin: boolean = false;
  displayRegistro: boolean = false;
  constructor() { }
 

    showLogin() {
        this.displayLogin = true;
    }
    showRegistro() {
      this.displayRegistro = true;
  }
  ngOnInit() {
  }

}
