import {Usuario} from './Usuario';
export class Turma{
    id : number;
    nome : String;
    professorAdminstrador : Usuario;
    alunos : Usuario[] = [];
}