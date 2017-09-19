import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'listar-todas-questoes',
  templateUrl: './listar-todas-questoes.component.html',
  styleUrls: ['./listar-todas-questoes.component.css']
})
export class ListarTodasQuestoesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  questoes:String[]=["ddd","xfgdfgdfdf"];

  visualizarQuestoes(){
    // função que redirecione para o componente de visualização das questões
    alert("Disparou a função para visualizar as questões!")
  }
  eliminarQuestoes(){
    //mensagem de confirmação das questões
    //questoes.
     alert("Disparou a função para eliminar as questões!")

  }
  editarQuestoes(){
     alert("Disparou a função para editar as questões!")

  }
}
