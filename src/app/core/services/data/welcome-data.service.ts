import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http'
import { Question } from '../../models/question-model';
import { Answer } from '../../models/answer-model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private httpClient : HttpClient ) { }

  getQuestionById(questionId : String) : Observable<Question> {
    return this.httpClient.get<Question>(`${environment.apiConstants.API_DOMAIN}/questions/${questionId}`)
  }

  saveQuestion(question : Question) {
    return this.httpClient.post(`${environment.apiConstants.API_DOMAIN}/questions`, question)
  }

  updateQuestion(questionId : String, question : Question) {
    return this.httpClient.put(`${environment.apiConstants.API_DOMAIN}/questions/${questionId}`, question)
  }

  retrieveAllQuestions() {
      return this.httpClient.get<Question[]>(`${environment.apiConstants.API_DOMAIN}/questions`)
  }

  retrieveAnswersByQuestion(questionId : String) {
    return this.httpClient.get<Answer[]>(`${environment.apiConstants.API_DOMAIN}/questions/${questionId}/answers`)
  }

  deleteAnswer(questionId : String, answerId : String) {
    return this.httpClient.delete(`${environment.apiConstants.API_DOMAIN}/questions/${questionId}/answers/${answerId}`)
  }
}
