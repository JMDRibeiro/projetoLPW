import { Component, OnInit } from '@angular/core';
import { Questao } from '../models/Questao';
import {ListaQuestoesService} from '../lista-questoes.service';
import {QuestaoService} from '../questao.service';
import { ListaQuestoes} from '../models/ListaQuestoes';
import {MessageService} from 'primeng/components/common/messageservice';
import {Message} from 'primeng/components/common/api';
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

  selectedQuestionsId: number[] = [];

  constructor(private questaoService:QuestaoService,private listaQuestoesService:ListaQuestoesService,private router: Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.questoes = this.questaoService.listAll();
  }
  salvar(){
    console.log("Total selecionado: "+this.selectedQuestionsId.length);
    for(let i:number=0;i<this.selectedQuestionsId.length;i++){
        let questao = new Questao();
        console.log("Pos:"+i);
        console.log("Id:"+this.selectedQuestionsId[i]);
        questao.id = this.selectedQuestionsId[i];
        questao =this.questaoService.getById(questao);
        console.log(questao);
        this.listaQuestoes.questoes.push(questao);
    }
   console.log(this.listaQuestoes);
   if(this.listaQuestoes.checarValidadeData()==false){
         this.msgs=[];
    this.msgs.push({severity:'error', summary:'Data inválida', detail:'Verifique as datas.'});
   }else{
     this.listaQuestoesService.insert(this.listaQuestoes);
     this.router.navigate(['/listas-questoes-crud']);
   }  
   
  }
}
