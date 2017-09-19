import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'visualizar-questao',
  templateUrl: './visualizar-questao.component.html',
  styleUrls: ['./visualizar-questao.component.css']
})
export class VisualizarQuestaoComponent implements OnInit {

  enunciado : String = "Neste espaço aparecerá o enunciado da questão";
  nivelDificuldade : number = 1;
  resposta : String;
  retornosEsperados = [
    {entrada :"Entrada de exemplo", saida:"Retorno Esperado"},
    {entrada :"2a Entrada de exemplo", saida:"2o Retorno Esperado"},
    {entrada :"3a Entrada de exemplo", saida:"3o Retorno Esperado"}
    ];
  titulo : String = "Neste espaço o título da questão.";

  primeiroRetorno = "Entrada : "+this.retornosEsperados[0].entrada + "\n"+ "Saída : "+this.retornosEsperados[0].saida;  
  segundoRetorno = "Entrada : "+this.retornosEsperados[1].entrada + "\n"+ "Saída : "+this.retornosEsperados[1].saida;  
  terceiroRetorno = "Entrada : "+this.retornosEsperados[2].entrada + "\n"+ "Saída : "+this.retornosEsperados[2].saida;  

  constructor(  ) { }
  

  ngOnInit() {
  }

  responder(){
    alert("Função para responder aberta!")
    //essas função poderia abrir uma janela na qual o jogador insere sua resposta
  }

}
