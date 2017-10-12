import { Component, OnInit } from '@angular/core';
import {TabMenuModule, MenuItem} from 'primeng/primeng';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {

  constructor() { }

  items: MenuItem[];
  menuAluno : MenuItem[] = [
      {label: 'Missões', routerLink:['/responder'] },
      {label: 'Atividades', routerLink:['/listar-todas'] },
      {label: 'Materiais', icon: 'fa-book',routerLink:['/home']},
      {label: 'Perfil', icon: 'fa-support',routerLink:['/perfil']},
      {label: 'Fale conosco', icon: 'fa-twitter',routerLink:['/home']}
  ];
  menuProfessor : MenuItem[] = [
      {label: 'Missões', routerLink:['/listar-todas'] },
      {label: 'Inserir missões', routerLink:['/inserir'] },
      {label: 'Criar listas', icon: 'fa-book',routerLink:['/criar-lista']},
      {label: 'Fale conosco', icon: 'fa-twitter',routerLink:['/corrigir']},
      {label: 'Materiais', icon: 'fa-book',routerLink:['/login']},
      {label: 'Perfil', icon: 'fa-support',routerLink:['/perfil']},
      {label: 'Fale conosco', icon: 'fa-twitter',routerLink:['/corrigir']}
  
  
  ];
  
   ngOnInit() {
     //de acordo com o tipo de usuário, determinar qual será o seu Menu
           this.items = this.menuAluno;
    }

}

