import { Component, OnInit } from '@angular/core';
import {Questao} from '../models/Questao';
import {QuestaoService} from '../questao.service';
import {Message} from 'primeng/components/common/api';
import {MessageService} from 'primeng/components/common/messageservice';
import { ActivatedRoute} from '@angular/router'

@Component({
  selector: 'inserir-questao',
  templateUrl: './inserir-questao.component.html',
  styleUrls: ['./inserir-questao.component.css'],
  providers: [MessageService]

})
export class InserirQuestaoComponent implements OnInit {
  questao = new Questao;
  msgs: Message[] = [];

  constructor(private questaoService : QuestaoService, private messageService: MessageService,private route:ActivatedRoute) { 
  }

  ngOnInit() {
      this.questao.id = this.route.snapshot.params['id'];
      this.questao = this.questaoService.getById(this.questao);
      console.log(this.questao);
      if(this.questao == undefined){
          this.questao = new Questao();
      }    
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
  deletar(){
      this.questaoService.delete(this.questao);
  }

}
