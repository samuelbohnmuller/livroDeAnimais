import { Injectable } from '@angular/core';

const KEY = 'token' //Chave do localStorage.

@Injectable({
  providedIn: 'root'
})
export class TokenService { //Serviço de geração de token.

  retornaToken(){
    return localStorage.getItem(KEY) ?? '' //Retorna o localStorage pegando a chave. Se não pegar, retorna variável em branco.
  }

  salvaToken(token: string){
    localStorage.setItem(KEY, token) //Seta no banco do navegador na chave o token.
  }

  excluiToken(){
    localStorage.removeItem(KEY)
  }

  possuiToken(){
    return !!this.retornaToken() //Retorna boolean(!!) se tem token.
  }

}
