import { AutenticacaoGuard } from './autenticacao/autenticacao.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanLoad } from '@angular/router';

const routes: Routes = [ //Configuração das rotas principal.
  {
    path: '', //Se URL vier vazia depois de /,
    pathMatch: 'full', //Tratamento de espaços obrigatório para não dar erro.
    redirectTo: 'home' //Será redirecionado para o componente home.
  },
  { //Técnica lazy load, só será carregado o módulo quando o mesmo for instanciado na URL pelo usuário.
    path: 'home', //Quando o usuário acessar a home.
    loadChildren: () => import('./home/home.module') //Será requisitado o módulo sob demanda, somente quando for requisitado na URL.
      .then((modulo) => modulo.HomeModule) //O import acima retorna uma promisse, nessa promisse terá o HomeModule.
  },
  {
    path: 'animais',
    loadChildren: () => import('./animais/animais.module')
        .then((modulo) => modulo.AnimaisModule), canLoad: [AutenticacaoGuard] //canLoad é para guardar essa rota(Somente entra se autenticado).

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } //Configuração das rotas principal.
