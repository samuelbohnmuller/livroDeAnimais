import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AnimaisService } from './../animais.service';
import { UsuarioService } from './../../autenticacao/usuario/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Animais } from '../animais';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: ['./lista-animais.component.css']
})
export class ListaAnimaisComponent implements OnInit{

  //animais$!: Observable<Animais> //!: pois será instanciado no ngOnInit. Observable de Animais pois ele será usado funções de subscride do RXJS.
  animais!: Animais

  constructor(private activatedRoute: ActivatedRoute){} //Pega a lista de animais por rota.

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      this.animais = this.activatedRoute.snapshot.data['animais'] //animais dentro de [''] é a propriedade do resolver daclarado no routing de animais que passa um resolver de animais buscando os dados da API antes de carregar a página.
    })
    
    //this.animais$ = this.usuarioService.retornaUsuario().pipe( //Opera no fluxo. Passa o retorno(Observable de Animais) para variável do tipo Observable, fazendo fluxo de subscribe automático.
      //switchMap((usuario) => {//Funções do RXJS que manipulam o fluxo de informações dentro do observable. switchMap troca o fluxo de usuário.
        //const userName = usuario.name ?? '' //o retornaUsuario retorna um Usuario, então pego o pelo nome e passo para nova variável.
        //return this.animaisService.listaDoUsuario(userName) //Retorna a troca de fluxo de usuario para animais(retorna um Observable de Animais).
      //})
    //)
  }

}
