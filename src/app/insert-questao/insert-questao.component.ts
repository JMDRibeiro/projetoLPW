import { Component, OnInit } from '@angular/core';
import { Questao } from './../models/Questao';
import { Disciplina } from './../models/Disciplina';
import { Assunto } from './../models/Assunto';
import { Alternativa } from './../models/Alternativa';

@Component({
  selector: 'app-insert-questao',
  templateUrl: './insert-questao.component.html',
  styleUrls: ['./insert-questao.component.css']
})
export class InsertQuestaoComponent implements OnInit {
  questao : Questao = new Questao();
  disciplina : Disciplina;
  disciplinas : Disciplina[] = []; // esse array será carregado a partir do banco do servidor?
  d1:Disciplina = new Disciplina(); assuntoD1:Assunto = new Assunto();
  d2:Disciplina = new Disciplina(); 
  d3:Disciplina = new Disciplina(); 
  selectedValue:number;
  
  constructor() { 
    this.d1.nome = "Biologia", this.d2.nome = "Química", this.d3.nome = "Física";    
    this.assuntoD1.nome = "Ecologia";
    this.d1.assuntos.push(this.assuntoD1);
    this.disciplinas.push(this.d1), this.disciplinas.push(this.d2),this.disciplinas.push(this.d3);
    this.disciplina = new Disciplina();
    this.questao.assunto = new Assunto();
  }

  ngOnInit() {
  }
  getAssuntos(){
    return this.d1.assuntos;
  }
  salvar(){
    this.questao.alternativas[this.selectedValue].estaCorreta = true;
    this.questao.tempoParaResponder = this.questao.tempoParaResponder*60;
    console.log(this.questao);
  }
}
