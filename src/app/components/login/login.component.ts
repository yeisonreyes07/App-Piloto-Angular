import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email:string
  public password:string

  constructor(
    public authService:AuthService,
    public router:Router
  ) { }

  ngOnInit() {
  }

  onSubmitLogin(){
    this.authService.iniciarSesion( this.email, this.password )
    .then( (res)  => {
      console.log("Inicio de sesion exitoso!");
      this.router.navigate(['/dashboard']);
    }).catch ( (err) => {
      console.log("Inicio de sesión fallido");
      this.router.navigate(['/login']);
    })
  }

  onClickGoogleLogin(){
    this.authService.googleLogin()
    .then ( (res) => {
      console.log(res);
      this.router.navigate(['/dashboard']);
    }).catch ( (err) => {
      console.log("Error con Google");
      this.router.navigate(['/login']);
    })
  }

  onClickFacebookLogin(){
    this.authService.facebookLogin()
    .then ( (res) => {
      this.router.navigate(['/dashboard']);
    }).catch ( (err) => {
      console.log("Error con Facebook");
      this.router.navigate(['/login']);
    })
  }
}
