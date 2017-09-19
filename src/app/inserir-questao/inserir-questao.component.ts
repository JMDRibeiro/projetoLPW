import { Component, OnInit } from '@angular/core';
import {Questao} from '../models/Questao';
@Component({
  selector: 'inserir-questao',
  templateUrl: './inserir-questao.component.html',
  styleUrls: ['./inserir-questao.component.css']
})
export class InserirQuestaoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   this.questao = new Questao();
  }
  //questoes : Questao[];

  nivelDificuldade : number;
  enunciado : String;
  dica : String;
  retornosEsperados = [];
  titulo : String;
  podeEnviar : boolean = true;

  
  primeiroRetorno = [ 
    {entrada: "entrada",saida:"saida"}  
  ];
  segundoRetorno = [ 
    {entrada: "entrada",saida:"saida"}  
  ];
  terceiroRetorno = [ 
    {entrada: "entrada",saida:"saida"}  
  ];

  questao = new Questao;
  //questao : Questao = new Questao(this.nivelDificuldade,this.enunciado,this.dica,this.retornosEsperados,this.titulo);
 
  salvar(){
      alert("Salvo")
      this.retornosEsperados.push(this.primeiroRetorno);
      this.retornosEsperados.push(this.segundoRetorno);
      this.retornosEsperados.push(this.terceiroRetorno);    
      this.questao.retornosEsperados = this.retornosEsperados;       
  }

}
