import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css']
})
export class MensagemComponent implements OnInit{

  @Input() //Para o atributo ser usado em algum formulário para ser valor ser capturado e mostrado em tela.
  mensagem = ''

  constructor(){}


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
