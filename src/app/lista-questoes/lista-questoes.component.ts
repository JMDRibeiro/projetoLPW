import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-questoes',
  templateUrl: './lista-questoes.component.html',
  styleUrls: ['./lista-questoes.component.css']
})
export class ListaQuestoesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  titulo:String;

  questoes=[
    {id:"ddd"},
    {id:"xfgdfgdfdf"}];

  selectedValues: string[] = [];

}
