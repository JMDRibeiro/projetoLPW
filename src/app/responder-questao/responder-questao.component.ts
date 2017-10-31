import { Component, OnInit } from '@angular/core';
import { Questao } from './../models/Questao'
import { QuestaoRespondida } from './../models/QuestaoRespondida'
import { Usuario } from './../models/Usuario'
import { QuestaoRespondidaService } from '../questao-respondida.service';
import { ActivatedRoute,Router} from '@angular/router'
import { QuestaoService } from './../questao.service';



@Component({
  selector: 'app-responder-questao',
  templateUrl: './responder-questao.component.html',
  styleUrls: ['./responder-questao.component.css']
})
export class ResponderQuestaoComponent implements OnInit {

  questao : Questao = new Questao();
  questaoRespondida : QuestaoRespondida = new QuestaoRespondida();

  constructor(private questaoRespondidaService:QuestaoRespondidaService, private route:ActivatedRoute,private router:Router,private questaoService:QuestaoService) {
  /*
  this.questao.titulo = "Neste espaço o título da questão.";
    this.questao.enunciado = "Neste espaço aparecerá o enunciado da questão";
    this.questao.nivelDificuldade = 1;
        this.questao.retornosEsperados = [
      {entrada :"Entrada de exemplo", saida:"Retorno Esperado"},
      {entrada :"2a Entrada de exemplo", saida:"2o Retorno Esperado"},
      {entrada :"3a Entrada de exemplo", saida:"3o Retorno Esperado"}
      ];
      */
    this.questao.id = this.route.snapshot.params['id'];
    this.questao = this.questaoService.getById(this.questao);
    console.log(this.questao);
    this.questaoRespondida.aluno = new Usuario(); // como associar ao usuario? Vai ter que passar o id por todo canto?
    this.questaoRespondida.questao = this.questao;
   }
  

  ngOnInit() {
    
  }

  responder(){
    this.questaoRespondida.foiCorrigida = false;
    this.questaoRespondidaService.insert(this.questaoRespondida);
    console.log(this.questaoRespondida);
    this.router.navigate(['/listar-questoes/responder']);
    //essas função poderia abrir uma janela na qual o jogador insere sua resposta
  }


}
