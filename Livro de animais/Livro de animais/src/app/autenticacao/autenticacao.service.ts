import { UsuarioService } from './usuario/usuario.service';
import { Observable, tap } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const API = environment.apiURL

@Injectable({
  providedIn: 'root' //Classe pode ser injetada em todo a aplicação.
})
export class AutenticacaoService {

  constructor(private httpClient: HttpClient, private usuarioService: UsuarioService) {}

  autenticar(usuario: string, senha: string): Observable<HttpResponse<any>>{ //HttpResponse<any> para pegar a requisição inteira, não só o body.
    return this.httpClient.post(`${API}/user/login`, {
      userName: usuario, //Mapeio os atributos locais que vieram da classe que chama o método, com atributo da API.
      password: senha,
    },
    {observe: 'response'}) //Indico que quero o header da requisição.
      .pipe( //Salva o token no serviço.
        tap((response) => { //Pega a resposta(do tipo HttpResponse).
          const authToken = response.headers.get('x-access-token') ?? '' //Pega o token que está no header. Caso não tenha, retorna vazio.
          this.usuarioService.salvaToken(authToken) //Salva o token no localStorage no serviço de token do nosso sistema.
        })
      )
  }

}
