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

   ngOnInit() {
           this.items = [
            {label: 'Missões', routerLink:['/listar-todas'] },
            {label: 'Atividades', icon: 'fa-calendar',routerLink:['/home']},
            {label: 'Criar campeonato', icon: 'fa-calendar',routerLink:['/criar-lista']},
            {label: 'Materiais', icon: 'fa-book',routerLink:['/login']},
            {label: 'Perfil', icon: 'fa-support',routerLink:['/perfil']},
            {label: 'Fale conosco', icon: 'fa-twitter',routerLink:['/corrigir']}
        ];
    }

}
