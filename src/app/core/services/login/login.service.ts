import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }

  authenticate(username : string, password : string) : void {
    this.http.post<{ id_token: string }>(`${environment.apiConstants.API_DOMAIN}/authenticate`, {
      username: username,
      password: password,
      rememberMe: true
      }).subscribe(
        response => {
          sessionStorage.setItem('access_token', response.id_token)
          sessionStorage.setItem('authenticatedUser', username)
        }
      )    
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem('authenticatedUser')
  }

  getAuthToken() {
    return sessionStorage.getItem('access_token')
  }
 
  isUserLoggedIn() : boolean {
    let user = sessionStorage.getItem('authenticatedUser')
    return user !== null
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser')
  }
}
