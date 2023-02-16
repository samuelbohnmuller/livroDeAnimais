import { TokenService } from './token.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AutenticacaoInterceptor implements HttpInterceptor { //Intercepta toda requisição que sai da aplicação.

  constructor(private tokenService: TokenService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler): Observable<HttpEvent<unknown>> {
      if(this.tokenService.possuiToken()){
        const token = this.tokenService.retornaToken()
        const headers = new HttpHeaders().append('x-access-token', token)
        request = request.clone({headers}) //Faz clone do request e passa o cabeçalho.
      }
    return next.handle(request); //Continua a requisição.
  }
}
