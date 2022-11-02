import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FireStoreService } from '../fire-store.service';
import { usuarios } from '../models/models';
import { AuthService } from '../servicios/auth.service';
import { NxstoreService } from '../servicios/nxstore.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  datos: usuarios={
    correo : null,
    password : null,
    uid :null
  }

  constructor(private auth: AuthService,
              private firestore: NxstoreService,
              private router: Router) { }

  ngOnInit() {
  }

  async registrar(){
    console.log('datos ->', this.datos);
    const res = await this.auth.registroUsuario(this.datos).catch(error => {
      console.log('error')
    })
    if (res) {
      console.log('Usuario registrado exitosamente')
      const path = "Usuarios";
      const id = res.user.uid;
      this.datos.uid = id;
      this.datos.password = null
      this.firestore.createDoc(this.datos, path, id);
      this.router.navigate(['/login'])
    }
  }
}
