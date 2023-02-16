import { Router } from '@angular/router';
import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  usuario = ''
  senha = ''

  constructor(private autenticacao: AutenticacaoService, private router: Router){} //Injeto classe que faz autenticação por HTTP e lib de rotas.

  ngOnInit(): void {}

  logar(){ //Método chamado no evento de submit do formulário de login.
    this.autenticacao.autenticar(this.usuario, this.senha)
      .subscribe(()=>{ //O valor do retorno da autenticação será um Observable que estará em subscribe( () => {} é arrow function).
        this.router.navigate(['animais']) //Navego até a rota de animais.
      }, (error) => {alert("usuário ou senha inválidas."), console.log(error)}) //Caso de erro.
  }
}
