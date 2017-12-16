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
  tipoUsuario:SelectItem;
  usuario : Usuario;
  constructor(private usuarioService:UsuarioService) {
    this.usuario = new Usuario();
    this.tiposUsuario = [];
    this.tiposUsuario.push({label:'Aluno', value:0});
    this.tiposUsuario.push({label:'Professor', value:1});


   }

  ngOnInit() {
  }

  cadastrarUsuario(){
    console.log(this.usuario.tipo);
    let retorno = this.usuarioService.insertOnFirebase(this.usuario);
    retorno.then(
     resultado => {
         	this.usuario.id = resultado.id;
    });
    console.log("id gerado pelo FireBase : "+this.usuario.id);
    console.log("Cadastrado!")
    
  }
  showSuccess() {
        this.msgs = [];
        this.msgs.push({severity:'success', summary:'Cadastrado com sucesso!', detail:'Seja bem-vindo ao RPG Creator!'});
  }

  jaEstaCadastrado(){
    
  }

}
