import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartaoComponent } from './cartao.component';



@NgModule({
  declarations: [
    CartaoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[CartaoComponent] //Exporto para que o componente seja utilizado por toda a aplicação.
})
export class CartaoModule { }
