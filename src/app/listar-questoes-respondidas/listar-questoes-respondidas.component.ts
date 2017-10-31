import { Component, OnInit } from '@angular/core';
import { QuestaoRespondidaService } from './../questao-respondida.service';
import { Questao } from './../models/Questao';
import {Router} from '@angular/router';
import { QuestaoRespondida } from './../models/QuestaoRespondida';

import { ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-listar-questoes-respondidas',
  templateUrl: './listar-questoes-respondidas.component.html',
  styleUrls: ['./listar-questoes-respondidas.component.css']
})
export class ListarQuestoesRespondidasComponent implements OnInit {

  questaoRespondidaSelecionada:QuestaoRespondida =  new QuestaoRespondida();
  questoesRespondidas:QuestaoRespondida[] =  [];
  constructor(private questaoRespondidaService:QuestaoRespondidaService,private router: Router,private route:ActivatedRoute) {
    this.questoesRespondidas = this.questaoRespondidaService.getParaCorrigir();
   }

  ngOnInit() {
  }
   onRowSelect(event) {
        this.router.navigate(['/corrigir',this.questaoRespondidaSelecionada.id]);
  }

}
