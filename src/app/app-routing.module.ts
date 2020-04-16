import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ErrorComponent } from './components/error/error.component';
import { ListQuestionsComponent } from './components/list-questions/list-questions.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RouteGuardService } from './core/services/route-guard/route-guard.service';
import { AnswerComponent } from './components/answer/answer.component';
import { QuestionComponent } from './components/question/question.component';


const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'questions', component: ListQuestionsComponent, canActivate:[RouteGuardService]},
  { path: 'welcome/:name', component: WelcomeComponent, canActivate:[RouteGuardService]},
  { path: 'logout', component: LogoutComponent, canActivate:[RouteGuardService]},
  { path: 'answer/:answerId', component: AnswerComponent, canActivate:[RouteGuardService]},
  { path: 'question/:questionId', component: QuestionComponent, canActivate:[RouteGuardService]},
  
  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
