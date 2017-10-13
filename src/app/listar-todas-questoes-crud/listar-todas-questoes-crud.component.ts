import { Component, OnInit } from '@angular/core';
import { Questao  } from '../models/Questao';
import { QuestaoService  } from '../questao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'listar-todas-questoes-crud',
  templateUrl: './listar-todas-questoes-crud.component.html',
  styleUrls: ['./listar-todas-questoes-crud.component.css']
})
export class ListarTodasQuestoesCRUDComponent implements OnInit {
  questoes:Questao[]=[];

  displayDialog: boolean;
  questao:Questao = new Questao();
  questaoSelecionada: Questao;
  novaQuestao : boolean;

  constructor(private questaoService:QuestaoService,private router: Router) { }

  ngOnInit() {
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
