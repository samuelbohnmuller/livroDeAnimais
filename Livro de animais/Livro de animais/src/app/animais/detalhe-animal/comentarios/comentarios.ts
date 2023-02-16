export interface Comentario { //Tipagem para o JSON de atributos vindos da API.

date: Date
text: string
userName: string

}

export type Comentarios = Array<Comentario> //Representa a coleção de comentários.
