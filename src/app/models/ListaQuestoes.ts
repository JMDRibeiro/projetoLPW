import {Questao} from './Questao';
import {Usuario} from './Usuario';

export class ListaQuestoes{
    id : number;
    titulo : String;
    questoes : Questao[] = [];
    alunos : Usuario[] = [];
    professorAdministrador : Usuario;
    dataInicio : Date;
    dataFim : Date;
    
    checarValidadeData(){
        let dataHoje:Date = new Date();
        let dataValida:boolean = true;
        console.log("Data atual: "+dataHoje);
        console.log("Data inicio: "+this.dataInicio);
        console.log("Data fim: "+this.dataFim);
        if(this.dataFim<this.dataInicio || dataHoje>this.dataInicio){
            dataValida = false;
        }
        return dataValida;
    }
    ehProfessor(){
        let ehProfessor : boolean = false;
        if(this.professorAdministrador.tipo==1){
            ehProfessor = true;
        }
        return ehProfessor;
    }
}