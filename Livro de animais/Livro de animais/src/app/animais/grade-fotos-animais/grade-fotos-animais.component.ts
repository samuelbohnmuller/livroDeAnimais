import { Component, Input } from '@angular/core';
import { Animais } from '../animais';

@Component({
  selector: 'app-grade-fotos-animais',
  templateUrl: './grade-fotos-animais.component.html',
  styleUrls: ['./grade-fotos-animais.component.css']
})
export class GradeFotosAnimaisComponent {

  @Input() animais!: Animais //Instancia de imediato(!) um array de Animal(Animais).

}
