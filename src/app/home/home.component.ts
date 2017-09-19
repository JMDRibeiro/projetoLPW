import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  jogadores = [
    {pos: 1,name : 'Evra', pontos:'550'},
    {pos: 2,name : 'Ciço', pontos:'549'},
    {pos: 3,name : 'Tabata', pontos:'500'},
    {pos: 4,name : 'Cicrano', pontos:'499'},
    {pos: 5,name : 'Você', pontos:'498'}
  ]
}
