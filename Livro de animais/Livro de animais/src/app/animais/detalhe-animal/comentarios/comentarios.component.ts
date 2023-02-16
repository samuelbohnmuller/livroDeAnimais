import { switchMap, tap } from 'rxjs/operators';
import { ComentariosService } from './comentarios.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Comentarios } from './comentarios';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit{

  @Input() id!: number //Para o id receber o comentário da foto.
  comentarios$!: Observable<Comentarios> //Poderei usar os atributos da interface Comentarios através da variável que recebe o retorno do JSON na API.
  comentarioForm!: FormGroup //Captura os valores dos campos do formulário.

  constructor(private comentariosService: ComentariosService, private formBuilder: FormBuilder){} //formBuilder para fazer o formulário reativo.

  ngOnInit(): void {
    this.comentarios$ = this.comentariosService.buscaComentario(this.id) //Retorna os comentários pelo id.
    this.comentarioForm = this.formBuilder.group({
      comentario: ['', Validators.maxLength(200)]
    })
  }

  gravar(): void{
    const comentario = this.comentarioForm.get('comentario')?.value ?? '' //Pega o valor do campo comentario no formulário do componente.
    this.comentarios$ = this.comentariosService.incluiComentarios(this.id, comentario) //Recarrega a página, mostrando o comentários junto com a linha abaixo.
      .pipe(switchMap(() => this.comentariosService.buscaComentario(this.id)), //Trocando o fluxo de inclusão, para o fluxo de buscar os comentários no servidor.
      tap(() => {
        this.comentarioForm.reset() //Reseta o formulário.
        alert('Comentário salvo')
      }))
    }

}
