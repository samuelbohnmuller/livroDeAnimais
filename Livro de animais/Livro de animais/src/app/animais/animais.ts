export interface Animal {

  id: number //Atributos que representam atributos vindos da API.
  postDate: Date
  url: string
  description: string
  allowComments: boolean
  likes: number
  comments: number
  userId: number

}

export type Animais = Array<Animal> //As vezes a API retorna uma colação de animais. Criado array de Animal para representar.
