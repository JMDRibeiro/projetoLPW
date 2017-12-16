import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/primeng';
import {Usuario} from '../models/Usuario';
import { UsuarioService } from './../usuario-service.service';
import { Router } from '@angular/router';
import {MessageService} from 'primeng/components/common/messageservice';
import {Message} from 'primeng/components/common/api';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  entrar:boolean;
  msgs: Message[] = [];
  entrada: String =  "";
  senha: String =  "";
  usuario:Usuario = new Usuario();

  constructor(private usuarioService:UsuarioService, private router: Router) {
     this.entrar = false;
     let usuarios:Usuario[] = [];
     this.usuarioService.listAllOnFireBase().subscribe(questoes => {
        console.log(questoes);
    });
    

   }

    ngOnInit() {
       
    }

  verficarUsuario(){
    if(!this.usuarioService.autenticarUsuario(this.entrada,this.senha)){
        this.showLoginInexistente();
    }else{
        this.usuario = this.usuarioService.getUsuarioByTupla(this.entrada,this.senha);
        this.usuarioService.usuarioLogado = this.usuario;
        this.router.navigate(['/home',this.usuario.id]);
    }
  }

  showLoginInexistente(){
    this.msgs=[];
    this.msgs.push({severity:'error', summary:'Login inválido', detail:'O login ou a senha não correspondem a nenhuma conta. Cadastre-se para abrir uma conta.'});
  }

}

