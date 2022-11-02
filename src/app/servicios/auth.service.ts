import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { usuarios } from '../models/models';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authfirebase: AngularFireAuth) { }


  login(correo: string, password: string){
    return this.authfirebase.signInWithEmailAndPassword(correo, password)
  }
  
  registroUsuario(datos: usuarios){
    return this.authfirebase.createUserWithEmailAndPassword(datos.correo, datos.password)
  }

}
  
