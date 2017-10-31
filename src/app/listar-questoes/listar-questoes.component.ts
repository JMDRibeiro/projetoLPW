import { Component, OnInit } from '@angular/core';
import { QuestaoService } from './../questao.service';
import { QuestaoRespondidaService } from './../questao-respondida.service';
import { Questao } from './../models/Questao';
import {Router} from '@angular/router';
import { ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-listar-questoes',
  templateUrl: './listar-questoes.component.html',
  styleUrls: ['./listar-questoes.component.css']
})
export class ListarQuestoesComponent implements OnInit {

  tipoListagem:String = "Questões para ";
  destino:String = "";
  questoes:Questao[]=[];

  questao:Questao = new Questao();
  questaoSelecionada: Questao;

  constructor(private questaoService:QuestaoService,private questaoRespondidaService:QuestaoRespondidaService,private router: Router,private route:ActivatedRoute) {
    this.questoes = this.questaoRespondidaService.getNaoRespondidas(this.questaoService.listAll());
    this.tipoListagem = this.route.snapshot.params['tipoListagem'];
    if(this.tipoListagem=="responder"){
      this.destino = "/responder";
    }
    if(this.tipoListagem=="corrigir"){
      this.destino = "/corrigir";
    }
    this.tipoListagem = "Questões para "+this.tipoListagem+" !";
   }

  ngOnInit() {

  }
   
  onRowSelect(event) {
        console.log(this.destino);
        console.log(this.questaoSelecionada);
        this.router.navigate([this.destino,this.questaoSelecionada.id]);
  }
    
   

}
