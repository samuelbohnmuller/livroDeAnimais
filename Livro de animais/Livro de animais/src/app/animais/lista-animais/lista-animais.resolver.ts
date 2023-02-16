import { switchMap, take } from 'rxjs/operators';
import { UsuarioService } from './../../autenticacao/usuario/usuario.service';
import { AnimaisService } from './../animais.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Animais } from '../animais';

@Injectable({
  providedIn: 'root'
})
export class ListaAnimaisResolver implements Resolve<Animais> { //Carrega informações antes da rota ser resolvida. Busca os animais na API, antes da página ser renderizada.

  constructor(private animaisService: AnimaisService, private usuarioService: UsuarioService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Animais> { //Retorna observable de animais.
    return this.usuarioService.retornaUsuario().pipe(
      switchMap((usuario) => { //Converte o fluxo de informação,
        const userName = usuario.name ?? '' //de usuário,
        return this.animaisService.listaDoUsuario(userName) //para buscar fotos pelo nome do usuário.
      }), take(1) //Finaliza o fluxo
    )
  }
}
