import { Assunto } from './Assunto';
export class Disciplina {
    id:number;
    nome:string;
    assuntos: Assunto[] = [];
}