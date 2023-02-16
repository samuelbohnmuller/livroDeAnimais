import { AbstractControl } from '@angular/forms';
import { NovoUsuarioService } from './../novo-usuario.service';
import { Injectable } from '@angular/core';
import { first, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExisteService {

  constructor(private novoUsuarioService: NovoUsuarioService) { }

  seUsuarioJaExiste(){ //Validação assíncrona.
    return (controle: AbstractControl) => {
      return controle.valueChanges.pipe( //Converte a digitação do usuário no campo em requisição.
        switchMap((nomeUsuario) => this.novoUsuarioService.verificaUsuarioExistente(nomeUsuario)), //Efetua a troca do fluxo da digitação pelo da requisição. Variável nomeUsuario está com valor observable e verifica se esse nome existe na API.
          map((usuarioExiste) => usuarioExiste ? {usuarioExistente: true} : null), first()) //Variável recebe o resultado da linha acima em booleano, true ou false. Verifica se(?) verdadeiro o resultado é true se não(:) false. Variável usuarioExistente é a que deve ser usada na validação do formulário HTML. Por último fecha o observable, quando o usuário terminar de digitar.
    }
  }

}
