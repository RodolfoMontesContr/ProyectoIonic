import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  credenciales ={
    correo : null,
    password : null
  }

  constructor( private auth: AuthService, 
               private router: Router) { }

  ngOnInit() {
  }

  async login(){
    console.log('credenciales ->', this.credenciales);
    const res = await this.auth.login(this.credenciales.correo, this.credenciales.password).catch( error =>
      console.log('error'))
    if (res){
      console.log('res ->', res);
      this.router.navigate(['/hom2'])
    }
  }
  

}
