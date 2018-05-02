import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MiFirebaseService } from '../../servicios/mi-firebase.service';
import { Usuario } from '../../clases/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  display: boolean = false;
  usuario : Usuario;
  errorMsg : string = "";
  
  constructor(private route : ActivatedRoute,private router : Router, private auth : MiFirebaseService) {
    this.usuario = new Usuario();
   }

  Login()
  {
    if(this.usuario.email == null || this.usuario.pass == null)
    {
        this.error("Complete todos los campos");
    }
    else
    {
      this.auth.logear(this.usuario)
      .then((res) => {console.log(res),
      this.router.navigate(['/MenuJuegos']);
        })
      .catch((err) => {
        this.error(err.message)
      })
     
     
    }
    
  }
  ngOnInit() {
  }

  error(Msg : string)
  {
     this.errorMsg = Msg;
     this.showDialog();
  } 

 

   showDialog() {
       this.display = true;
   }

}
