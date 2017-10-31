import { Injectable } from '@angular/core';
import { ListaQuestoes } from './models/ListaQuestoes';
import { Questao } from './models/Questao';

@Injectable()
export class ListaQuestoesService {
  id : number = 0;
  listasQuestoes : ListaQuestoes[] = [];
   constructor() { 
     let listaQuestoes1 : ListaQuestoes = new ListaQuestoes();
     let listaQuestoes2 : ListaQuestoes = new ListaQuestoes();
     let listaQuestoes3 : ListaQuestoes = new ListaQuestoes();
     listaQuestoes1.titulo = "Teste1";
     listaQuestoes2.titulo = "Teste2";
     listaQuestoes3.titulo = "Teste3";


     let questao1:Questao = new Questao(); questao1.titulo = "Questao1";
     let questao2:Questao = new Questao(); questao2.titulo = "Questao2";
     let questao3:Questao = new Questao(); questao3.titulo = "Questao3";
     let questao4:Questao = new Questao(); questao4.titulo = "Questao4";
     let questao5:Questao = new Questao(); questao5.titulo = "Questao5";
     let questao6:Questao = new Questao(); questao6.titulo = "Questao6";
     listaQuestoes1.questoes.push(questao1);listaQuestoes1.questoes.push(questao2);listaQuestoes1.questoes.push(questao3);listaQuestoes1.questoes.push(questao4);listaQuestoes1.questoes.push(questao5);listaQuestoes1.questoes.push(questao6);
     listaQuestoes2.questoes.push(questao1);listaQuestoes2.questoes.push(questao3);listaQuestoes2.questoes.push(questao5);listaQuestoes2.questoes.push(questao6);
     listaQuestoes3.questoes.push(questao1);

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

