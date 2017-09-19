import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corrigir-questoes',
  templateUrl: './corrigir-questoes.component.html',
  styleUrls: ['./corrigir-questoes.component.css']
})
export class CorrigirQuestoesComponent implements OnInit {
questoeRespondidas:String[] = ["aa","bb","cc"];
addComentario : boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
