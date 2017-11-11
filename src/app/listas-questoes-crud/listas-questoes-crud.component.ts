import { Component, OnInit } from '@angular/core';
import {ListaQuestoesService} from '../lista-questoes.service';
import { ListaQuestoes} from '../models/ListaQuestoes';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listas-questoes-crud',
  templateUrl: './listas-questoes-crud.component.html',
  styleUrls: ['./listas-questoes-crud.component.css']
})
export class ListasQuestoesCrudComponent implements OnInit {

  listasQuestoes:ListaQuestoes[] = [];
  listaQuestoes:ListaQuestoes;

  constructor(private listaQuestoesService:ListaQuestoesService,private router: Router) { 
    this.listasQuestoes = this.listaQuestoesService.listAll();
    console.log(this.listasQuestoes);
  }

  ngOnInit() {
  }

  onRowSelect(event) {
        this.listaQuestoes = event.data;
        this.router.navigate(['/editar-lista-questoes',this.listaQuestoes.id]);
    }
}
