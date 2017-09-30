import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/primeng';
import {Usuario} from '../models/Usuario';
import { UsuarioService } from './../usuario-service.service';
import { rota } from './../app.rotas';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  entrar:boolean;
  usuario : Usuario = new Usuario();
  rota;

  constructor(private usuarioService:UsuarioService) {
     this.entrar = false;
     this.rota = rota;
   }

    ngOnInit() {
       
    }

  verficarUsuario(){
    let existeUsuario : boolean;
    if(this.usuarioService.findUsuario(this.usuario)==-1){
        console.log("Não está cadastrado!");
    }else{
        this.rota.navigate(['/hero']);
    }
  }

}
