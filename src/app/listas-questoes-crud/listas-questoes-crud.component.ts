import { Component, OnInit } from '@angular/core';
import {ListaQuestoesService} from '../lista-questoes.service';
import { ListaQuestoes} from '../models/ListaQuestoes';


@Component({
  selector: 'app-listas-questoes-crud',
  templateUrl: './listas-questoes-crud.component.html',
  styleUrls: ['./listas-questoes-crud.component.css']
})
export class ListasQuestoesCrudComponent implements OnInit {

  listasQuestoes:ListaQuestoes[] = [];

  constructor(private listaQuestoesService:ListaQuestoesService) { 
    this.listasQuestoes = this.listaQuestoesService.listAll();
    console.log(this.listasQuestoes);
  }

  ngOnInit() {
  }

}
