import { environment } from './../../../environments/environment';
import { Component, Input, OnInit } from '@angular/core';

const API = environment.apiURL

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit{

  private urlOriginal = ''

  @Input() descricao = '' //Prorpiedade de quem chamar o componente.

  @Input() set url(url: string){ //Método set
    if(url.startsWith('data')){ //Se o começo da url tiver data.
      this.urlOriginal = url
    } else{
      this.urlOriginal = `${API}/imgs/${url}`
    }
  }

  get url(): string{//Método get
    return this.urlOriginal
  }

  constructor(){}

  ngOnInit(): void {
  }

}
