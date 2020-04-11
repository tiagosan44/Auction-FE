import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/services/login/login.service';

@Component({
  selector: 'auction-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.sass']
})
export class LogoutComponent implements OnInit {

  constructor(private loginService : LoginService) { }

  ngOnInit(): void {
    this.loginService.logout()
  }

}
