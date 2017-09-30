import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'
import {Usuario} from '../models/Usuario';
import { UsuarioService } from './../usuario-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  usuario:Usuario =  new Usuario();
  constructor(private route:ActivatedRoute, private usuarioService:UsuarioService) { 
    this.usuario.id = this.route.snapshot.params['id'];
    this.usuario = this.usuarioService.getById(this.usuario);
    console.log(this.usuario);
    if(this.usuario==undefined){
      this.usuario = new Usuario();
      this.usuario.nomeUsuario="Fulano";
    }
  }

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
