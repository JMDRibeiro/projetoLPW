import { Component, OnInit } from '@angular/core';
import { QuestaoRespondidaService } from './../questao-respondida.service';
import { Questao } from './../models/Questao';
import {Router} from '@angular/router';
import { QuestaoRespondida } from './../models/QuestaoRespondida';

import { ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-listar-corrigidas',
  templateUrl: './listar-corrigidas.component.html',
  styleUrls: ['./listar-corrigidas.component.css']
})
export class ListarCorrigidasComponent implements OnInit {
  acertou:String = "Sim";
  questaoRespondidaSelecionada:QuestaoRespondida =  new QuestaoRespondida();
  constructor(private questaoRespondidaService:QuestaoRespondidaService,private router: Router,private route:ActivatedRoute) {
    
   }

  ngOnInit() {
  }
   onRowSelect(event) {
        this.router.navigate(['/correcao',this.questaoRespondidaSelecionada.id]);
  }
  getQuestoesCorrigidas(){
        return this.questaoRespondidaService.getParaCorrigidas();
  }

}
