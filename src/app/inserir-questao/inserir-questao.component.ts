import { Component, OnInit } from '@angular/core';
import {Questao} from '../models/Questao';
import {QuestaoService} from '../questao.service';
@Component({
  selector: 'inserir-questao',
  templateUrl: './inserir-questao.component.html',
  styleUrls: ['./inserir-questao.component.css']
})
export class InserirQuestaoComponent implements OnInit {
  questao = new Questao;
  retornosEsperados = [];
  constructor(private questaoService : QuestaoService) { }

  ngOnInit() {
   this.questao = new Questao();
   
  }
  //questoes : Questao[];

  
  primeiroRetorno = [ 
    {entrada: "entrada",saida:"saida"}  
  ];
  segundoRetorno = [ 
    {entrada: "entrada",saida:"saida"}  
  ];
  terceiroRetorno = [ 
    {entrada: "entrada",saida:"saida"}  
  ];
 
  limparCampos(){
   //Como faço isso?

  }
  salvar(){
      this.retornosEsperados.push(this.primeiroRetorno);
      this.retornosEsperados.push(this.segundoRetorno);
      this.retornosEsperados.push(this.terceiroRetorno);    
      this.questao.retornosEsperados = this.retornosEsperados;   
      this.questaoService.insert(this.questao);
      //alert(this.questaoService.listAll().length);    
      //alert(this.questao.imprimirQuestao());
      alert("Salva com sucesso!");
      this.limparCampos();
  }

}
