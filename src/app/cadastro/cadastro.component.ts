import { Component, OnInit } from '@angular/core';
import {Usuario} from '../models/Usuario';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  usuario : Usuario;
  constructor() { }

  ngOnInit() {
    this.usuario = new Usuario();
  }

  cadastrarUsuario(){
    alert(`1.Vai disparar um insert do usuário no Banco 
           2.Mensagem confirmando cadastro
           3. Transição para a tela inicial
    `);
  }

}
