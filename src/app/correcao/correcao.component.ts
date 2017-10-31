import { Component, OnInit } from '@angular/core';
import { QuestaoRespondida } from './../models/QuestaoRespondida';
import { ActivatedRoute,Router} from '@angular/router';
import { QuestaoRespondidaService } from './../questao-respondida.service';
import { QuestaoService } from './../questao.service';


@Component({
  selector: 'app-correcao',
  templateUrl: './correcao.component.html',
  styleUrls: ['./correcao.component.css']
})
export class CorrecaoComponent implements OnInit {

questaoRespondida:QuestaoRespondida = new QuestaoRespondida();
    constructor(private route:ActivatedRoute, private questaoRespondidaService:QuestaoRespondidaService,private questaoService:QuestaoService,private router: Router) {
          this.questaoRespondida.id =  this.route.snapshot.params['id'];
          this.questaoRespondida = this.questaoRespondidaService.getById(this.questaoRespondida); 
          this.questaoRespondida.questao = this.questaoService.getById(this.questaoRespondida.questao);
  
    }

    ngOnInit() {    }
    enviar(){
      this.questaoRespondida.foiCorrigida = true;
      console.log(this.questaoRespondida);
      this.router.navigate(['/corrigir']);
    }
    


}