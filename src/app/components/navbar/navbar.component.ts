import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public isLogin:boolean
  public userName:string
  public email:string

  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(( auth ) => {
      if (auth) {
        this.isLogin = true;
        this.userName = auth.displayName;
        this.email = auth.email;

        console.log(this.email);
        console.log(this.userName);
      } else {
        this.isLogin = false;
      }
    })
  }

  logOut(){
    this.authService.cerrarSesion();
  }

}
