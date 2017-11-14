import { Component, OnInit } from '@angular/core';
import { Questao } from '../models/Questao';
import { Usuario } from '../models/Usuario';

import {ListaQuestoesService} from '../lista-questoes.service';
import {QuestaoService} from '../questao.service';
import {UsuarioService} from '../usuario-service.service';

import { ListaQuestoes} from '../models/ListaQuestoes';

import {MessageService} from 'primeng/components/common/messageservice';

import {Message} from 'primeng/primeng';
import {Router} from '@angular/router';
import { ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-criar-lista-questoes',
  templateUrl: './criar-lista-questoes.component.html',
  styleUrls: ['./criar-lista-questoes.component.css']
})
export class CriarListaQuestoesComponent implements OnInit {
  msgs: Message[] = [];

  listaQuestoes:ListaQuestoes = new ListaQuestoes();
  questoes:Questao[];
  alunos:Usuario[];
  selectedQuestionsId: number[] = [];

  constructor(private questaoService:QuestaoService,private usuarioService:UsuarioService,private listaQuestoesService:ListaQuestoesService,private router: Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.questoes = this.questaoService.listAll();
    this.alunos = this.usuarioService.listAllAlunos();

   this.listaQuestoes.id = this.route.snapshot.params['id'];
   this.listaQuestoes = this.listaQuestoesService.getById(this.listaQuestoes);
   console.log(this.listaQuestoes);
   if(this.listaQuestoes == undefined){
      this.listaQuestoes = new ListaQuestoes();
   }else{
      this.questoes = this.listaQuestoesService.questoesNaoEstaoNaLista(this.listaQuestoes);
      this.alunos = this.listaQuestoesService.alunosNaoEstaoNaLista(this.listaQuestoes);
   }    
  }
  salvar(){
    console.log("Total selecionado: "+this.selectedQuestionsId.length);
    for(let i:number=0;i<this.selectedQuestionsId.length;i++){
        let questao = new Questao();
        console.log("Pos:"+i);
        console.log("Id:"+this.selectedQuestionsId[i]);
        questao.id = this.selectedQuestionsId[i];
        questao = this.questaoService.getById(questao);
        console.log(questao);
        this.listaQuestoes.questoes.push(questao);
    }
    this.listaQuestoes.professorAdministrador = this.usuarioService.usuarioLogado;
   console.log("THIS");
   console.log(this.listaQuestoes);
  if(this.listaQuestoes.id >=0){
      this.listaQuestoesService.update(this.listaQuestoes);
      this.router.navigate(['/listas-questoes-crud']);
  }else{
      this.listaQuestoesService.insert(this.listaQuestoes);
      this.router.navigate(['/listas-questoes-crud']);
  }
  
  /* if(this.listaQuestoes.checarValidadeData()==false){
         this.msgs=[];
    this.msgs.push({severity:'error', summary:'Data inválida', detail:'Verifique as datas.'});
   }else{
<<<<<<< HEAD
     this.listaQuestoesService.insert(this.listaQuestoes);
     this.listaQuestoes = new ListaQuestoes();
   }  
=======
     
   }  
   */
  }

  deletar(){
      this.listaQuestoesService.delete(this.listaQuestoes);
  }

}
