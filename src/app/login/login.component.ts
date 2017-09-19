import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/primeng';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

    ngOnInit() {
        this.entrar = true;
    }
entrar:boolean;
login = "";
senha = "";

//PF criar função para que, ao preencher os campos de login e senha, verfique se estes estão disponíveis no banco de usuários
}
