import { Component, OnInit } from '@angular/core';
import { Usuario } from "../../clases/usuario";
import { MiFirebaseService } from '../../servicios/mi-firebase.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  display: boolean = false;
  usuario : Usuario;
  pass2 : string;
  errorMsg : string = "";
  constructor(public auth : MiFirebaseService,private route : ActivatedRoute,private router : Router) { 
    this.usuario = new Usuario();
  }

  ngOnInit() {
    
  }

  Registrar()
  {
    if(this.usuario.email == null || this.usuario.pass == null || this.pass2 == null)
    {
      this.error("Complete todos los campos !!!");

    }
    else
    {
      if(this.usuario.pass != this.pass2)
      {
        this.error("Las contraseñas no coinciden");
      }
      else
      {
          this.auth.registrar(this.usuario)
          .then((res)=>{console.log("Bien"),console.log(res);
        
            this.router.navigate(['/MenuJuegos']);
        })
          .catch((err) => {
            console.log(err);
            if(err.code == "auth/invalid-email")
            {
              this.error("El email ingresado no tiene un formato valido");
            }
            else
            {
              if(err.code ==  "auth/weak-password")
              {
                this.error("La contraseña debe ser de al menos 6 caracteres");
              }
              else
              {
                if(err.code == "auth/email-already-in-use")
                {
                  this.error("El email ya esta en uso");
                }
                else
                {
                 this.error("Error de conexion con el servidor");
                }
              }
            }
          });
      }
    }
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
