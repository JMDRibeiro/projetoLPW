import { Injectable } from '@angular/core';
import { QuestaoRespondida } from './models/QuestaoRespondida';
@Injectable()
export class QuestaoRespondidaService {
  id:number = 0;
  constructor() { }
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

}
