import { Router } from '@angular/router';
import { UsuarioService } from './../../autenticacao/usuario/usuario.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent {

  user$ = this.usuarioService.retornaUsuario() //$ depois da variável não é obrigatório, é convensão. Ela guarda retorno do observable da interface Usuario.

  constructor(private usuarioService: UsuarioService, private router: Router){}

  logout(){
    this.usuarioService.logout() //Exclui o token e navegador fica sem usuário.
    this.router.navigate(['']) //Quando desloga, volta pra home.
  }

}
