import { Component, OnInit } from '@angular/core';
import { QuestaoService } from './../questao.service';
import { QuestaoRespondidaService } from './../questao-respondida.service';
import { ListaQuestoes } from './../models/ListaQuestoes';
import { Questao } from './../models/Questao';
import { ListaQuestoesService } from './../lista-questoes.service';
import {Router} from '@angular/router';
import { ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-lista-questoes-alunos',
  templateUrl: './lista-questoes-alunos.component.html',
  styleUrls: ['./lista-questoes-alunos.component.css']
})
export class ListaQuestoesAlunosComponent implements OnInit {

  listaQuestoes:ListaQuestoes = new ListaQuestoes();
  questaoSelecionada:Questao = new Questao();
  constructor(private listaQuestoesService:ListaQuestoesService,private questaoService:QuestaoService,private questaoRespondidaService:QuestaoRespondidaService,private router: Router,private route:ActivatedRoute) { 
    this.listaQuestoes.id = this.route.snapshot.params['id'];
    this.listaQuestoes = this.listaQuestoesService.getById(this.listaQuestoes);
    console.log(this.listaQuestoes);
  } 
  ngOnInit() {
  }
  carregarPercentualRespondido(){
    let percentualRespondido:number = 0;
    let totalRespondido = this.totalRespondido();
    if(!(this.listaQuestoes.questoes.length==0)){
        if(totalRespondido==0){
           percentualRespondido = 0;
        }else{
          percentualRespondido = (totalRespondido/this.listaQuestoes.questoes.length)*100;
        }
    }
    
    return percentualRespondido;
  }
  carregarQuestoes(){
    console.log(this.listaQuestoes);
    for(let i:number =0;i<this.listaQuestoes.questoes.length;i++){
        this.listaQuestoes.questoes[i] = this.questaoService.getById(this.listaQuestoes.questoes[i]);
    }
    return this.listaQuestoes.questoes;
  }
  totalRespondido(){
    let totalRespondido:number = 0;
    for(let i:number=0;i<this.listaQuestoes.questoes.length;i++){
        if(this.questaoRespondidaService.foiRespondida(this.listaQuestoes.questoes[i])){
          totalRespondido++;
        }
    }
    return totalRespondido;
  }

  onRowSelect(event) {
         console.log(this.questaoSelecionada);
         this.router.navigate(['responder/',this.questaoSelecionada.id]);
  }
  diasRestantes(){
    let timeDiff = Math.abs(this.listaQuestoes.dataFim.getTime() - this.listaQuestoes.dataInicio.getTime());
    let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
    return diffDays
  }

}
