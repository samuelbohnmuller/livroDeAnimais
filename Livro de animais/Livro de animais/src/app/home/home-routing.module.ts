import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';

const routes: Routes = [
  {
    path: '', //Cada elemento criado é do ponto de vista do módulo home, por isso é vazio.
    component: HomeComponent, //Nome da classe do componente.
    children:[ //Subrotas(Dentro de home, terá outro componente de login).
      {
        path: '', //Como a tela de login é a tela default, fica vazio o caminho.
        component: LoginComponent //Componente que será mostrado.
      },
      {
        path: 'novousuario', //Nome da rota que apresentará na URL e inserido em um routerLink.
        component: NovoUsuarioComponent
      }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { } //Configuração das rotas home.
