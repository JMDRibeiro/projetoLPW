import { Component, OnInit } from '@angular/core';
import { QuestaoRespondida } from './../models/QuestaoRespondida';
@Component({
  selector: 'app-corrigir-questoes',
  templateUrl: './corrigir-questoes.component.html',
  styleUrls: ['./corrigir-questoes.component.css']
})
export class CorrigirQuestoesComponent implements OnInit {

questaoRespondida:QuestaoRespondida = new QuestaoRespondida();

constructor() { }

  ngOnInit() {
  }

}
