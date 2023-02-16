import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { Comentario, Comentarios } from './comentarios';
import { Observable } from 'rxjs';

const API = environment.apiURL

@Injectable({
  providedIn: 'root'
})
export class ComentariosService { //O service sempre cria os métodos de conexão com a API do componente.

  constructor(private http: HttpClient) { }

  buscaComentario(id: number): Observable<Comentarios>{
    return this.http.get<Comentarios>(`${API}/photos/${id}/comments`) //Retorna os comentários da foto pelo id.
  }

  incluiComentarios(id: number, commentText: string): Observable<Comentario>{
    return this.http.post<Comentario>(`${API}/photos/${id}/comments`, {commentText}) //POST para o endereço, passando o comentário da chamada do método.
  }
}
