import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'auction-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.sass']
})
export class WelcomeComponent implements OnInit {

  constructor(private route : ActivatedRoute) { }

  name : string = ''

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name']
    console.log(this.name)
  }

}
