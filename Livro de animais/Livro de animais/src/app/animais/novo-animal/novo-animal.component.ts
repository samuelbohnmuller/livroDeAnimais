import { Router } from '@angular/router';
import { AnimaisService } from './../animais.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ReadVarExpr } from '@angular/compiler';
import { finalize } from 'rxjs';
import { HttpEvent, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-novo-animal',
  templateUrl: './novo-animal.component.html',
  styleUrls: ['./novo-animal.component.css']
})
export class NovoAnimalComponent implements OnInit{

  formularioAnimal!: FormGroup
  file!: File //Arquivo que representara a foto do animal
  preview!: string //Preview da foto.
  percentualConcluido = 0

  constructor(private animaisService: AnimaisService, private formBuilder: FormBuilder, private router: Router){}

  ngOnInit(): void {
    this.formularioAnimal = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(200)],
      allowComments: [true]
    })
  }

  upload(){
    const allowComments = this.formularioAnimal.get('allowComments')?.value ?? false //Pega informações preenchidas do formulário e coloca em variável.
    const description = this.formularioAnimal.get('description')?.value ?? ''

    this.animaisService.upload(description, allowComments, this.file) //Manda os dados para a API.
      .pipe(finalize(() => this.router.navigate(['animais']))) //Quando finaliza a requisição, vai para a tela de animais.
      .subscribe((event: HttpEvent<any>) => { //Pego o evento.
        if(event.type === HttpEventType.UploadProgress){ //Se o upload ainda estiver acontecendo.
          const total = event.total ?? 1
          this.percentualConcluido = Math.round(100 * (event.loaded / total)) //Cálculo para mostrar % de progresso do upload.
        }
      },(error) => console.log(error))
  }

  gravaArquivo(arquivo: any): void{
    const [file] = arquivo?.files//Retorna array de files. Como não sei o que pode vir na chamada do método, uso ? depois do nome do atributo.
    this.file = file
    const reader = new FileReader()
    reader.onload = (event: any) => (this.preview = event.target.result) //Faz a leitura do arquivo e carrega o preview.
    reader.readAsDataURL(file)
  }



}
