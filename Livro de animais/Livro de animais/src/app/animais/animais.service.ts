import { environment } from './../../environments/environment';
import { TokenService } from './../autenticacao/token.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, mapTo, Observable, of, throwError } from 'rxjs';
import { Animais, Animal } from './animais';

const API = environment.apiURL
const NOT_MODIFIED = '304'

@Injectable({
  providedIn: 'root'
})

export class AnimaisService { //Serviço que pega animais da API por usuário.

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  listaDoUsuario(nomeDoUsuario: string): Observable<Animais>{ //Conexão com a API retorna sempre um Observable(colocamos que precisa ser do tipo Animais)
    return this.http.get<Animais>(`${API}/${nomeDoUsuario}/photos`)//Retorna as fotos de Animais do usuário pelo token.
  }

  buscaPorId(id: number): Observable<Animal>{
    return this.http.get<Animal>(`${API}/photos/${id}`) //Busco foto pelo ID na API.
  }

  excluiAnimal(id: number): Observable<Animal>{
    return this.http.delete<Animal>(`${API}/photos/${id}`) //Deleta uma foto do tipo Animal pelo ID.
  }

  curtir(id: number): Observable<boolean>{
    return this.http.post(`${API}/photos/${id}/like`, {}, {observe: 'response'}) //Dá o like em photo por id, com corpo vazio. Captura a response inteira com o observe:response.
      .pipe( //pipe indica que quero manipular a requisição.
        mapTo(true), //Qualquer requisição com código de sucesso, retorna true.
        catchError((error) => { //Se apresentar erro.
          return error.status === NOT_MODIFIED ? of(false) : throwError(error) //Se o status do erro for NOT_MODIFIED, retorna um observable com valor false. Se não, retorna o nome do erro.
        })
      )
  }

  upload(descricao: string, permiteComentario: boolean, arquivo: File){
    const formData = new FormData() //Classe para enpacotar, incluir arquivos bináros(fotos) na requisição
    formData.append('description', descricao) //Valor passado no método vai para o atributo da API
    formData.append('allowComments', permiteComentario ? 'true' : 'false') //Se for texto, retorna stringtrue, se não retorna string false.
    formData.append('imageFile', arquivo) //Com o formData, se passa o arquivo no body da requisição.

    return this.http.post(`${API}/photos/upload`, formData, {observe: 'events', reportProgress: true}) //Passo os dados na requisição POST no endereço e observa o evento de progresso do upload.
  }

}
