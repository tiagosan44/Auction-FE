import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ErrorComponent } from './components/error/error.component';
import { ListQuestionsComponent } from './components/list-questions/list-questions.component';
import { LogoutComponent } from './components/logout/logout.component';


const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'questions', component: ListQuestionsComponent},
  { path: 'login', component: LoginComponent},
  { path: 'welcome/:name', component: WelcomeComponent},
  { path: 'logout', component: LogoutComponent},

  
  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
