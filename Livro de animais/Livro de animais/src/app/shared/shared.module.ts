import { ReactiveFormsModule } from '@angular/forms';
import { MensagemModule } from './../componentes/mensagem/mensagem.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  imports: [
    CommonModule, MensagemModule, ReactiveFormsModule
  ],
  exports:[MensagemModule, ReactiveFormsModule]
})
export class SharedModule { } //Modulo para importar modulos e não precisar importar os mesmos modulos nos componentes.
