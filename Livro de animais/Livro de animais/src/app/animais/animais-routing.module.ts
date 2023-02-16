import { NovoAnimalComponent } from './novo-animal/novo-animal.component';
import { ListaAnimaisResolver } from './lista-animais/lista-animais.resolver';
import { DetalheAnimalComponent } from './detalhe-animal/detalhe-animal.component';
import { ListaAnimaisComponent } from './lista-animais/lista-animais.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ListaAnimaisComponent, //Classe correspondente ao componente.
    resolve:{ //Para carregar informações da API antes de carregar a página.
      animais: ListaAnimaisResolver //Atribuo o resolver a uma variável animais.
    }
  },
  {
    path: 'novo',
    component: NovoAnimalComponent,
  },
  {
    path: ':animalId', // /animais/2 ou 3 ou 5..
    component: DetalheAnimalComponent //Esse é o componente do path(URL)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimaisRoutingModule { } //Configuração das rotas animais.
