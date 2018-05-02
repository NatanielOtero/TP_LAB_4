import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';
import { Usuario } from "../clases/usuario";

@Injectable()
export class MiFirebaseService {

  constructor(
    public afAuth : AngularFireAuth
  ) { }

  logOut()
  {
    return this.afAuth.auth.signOut();
  }

  registrar(usuario : Usuario)
  {
    return new Promise( (resolve , reject) =>
    {
      this.afAuth.auth.createUserWithEmailAndPassword(usuario.email,usuario.pass)
      .then( userData => resolve(userData), err => reject(err));
    }    
  );
  }

  logear(usuario : Usuario)
  {
    return new Promise( (resolve , reject) =>
    {
      this.afAuth.auth.signInWithEmailAndPassword(usuario.email,usuario.pass)
      .then( userData => resolve(userData), err => reject(err));
    }    
  );
  }

  getAuth()
  {
    return this.afAuth.authState.map( auth => auth);
  }

}
