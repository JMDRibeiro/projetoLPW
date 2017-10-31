import {Usuario} from './Usuario';
import {Questao} from './Questao';

export class QuestaoRespondida{
    id : number;
    questao : Questao;
    foiCorrigida : boolean;
    aluno : Usuario;
    resposta : String;
    comentario : String;
    acertou : boolean;
}