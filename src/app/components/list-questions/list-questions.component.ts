import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/core/models/question-model';

@Component({
  selector: 'auction-list-questions',
  templateUrl: './list-questions.component.html',
  styleUrls: ['./list-questions.component.sass']
})
export class ListQuestionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  questions = [ 
    new Question(1, 'my 1 question', new Date(), new Date),
    new Question(2, 'my 2 question', new Date(), new Date), 
    new Question(3, 'my 3 question', new Date(), new Date),
    new Question(4, 'my 4 question', new Date(), new Date) 
  ]
}
