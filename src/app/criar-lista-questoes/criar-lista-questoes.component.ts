import { Component, OnInit } from '@angular/core';
import { Questao } from '../models/Questao';
import {QuestaoService} from '../questao.service';

@Component({
  selector: 'app-criar-lista-questoes',
  templateUrl: './criar-lista-questoes.component.html',
  styleUrls: ['./criar-lista-questoes.component.css']
})
export class CriarListaQuestoesComponent implements OnInit {

  questoes:Questao[]=[];

  selectedQuestions: number[] = [];

  constructor(private questaoService:QuestaoService) { }

  ngOnInit() {
    this.questoes = this.questaoService.listAll();
  }
  
}
