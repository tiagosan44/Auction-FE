import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login/login.service';

@Component({
  selector: 'auction-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router, 
    private loginService : LoginService) { }

  ngOnInit(): void {
  }

  username : string 
  password : string
  invalidLogin : boolean = false

  handleLogin() : void {
    console.log(this.username)
    console.log(this.password)  
    if(this.loginService.authenticate(this.username, this.password)) {
      this.router.navigate(['welcome', this.username])
      return
    }
    this.invalidLogin = true 
  }
}
