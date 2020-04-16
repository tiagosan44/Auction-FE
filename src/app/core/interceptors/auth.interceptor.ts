import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
      if (request.url.indexOf(environment.apiConstants.API_DOMAIN) !== -1) {
          const sessionToken = sessionStorage.getItem('access_token');
          if (sessionToken) {
              request = request.clone({
                  setHeaders: {
                      'Authorization': `Bearer ${sessionToken}`
                  }
              });
          }
      }
      return next.handle(request);
  }
}