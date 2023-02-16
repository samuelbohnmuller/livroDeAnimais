import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NovoUsuario } from './novo-usuario';
import { NovoUsuarioService } from './novo-usuario.service';
import { ExisteService } from './usuario/existe.service';
import { minusculoValidator, usuarioSenhaIguaisValidator } from './validators';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit{

  //Aplicado outra lógica de pesca de campos degitados pelo usuário de maneira reactiva. Mais trabalhosa, porém mais customizável.

  novoUsuarioForm!: FormGroup //Atributo que representa o modelo(estado) do formulário. O ! indica que pode ser nulo, sem ele, acusará erro.

  constructor(private formBuilder: FormBuilder, private novoUsuarioService: NovoUsuarioService, private existeService: ExisteService, private router: Router){}

  ngOnInit(): void { //Inicia o método quando toda a classe for instanciada.
    this.novoUsuarioForm = this.formBuilder.group({ //Gera um objeto em JSON com elementos que serão os elementos do formulário.
      email:['', [Validators.required, Validators.email]], //Mesmos nomes dos atributos da interface de usuário.
      fullName:['', [Validators.required, Validators.minLength(3)]], //Validações de obrigatoriedade e mínimo de caracteres.
      userName:['', [minusculoValidator], [this.existeService.seUsuarioJaExiste()]], //Validação assíncrona deve vir depois da síncrona. Função não precisa (), método sim.
      password:[''],
    },{ validators: [usuarioSenhaIguaisValidator]} //Validação do formulário inteiro, não apenas de um campo(por conta de validar 2 campos ao mesmo tempo).
    )
  }

  cadastrar(){//Método será executado quando o formulário for submetido.
    if(this.novoUsuarioForm.valid){ //Se o formulário está validado.
      const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario //Retorna um objeto com o estado, valor das variáveis do ngOnInit carregadas dos campos que o usuário preencheu e converto(as) ele para NovoUsuario.
      this.novoUsuarioService.cadastrarNovoUsuario(novoUsuario) //Insere um novo usuário do tipo NovoUsuario em URL na API.
        .subscribe(() => {this.router.navigate([''])}, //Retorna o usuário para a página '' que é home(de login).
        (error) => console.log(error) ) //Se der erro.
    }
  }
}
