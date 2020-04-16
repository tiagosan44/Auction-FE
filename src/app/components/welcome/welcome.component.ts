import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from 'src/app/core/services/data/welcome-data.service';
import { Question } from 'src/app/core/models/question-model';

@Component({
  selector: 'auction-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.sass']
})
export class WelcomeComponent implements OnInit {

  constructor(
    private route : ActivatedRoute,
    private welcomeData : WelcomeDataService
  ) { }

  name : String = ''
  messageFromService : String

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessage() {
    this.welcomeData.getQuestionById("1000").subscribe(
      response => this.handleSuccesfulWelcome(response),
      error => this.handleErrorWelcome(error)
    )
  }

  handleErrorWelcome(error: any): void {
    this.messageFromService = error.error.message
  }

  handleSuccesfulWelcome(response: Question) {
    this.messageFromService = response.description
  }
}
