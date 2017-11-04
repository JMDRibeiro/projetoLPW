import { Injectable } from '@angular/core';
import { ListaQuestoes } from './models/ListaQuestoes';
import { Questao } from './models/Questao';
import { QuestaoService } from './questao.service';

@Injectable()
export class ListaQuestoesService {
  id : number = 0;
  listasQuestoes : ListaQuestoes[] = [];
   constructor(private questaoService:QuestaoService) { 
     let listaQuestoes1 : ListaQuestoes = new ListaQuestoes();
     let listaQuestoes2 : ListaQuestoes = new ListaQuestoes();
     let listaQuestoes3 : ListaQuestoes = new ListaQuestoes();
     listaQuestoes1.titulo = "Teste1";
     listaQuestoes2.titulo = "Teste2";
     listaQuestoes3.titulo = "Teste3";
     let questao:Questao = new Questao();
     questao.id = 1;
     listaQuestoes1.questoes.push(this.questaoService.getById(questao));
     listaQuestoes2.questoes.push(this.questaoService.getById(questao));
     listaQuestoes3.questoes.push(this.questaoService.getById(questao));
     questao.id = 2;
     listaQuestoes1.questoes.push(this.questaoService.getById(questao));
     questao.id = 3;
     listaQuestoes1.questoes.push(this.questaoService.getById(questao));
     listaQuestoes2.questoes.push(this.questaoService.getById(questao));
     listaQuestoes1.dataInicio = new Date();
     listaQuestoes1.dataFim = new Date("December 4, 2017 10:13:00");

     listaQuestoes2.dataInicio = new Date();
     listaQuestoes2.dataFim = new Date("January 4, 2018 10:13:00");

     listaQuestoes3.dataInicio = new Date();
     listaQuestoes3.dataFim = new Date("December 22, 2017 12:15:00");

    this.insert(listaQuestoes1);
    this.insert(listaQuestoes2);
    this.insert(listaQuestoes3);
  }

  insert(listaQuestao:ListaQuestoes){
      this.id++;
      listaQuestao.id = this.id;
      this.listasQuestoes.push(listaQuestao);
      console.log("Inserção efetuada! Questao:\n"+ listaQuestao);
  }
  listAll(){
    console.log("Listando todas as Questões> Total :" + this.listasQuestoes.length)
    return this.listasQuestoes;
  }
  update(listaQuestao:ListaQuestoes){
      console.log("Atualizando Questão = "+listaQuestao);
      let posicao = this.findListaQuestao(listaQuestao);
      this.listasQuestoes[posicao] = listaQuestao;   

  }
  delete(listaQuestao:ListaQuestoes){
      console.log("Eliminando Questão  = "+listaQuestao);
      let posicao = this.findListaQuestao(listaQuestao);
      this.listasQuestoes.splice(posicao,1);   
  }

  findListaQuestao(listaQuestao:ListaQuestoes){
      let posicao:number = 0;
      for(let i:number=0;i<this.listasQuestoes.length;i++){
          if(listaQuestao.id == this.listasQuestoes[i].id){
            posicao = i;
          }
      }
      return posicao;
  }

  getById(listaQuestao:ListaQuestoes){
    
    let posicao:number = -1;
      for(let i:number=0;i<this.listasQuestoes.length;i++){
          if(listaQuestao.id == this.listasQuestoes[i].id){
            posicao = i;
          }
      }
    
    listaQuestao = this.listasQuestoes[posicao];
    return listaQuestao;
  }

}

