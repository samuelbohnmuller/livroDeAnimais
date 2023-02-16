import { environment } from './../../../environments/environment';
import { NovoUsuario } from './novo-usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = environment.apiURL //Propriedade com endereço registrado para todo o sistema.

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  constructor(private http: HttpClient) { }

  cadastrarNovoUsuario(novoUsuario: NovoUsuario){
    return this.http.post(`${API}/user/signup`, novoUsuario) //Retorna o Observable.
  }

  verificaUsuarioExistente(nomeDoUsuario: string){
    return this.http.get(`${API}/user/exists/${nomeDoUsuario}`) //Verifica se o nome do usuário passado na chamado do método existe nessa URL da API.
  }

}
