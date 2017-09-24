import { Component, OnInit } from '@angular/core';
import {Usuario} from '../models/Usuario';
@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

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
