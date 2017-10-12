import { Component, OnInit } from '@angular/core';
import {Usuario} from '../models/Usuario';
import { UsuarioService } from './../usuario-service.service';
import {MessageService} from 'primeng/components/common/messageservice';
import {Message} from 'primeng/components/common/api';
import {SelectItem} from 'primeng/primeng';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  providers: [MessageService]
})
export class CadastroComponent implements OnInit {
  msgs: Message[] = [];
  tiposUsuario:SelectItem[] = [];
  usuario : Usuario;
  constructor(private usuarioService:UsuarioService) {
    this.usuario = new Usuario();
    this.tiposUsuario = [];
    this.tiposUsuario.push({label:'Aluno', value:{id:1, name: 'Aluno', code: 'A'}});
    this.tiposUsuario.push({label:'Professor', value:{id:2, name: 'Professor', code: 'P'}});


   }

  ngOnInit() {
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

  jaEstaCadastrado(){
    
  }

}
