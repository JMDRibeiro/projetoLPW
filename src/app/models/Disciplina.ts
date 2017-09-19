import {Usuario} from './Usuario';

export class Disciplina{
    id : number;
    nome : String;
    professor : Usuario;
    alunos : Usuario[];
    
}