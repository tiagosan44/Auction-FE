import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/services/login/login.service';

@Component({
  selector: 'auction-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.sass']
})
export class TopMenuComponent implements OnInit {

  constructor(public loginService : LoginService) { }

  //isUserLoggedIn : boolean =  false

  ngOnInit(): void {
    //this.isUserLoggedIn = this.loginService.isUserLoggedIn()
  }
}
