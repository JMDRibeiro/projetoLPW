import {Questao} from './Questao';

export class ListaQuestoes{
    id : number;
    titulo : String;
    questoes : Questao[] = [];
    dataInicio : Date;
    dataFim : Date;
    
    checarValidadeData(){
        let dataHoje:Date = new Date();
        let dataValida:boolean = true;
        console.log(dataHoje);
        if(this.dataFim<this.dataInicio || dataHoje>this.dataInicio){
            dataValida = false;
        }
        return dataValida;
    }
}