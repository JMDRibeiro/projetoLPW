import { Component, OnInit } from '@angular/core';
import {Questao} from '../models/Questao';
import {QuestaoService} from '../questao.service';
import {Message} from 'primeng/components/common/api';
import {MessageService} from 'primeng/components/common/messageservice';

@Component({
  selector: 'inserir-questao',
  templateUrl: './inserir-questao.component.html',
  styleUrls: ['./inserir-questao.component.css'],
  providers: [MessageService]

})
export class InserirQuestaoComponent implements OnInit {
  questao = new Questao;
  msgs: Message[] = [];

  constructor(private questaoService : QuestaoService, private messageService: MessageService) { }

  ngOnInit() {
   this.questao = new Questao();
   
  }

  salvar(){ 
      this.questaoService.insert(this.questao);
      //alert(this.questaoService.listAll().length);    
      //alert(this.questao.imprimirQuestao());
      this.showSuccess();
      this.questao = new Questao();
  }

  showSuccess() {
        this.msgs = [];
        this.msgs.push({severity:'success', summary:'Questão inserida com sucesso!', detail:' '});
    }


}
