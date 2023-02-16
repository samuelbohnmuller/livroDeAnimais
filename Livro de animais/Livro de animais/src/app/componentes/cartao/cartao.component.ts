import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cartao', //O que é instanciado(<app-cartao></app-cartao>) no HTML da página para mostrar o componente completo.
  templateUrl: './cartao.component.html',
  styleUrls: ['./cartao.component.css']
})
export class CartaoComponent {

  @Input() titulo = ''

}
