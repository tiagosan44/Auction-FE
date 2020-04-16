import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/core/models/question-model';
import { WelcomeDataService } from 'src/app/core/services/data/welcome-data.service';
import { Answer } from 'src/app/core/models/answer-model';
import { error } from 'protractor';
import { Router } from '@angular/router';

@Component({
  selector: 'auction-list-questions',
  templateUrl: './list-questions.component.html',
  styleUrls: ['./list-questions.component.sass']
})
export class ListQuestionsComponent implements OnInit {

  questions : Question[]

  answers : Answer[]

  constructor(
    private welcomeService : WelcomeDataService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.refreshAnswers()

    this.welcomeService.retrieveAllQuestions().subscribe(
      response => this.questions = response
    )
  }

  refreshAnswers() {
    this.welcomeService.retrieveAnswersByQuestion("1000").subscribe(
      response => {
        this.answers = response
      }
    )
  }

  deleteAnswer(answerId : String) : void {
    this.welcomeService.deleteAnswer("1000", answerId).subscribe(
      () => this.refreshAnswers(),
      error => console.log(error)
    )
  }

  goQuestion(questionId : String) : void {
    this.router.navigate(['question', questionId])
  }
}
