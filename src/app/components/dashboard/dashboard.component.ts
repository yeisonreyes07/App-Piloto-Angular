import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public isLogin:boolean
  public username:string
  public email:string
  public userImage:string

  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(( auth ) => {
      if (auth) {
        this.isLogin = true;
        this.username = auth.displayName;
        this.email = auth.email;
        this.userImage = auth.photoURL;

      } else {
        this.isLogin = false;
      }

    })
  }

}







