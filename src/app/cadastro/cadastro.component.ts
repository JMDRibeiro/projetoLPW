import { Component, OnInit } from '@angular/core';
import {Usuario} from '../models/Usuario';
import { UsuarioService } from './../usuario-service.service';
import {MessageService} from 'primeng/components/common/messageservice';
import {Message} from 'primeng/components/common/api';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  providers: [MessageService]
})
export class CadastroComponent implements OnInit {
  msgs: Message[] = [];

  usuario : Usuario;
  constructor(private usuarioService:UsuarioService) { }

  ngOnInit() {
    this.usuario = new Usuario();
  }

  cadastrarUsuario(){
    this.usuarioService.insert(this.usuario);
    console.log("Cadastrado!")
    console.log(this.usuario.id);
    
  }
  showSuccess() {
        this.msgs = [];
        this.msgs.push({severity:'success', summary:'Cadastrado com sucesso!', detail:'Seja bem-vindo ao RPG Creator!'});
    }

}
