import { Component, OnInit } from '@angular/core';
import { Questao  } from '../models/Questao';
import { QuestaoService  } from '../questao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'listar-todas-questoes',
  templateUrl: './listar-todas-questoes.component.html',
  styleUrls: ['./listar-todas-questoes.component.css']
})
export class ListarTodasQuestoesComponent implements OnInit {
  questoes:Questao[]=[];

  questao1:Questao = new Questao(); 
  questao2:Questao = new Questao(); 
  questao3:Questao = new Questao(); 
  

  displayDialog: boolean;
  questao:Questao = new Questao();
  questaoSelecionada: Questao;
  novaQuestao : boolean;

  constructor(private questaoService:QuestaoService,private router: Router) { }

  ngOnInit() {
    this.questao1.titulo = "Bazinga!";
    this.questao1.nivelDificuldade = 1;
    this.questao1.enunciado = " Enunciado do Bazinga!";
    this.questao1.dica = " Dica do Bazinga!";
    this.questao1.retornosEsperados[0].entrada = "Entrada1 - Bazinga";
    this.questao1.retornosEsperados[0].saida = "Saida1 - Bazinga";
    this.questao1.retornosEsperados[1].entrada = "Entrada2 - Bazinga";
    this.questao1.retornosEsperados[1].saida = "Saida2 - Bazinga";
    this.questao1.retornosEsperados[2].entrada = "Entrada3 - Bazinga";
    this.questao1.retornosEsperados[2].saida = "Saida3 - Bazinga";
    

    this.questao2.titulo = "Vamos trabalhar!";
    this.questao2.nivelDificuldade = 2;
    this.questao2.enunciado = " Enunciado do Vamos trabalhar!";
    this.questao2.dica = " Dica do Vamos trabalhar!";
    this.questao2.retornosEsperados[0].entrada = "Entrada1 - Vamos trabalhar";
    this.questao2.retornosEsperados[0].saida = "Saida1 - Vamos trabalhar";
    this.questao2.retornosEsperados[1].entrada = "Entrada2 - Vamos trabalhar";
    this.questao2.retornosEsperados[1].saida = "Saida2 - Vamos trabalhar";
    this.questao2.retornosEsperados[2].entrada = "Entrada3 - Vamos trabalhar";
    this.questao2.retornosEsperados[2].saida = "Saida3 - Vamos trabalhar";

    this.questao3.titulo = "Triângulos!";
    this.questao3.nivelDificuldade = 3;
    this.questao3.enunciado = " Enunciado do Triângulos!";
    this.questao3.dica = " Dica do Triângulos!";
    this.questao3.retornosEsperados[0].entrada = "Entrada1 - Triângulos";
    this.questao3.retornosEsperados[0].saida = "Saida1 - Triângulos";
    this.questao3.retornosEsperados[1].entrada = "Entrada2 - Triângulos";
    this.questao3.retornosEsperados[1].saida = "Saida2 -  Triângulos";
    this.questao3.retornosEsperados[2].entrada = "Entrada3 -  Triângulos";
    this.questao3.retornosEsperados[2].saida = "Saida3 -  Triângulos";

    //this.questaoService.insert(this.questao1);
    //this.questaoService.insert(this.questao2);
    //this.questaoService.insert(this.questao3);
   
    this.questoes = this.questaoService.listAll();

  }

   showDialogToAdd() {
        this.novaQuestao = true;
        this.questao = new Questao();
        this.displayDialog = true;
    }
    
    save() {
        let questoes = [...this.questoes];
        if(this.novaQuestao)
            questoes.push(this.questao);
        else
            questoes[this.findQuestaoSelecionadaIndex()] = this.questao;
        
        this.questoes = questoes;
        this.questao = null;
        this.displayDialog = false;
        this.questaoService.questoes = this.questoes;
    }
    
    delete() {
        let index = this.findQuestaoSelecionadaIndex();
        this.questoes = this.questoes.filter((val,i) => i!=index);
        this.questao = null;
        this.displayDialog = false;
        this.questaoService.questoes = this.questoes;

    }    
    
    onRowSelect(event) {
        this.novaQuestao = false;
        this.questao = this.cloneCar(event.data);
        this.router.navigate(['/editar',this.questao.id]);
    }
    
    cloneCar(c: Questao): Questao {
        let questao = new Questao();
        for(let prop in c) {
            questao[prop] = c[prop];
        }
        this.questaoService.questoes = this.questoes;
        return questao;
    }
    
    findQuestaoSelecionadaIndex(): number {
        return this.questoes.indexOf(this.questaoSelecionada);
    }
}
