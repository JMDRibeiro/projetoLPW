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
  usuario : Usuario = new Usuario();

  constructor(private usuarioService:UsuarioService, private router: Router) {
     this.entrar = false;

   }

    ngOnInit() {
       
    }

  verficarUsuario(){
    let existeUsuario : boolean;
    if(!this.usuarioService.autenticarUsuario(this.usuario)){
        this.showLoginInexistente();
    }else{
        this.usuario = this.usuarioService.getUsuarioByLogin(this.usuario);
        console.log(this.usuario);
        this.router.navigate(['/home',this.usuario.id]);
    }
  }

  showLoginInexistente(){
    this.msgs=[];
    this.msgs.push({severity:'error', summary:'Login inválido', detail:'O login ou a senha não correspondem a nenhuma conta. Cadastre-se para abrir uma conta.'});
  }

}
