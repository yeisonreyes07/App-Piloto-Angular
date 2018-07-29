import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { promise } from '../../../node_modules/protractor';
import { resolve } from 'url';
import 'rxjs/add/operator/map'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public _angularFireAuth: AngularFireAuth
  ) { }

  registarUsuario( email:string, password:string ){
    return new Promise(( resolve, reject ) => {
      this._angularFireAuth.auth.createUserWithEmailAndPassword ( email,password )
      .then( userData => resolve(userData),
      err => reject (err) );
    });
  }

  iniciarSesion( email:string, password:string ){
    return new Promise(( resolve, reject ) => {
      this._angularFireAuth.auth.signInWithEmailAndPassword ( email,password )
      .then( userData => resolve(userData),
      err => reject (err) );
    });
  }

  getAuth(){
    return this._angularFireAuth.authState.map ( auth => auth );
  }

  cerrarSesion(){
    return this._angularFireAuth.auth.signOut();
  }

}
