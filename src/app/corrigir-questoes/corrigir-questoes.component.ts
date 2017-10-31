import { Component, OnInit } from '@angular/core';
import { QuestaoRespondida } from './../models/QuestaoRespondida';
import { ActivatedRoute,Router} from '@angular/router';
import { QuestaoRespondidaService } from './../questao-respondida.service';

@Component({
  selector: 'app-corrigir-questoes',
  templateUrl: './corrigir-questoes.component.html',
  styleUrls: ['./corrigir-questoes.component.css']
})
export class CorrigirQuestoesComponent implements OnInit {

questaoRespondida:QuestaoRespondida = new QuestaoRespondida();
addComentario:boolean = false;
    constructor(private route:ActivatedRoute, private questaoRespondidaService:QuestaoRespondidaService,private router: Router) {
          this.questaoRespondida.id =  this.route.snapshot.params['id'];
          this.questaoRespondida = this.questaoRespondidaService.getById(this.questaoRespondida); 
    }

    ngOnInit() {    }
    enviar(){
      this.questaoRespondida.foiCorrigida = true;
      console.log(this.questaoRespondida);
      this.router.navigate(['/corrigir']);
    }
    addComent(){
      console.log("Add comentário");
      this.addComentario = !this.addComentario;
    }


}
