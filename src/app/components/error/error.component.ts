import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'auction-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.sass']
})
export class ErrorComponent implements OnInit {

  errorMessage : string = 'An error has ocurred!'

  constructor() { }

  ngOnInit(): void {
  }

}
