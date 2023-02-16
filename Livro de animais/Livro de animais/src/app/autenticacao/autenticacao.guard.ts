import { UsuarioService } from './usuario/usuario.service';
import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoGuard implements CanLoad { //Para guardar rotas.

  constructor(private usuarioService: UsuarioService, private router: Router){}

  canLoad(
    route: Route,
    segments: UrlSegment[]):
    Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
      if(!this.usuarioService.EstaLogado()){ //Se não estiver logado.
        this.router.navigate(['']) //Manda para tela de login.
        return false
      }
    return true
  }
}
