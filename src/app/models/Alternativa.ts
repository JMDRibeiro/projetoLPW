import { Questao } from './Questao';
export class Alternativa{
    id:number;
    estaCorreta:boolean;
    texto:string;
    questao:Questao;
}