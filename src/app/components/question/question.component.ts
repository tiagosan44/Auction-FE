import { Component, OnInit } from '@angular/core';
import { WelcomeDataService } from 'src/app/core/services/data/welcome-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from 'src/app/core/models/question-model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.sass']
})
export class QuestionComponent implements OnInit {

  questionId : String
  question : Question = new Question()

  constructor(
    private activatedRouter : ActivatedRoute,
    private router : Router, 
    private welcomeService : WelcomeDataService
  ) { }

  ngOnInit() : void {
    this.questionId = this.activatedRouter.snapshot.params['questionId']
    if(this.questionId) {
      this.welcomeService.getQuestionById(this.questionId)
        .subscribe(
          response => this.question = response
        )
    }
  }

  saveQuestion() {
    if(this.questionId) {
      this.welcomeService.updateQuestion(this.questionId, this.question)
        .subscribe(
          () => this.router.navigate(['questions'])
        )
    } else {
      this.welcomeService.saveQuestion(this.question)
        .subscribe(
          () => this.router.navigate(['questions'])
        )
    }
  }
}
