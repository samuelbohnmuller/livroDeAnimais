import { AutenticacaoInterceptor } from './autenticacao.interceptor';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[{ //providers é um serviço de httpInterceptor. Registro o interceptor aqui no modulo de autenticacao.
    provide: HTTP_INTERCEPTORS,
    useClass: AutenticacaoInterceptor,
    multi: true, //Multiplos interceptors poderei fazer.
  }]
})
export class AutenticacaoModule { }
