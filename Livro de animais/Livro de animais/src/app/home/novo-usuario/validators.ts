import { AbstractControl, FormGroup } from "@angular/forms";

export function minusculoValidator(control:AbstractControl){
  const valor = control.value as string //Converto para string o valor do control.
  if(valor !==  valor.toLowerCase()){ //Se não for  minúsculo
    return {minusculo:true} //Retorno novo objeto com valor true
  } else{
    return null
  }
}

export function usuarioSenhaIguaisValidator(formGroup: FormGroup) { //FormGroup é usado para ser capturado no formulário HTML.
  const username = formGroup.get('userName')?.value ?? '' //Capturo no formulário o valor dos campos com o formGroup. Pega o elemento se existir, se não existir, fica em branco.
  const password = formGroup.get('password')?.value ?? ''

  if (username.trim() + password.trim()) { //Se valores dos campos usuário e senha tiverem preenchidos.
    return username !== password ? null : { senhaIgualUsuario: true } //Se o valor do usuário e senha forem diferentes, retornará null. Se forem iguais, variável senhaIgualUsuario recebe true(essa variável será usada no formulário HTML para validação para NÃO exibir mensagem de validação de erro).
  } else {
    return null //Se forem vazios.
  }
}




