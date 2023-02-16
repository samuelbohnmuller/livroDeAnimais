import { AnimaisService } from './../animais.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from '../animais';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhe-animal',
  templateUrl: './detalhe-animal.component.html',
  styleUrls: ['./detalhe-animal.component.css']
})
export class DetalheAnimalComponent implements OnInit{

  animalId!: number
  animal$!: Observable<Animal>

  constructor(private animaisService: AnimaisService, private activatedRoute: ActivatedRoute, private router: Router){}

  ngOnInit(): void { //Pego o animal pelo ID.
    this.animalId = this.activatedRoute.snapshot.params['animalId'] //'animalId' é o nome da rota inserido no path do AnimaisRoutingModule. Assim, pego o ID da rota.
    this.animal$ = this.animaisService.buscaPorId(this.animalId) //Busca na API a foto pelo ID e passa para animal$.
  }

  curtir(){
    this.animaisService.curtir(this.animalId).subscribe((curtida) => { //Curto a foto pelo id e crio variável curtida com o valor do observable que será usabo em função abaixo.
      if(curtida){ //Se a curtida for verdadeiro(true).
        this.animal$ = this.animaisService.buscaPorId(this.animalId) //Atualiza o like da foto, buscando(fazendo requisição pelo ID na API) a foto pelo ID e passa para animal$.
      }
    })
  }

  excluir(){
    this.animaisService.excluiAnimal(this.animalId).subscribe(() => { //Exclui o animal pelo id.
      this.router.navigate(['/animais/']) //Depois navega até a grade de animais.
    }, (error) => console.log(error)) //Se der erro, imprime.
  }

}
