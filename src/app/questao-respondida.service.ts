import { Injectable } from '@angular/core';
import { QuestaoRespondida } from './models/QuestaoRespondida';
import { QuestaoService } from './questao.service';
import { Questao } from './models/Questao';

@Injectable()
export class QuestaoRespondidaService {
  id:number = 0;
  constructor(private questaoService:QuestaoService) {
    let qRTeste:QuestaoRespondida = new QuestaoRespondida();
    qRTeste.foiCorrigida = false;
    qRTeste.resposta = "Famos fazer o feste!";
    let questao:Questao = new Questao();
    questao.id = 1;
    qRTeste.questao = this.questaoService.getById(questao);
    this.insert(qRTeste);
   }
  questoesRespondidas : QuestaoRespondida[] = [];
insert(questaoRespondida:QuestaoRespondida){
      this.id++;
      questaoRespondida.id = this.id;
      this.questoesRespondidas.push(questaoRespondida);
      console.log("Inserção efetuada! Questao:"+ questaoRespondida.questao+" #"+questaoRespondida.id);
  }
  listAll(){
    console.log("Listando todas as Questões> Total :" + this.questoesRespondidas.length)
    return this.questoesRespondidas;
  }
  update(questao:QuestaoRespondida){
      console.log("Atualizando Questão Respondida( titulo = "+QuestaoRespondida);
      let posicao = this.findQuestao(questao);
      this.questoesRespondidas[posicao] = questao;   

  }
  delete(questao:QuestaoRespondida){
      console.log("Eliminando Questão Respondida ( titulo = "+QuestaoRespondida);
      let posicao = this.findQuestao(questao);
      this.questoesRespondidas.splice(posicao,1);   
  }

  findQuestao(questao:QuestaoRespondida){
      let posicao:number = 0;
      for(let i:number=0;i<this.questoesRespondidas.length;i++){
          if(questao.id == this.questoesRespondidas[i].id){
            posicao = i;
          }
      }
      return posicao;
  }

  getById(questao:QuestaoRespondida){
    
    let posicao:number = -1;
      for(let i:number=0;i<this.questoesRespondidas.length;i++){
          if(questao.id == this.questoesRespondidas[i].id){
            posicao = i;
          }
      }
    
    questao = this.questoesRespondidas[posicao];
    return questao;
  }

  getParaCorrigir(){
    let questoesCorrigir:QuestaoRespondida[] = [];
    for(let i:number=0;i<this.questoesRespondidas.length;i++){
        if(!this.questoesRespondidas[i].foiCorrigida){
          questoesCorrigir.push(this.questoesRespondidas[i]);
        }
    }
    return questoesCorrigir;
  }

  getParaCorrigidas(){
    let questoesCorrigidas:QuestaoRespondida[] = [];
    for(let i:number=0;i<this.questoesRespondidas.length;i++){
        if(this.questoesRespondidas[i].foiCorrigida){
          questoesCorrigidas.push(this.questoesRespondidas[i]);
        }
    }
    return questoesCorrigidas;
  }

  foiRespondida(questao:Questao){
    let foiRespondida:boolean = false;
    for(let i:number = 0;i<this.questoesRespondidas.length;i++){
      if(this.questoesRespondidas[i].questao.id == questao.id){
        foiRespondida =   true;
      }
    }
    return foiRespondida;
  }
  getNaoRespondidas(questoes:Questao[]){
      let questoesNaoRespondidas:Questao[] = [];
      for(let i:number = 0;i<questoes.length;i++){
        console.log(this.foiRespondida(questoes[i]));
          if(!this.foiRespondida(questoes[i])){
 
            console.log(questoes[i].enunciado+":"+questoes[i].id+"///"+this.foiRespondida(questoes[i]));
            questoesNaoRespondidas.push(questoes[i]);
          }
      }
      return questoesNaoRespondidas;
  }
}
