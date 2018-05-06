import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import * as firebase from "firebase/app";
import "rxjs/add/operator/map";
import { Usuario } from "../clases/usuario";
import { Juego } from '../clases/juego';
import { JuegoAdivina } from '../clases/juego-adivina';
import { Observable } from 'rxjs/Observable';
import { JuegoPropio } from '../clases/juego-propio';
import { JuegoPiedraPapelTijera } from '../clases/juego-piedra-papel-tijera';
import { JuegoAnagrama } from '../clases/juego-anagrama';
import { JuegoAgilidad } from '../clases/juego-agilidad';

@Injectable()
export class MiFirebaseService {
  respuestasAFL : AngularFireList<any>;
  respuestasObservable : Observable<any>;
  constructor(
    public afAuth : AngularFireAuth,
    public afDB : AngularFireDatabase
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

  traerDatosAdivina()
  {
      this.respuestasAFL = this.afDB.list("/resultadosAdivina");
      this.respuestasObservable = this.respuestasAFL.valueChanges();
      return this.respuestasObservable;
  }

  guardarPuntuacionAdivina(juegoAdivina : JuegoAdivina)
  {
    const resultadosAdivina = this.afDB.list("/resultadosAdivina/");
    resultadosAdivina.push(juegoAdivina);
  }

  traerDatosAgilidad()
  {
      this.respuestasAFL = this.afDB.list("/resultadosAgilidad");
      this.respuestasObservable = this.respuestasAFL.valueChanges();
      return this.respuestasObservable;
  }

  guardarPuntuaciónAgilidad(juegoAgilidad : JuegoAgilidad)
  {
    const resultadosAgilidad = this.afDB.list("/resultadosAgilidad/");
    resultadosAgilidad.push(juegoAgilidad);
  }

  traerDatosAnagrama()
  {
      this.respuestasAFL = this.afDB.list("/resultadosAnagrama");
      this.respuestasObservable = this.respuestasAFL.valueChanges();
      return this.respuestasObservable;
  }

  guardarPuntuaciónAnagrama(juegoAnagrama : JuegoAnagrama)
  {
    const resultadosAnagrama = this.afDB.list("/resultadosAnagrama/");
    resultadosAnagrama.push(juegoAnagrama);
  }

  traerDatosPiedraPapelTijera()
  {
      this.respuestasAFL = this.afDB.list("/resultadosPiedraPapelTijera");
      this.respuestasObservable = this.respuestasAFL.valueChanges();
      return this.respuestasObservable;
  }

  guardarPuntuaciónPiedraPapelTijera(juegoPiedraPapelTijera : JuegoPiedraPapelTijera)
  {
    const resultadosPiedraPapelTijera = this.afDB.list("/resultadosPiedraPapelTijera/");
    resultadosPiedraPapelTijera.push(juegoPiedraPapelTijera);
  }

  traerDatosBlackjack()
  {
      this.respuestasAFL = this.afDB.list("/resultadosReaccionVisual");
      this.respuestasObservable = this.respuestasAFL.valueChanges();
      return this.respuestasObservable;
  }

  guardarBlackjack(juego : JuegoPropio)
  {
    const resultadosReaccionVisual = this.afDB.list("/resultadosBlackJack/");
    resultadosReaccionVisual.push(juego);
  }
}
