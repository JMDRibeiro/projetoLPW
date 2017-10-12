import { Component, OnInit } from '@angular/core';
import { Questao } from './../models/Questao'
import { QuestaoRespondida } from './../models/QuestaoRespondida'

@Component({
  selector: 'app-responder-questao',
  templateUrl: './responder-questao.component.html',
  styleUrls: ['./responder-questao.component.css']
})
export class ResponderQuestaoComponent implements OnInit {

  questao : Questao = new Questao();
  questaoRespondida : QuestaoRespondida = new QuestaoRespondida();

  constructor(  ) {
    this.questao.titulo = "Neste espaço o título da questão.";
    this.questao.enunciado = "Neste espaço aparecerá o enunciado da questão";
    this.questao.nivelDificuldade = 1;
        this.questao.retornosEsperados = [
      {entrada :"Entrada de exemplo", saida:"Retorno Esperado"},
      {entrada :"2a Entrada de exemplo", saida:"2o Retorno Esperado"},
      {entrada :"3a Entrada de exemplo", saida:"3o Retorno Esperado"}
      ];

   }
  

  ngOnInit() {
    
  }

  responder(){
    alert("Função para responder aberta!")
    //essas função poderia abrir uma janela na qual o jogador insere sua resposta
  }


}
