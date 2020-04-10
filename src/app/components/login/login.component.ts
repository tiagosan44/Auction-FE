import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'auction-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  username : string 
  password : string
  invalidLogin : boolean = false

  handleLogin() : void {
    console.log(this.username)
    console.log(this.password)  
    if(this.username !== 'santiago' && this.password !== 'dummy') {
      this.invalidLogin = true 
      return
    }
    this.router.navigate(['welcome', this.username])
  }
  
  constructor(private router : Router) { }

  ngOnInit(): void {
  }
}
