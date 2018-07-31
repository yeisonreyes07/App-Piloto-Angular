import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  public email:string;
  public password:string;
  
  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  onSubmitAddUser(){
    this.authService.registrarUsuario( this.email, this.password )
    .then( (res)  => {
      console.log("Registro exitoso!");
      this.router.navigate(['/dashboard']);
    }).catch ( (err) => {
      console.log("Error!!!!!!");
      this.router.navigate(['/register']);
    })
  }
}
