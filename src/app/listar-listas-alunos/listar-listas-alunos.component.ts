import { Component, OnInit } from '@angular/core';
import { ListaQuestoesService } from './../lista-questoes.service';
import { ListaQuestoes } from './../models/ListaQuestoes';
import {Router} from '@angular/router';
import { ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-listar-listas-alunos',
  templateUrl: './listar-listas-alunos.component.html',
  styleUrls: ['./listar-listas-alunos.component.css']
})
export class ListarListasAlunosComponent implements OnInit {
  listaQuestoesSelecionada:ListaQuestoes = new ListaQuestoes();
  constructor(private listaQuestoesService:ListaQuestoesService,private router: Router,private route:ActivatedRoute) { }

  ngOnInit() {
  }

  carregarListas(){
    return this.listaQuestoesService.listAll();
  }

 onRowSelect(event) {
         console.log(this.listaQuestoesSelecionada);
         this.router.navigate(['lista-questoes-aluno/',this.listaQuestoesSelecionada.id]);
  }
}
