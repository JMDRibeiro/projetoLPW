import { Component, OnInit } from '@angular/core';
import {Usuario} from '../models/Usuario';
import { UsuarioService } from './../usuario-service.service';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  usuario : Usuario;
  constructor(private usuarioService:UsuarioService) { }

  ngOnInit() {
    this.usuario = new Usuario();
  }

  cadastrarUsuario(){
    this.usuarioService.insert(this.usuario);
    console.log("Cadastrado!")
    
  }

}
