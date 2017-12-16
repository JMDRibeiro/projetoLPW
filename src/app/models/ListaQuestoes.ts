import {Questao} from './Questao';
import {Usuario} from './Usuario';

export class ListaQuestoes{
    id : String;
    titulo : String;
    questoes : Questao[] = [];
    alunos : Usuario[] = [];
    professorAdministrador : Usuario;
    dataInicio : Date;
    dataFim : Date;
    constructor(){

    }
    toChaveValor(){
		let chaveValor = {
        titulo:this.titulo,
		professorAdministrador:{
            nomeCompleto:this.professorAdministrador.nomeCompleto,
            nomeUsuario:this.professorAdministrador.nomeUsuario,
            email:this.professorAdministrador.email,
            senha:this.professorAdministrador.senha,
            tipo:this.professorAdministrador.tipo
        },
        dataInicio:this.dataInicio,
		questoes:this.questoes[0].toChaveValor(),
        alunos:{
            nomeCompleto:this.alunos[0].nomeCompleto,
            nomeUsuario:this.alunos[0].nomeUsuario,
            email:this.alunos[0].email,
            senha:this.alunos[0].senha,
            tipo:this.alunos[0].tipo
        },
		dataFim:this.dataFim};
		return chaveValor;

	}
    
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
    questoesToChaveValor(questoes:Questao[]){
        let chaveValor = [];
        for(let i:number=0;i<questoes.length;i++){
            chaveValor.concat(questoes[i].toChaveValor());
        }
    }
    
}