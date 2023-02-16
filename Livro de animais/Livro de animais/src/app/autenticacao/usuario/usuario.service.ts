import { TokenService } from './../token.service';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { Usuario } from './usuario';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService { //Serviço que pega Usuário com token.

  private usuarioSubject = new BehaviorSubject<Usuario>({}) //Observable que guarda estado de tipo e de estado inicial vazio.

  constructor(private tokenService:TokenService) {
    if(this.tokenService.possuiToken()){ //Se o token já existir no localStorage do usuário.
      this.decodificaJWT() //Notifica os componentes.
    }
   }

  private decodificaJWT(){
    const token = this.tokenService.retornaToken()
    const usuario = jwt_decode(token) as Usuario //Decodifica usando biblioteca.
    this.usuarioSubject.next(usuario) //Quem chama esse método, recebe o usuário.
  }

  retornaUsuario(){ //Retorna o usuario já logado.
    return this.usuarioSubject.asObservable() //Retorna o Usuário de forma que somente a classe tenha acesso.
  }

  salvaToken(token:string){ //Salva o token.
    this.tokenService.salvaToken(token)
    this.decodificaJWT() //Notifica todos os componentes que tenham um token novo.
  }

  logout(){
    this.tokenService.excluiToken() //Exclui o token.
    this.usuarioSubject.next({}) //Notifica que não tem usuário.
  }

  EstaLogado(){
    return this.tokenService.possuiToken()
  }
}
