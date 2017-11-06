import { Component, OnInit } from '@angular/core';
import {TabMenuModule, MenuItem} from 'primeng/primeng';
import { UsuarioService } from './../usuario-service.service';


@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {

  constructor(private usuarioService:UsuarioService) { }

  items: MenuItem[];
  /*
            this.items = [
             {label: 'Gerenciar Missões(P)', routerLink:['/listar-todas-crud'] },
             {label: 'Inserir missões(P)', routerLink:['/inserir'] },
             {label: 'Responder missões(A)', routerLink:['/listar-questoes/responder'] },
             {label: 'Corrigir missões(P)', routerLink:['/corrigir'] },
             {label: 'Missões corrigidas(A)', routerLink:['/corrigidas'] },
             {label: 'Criar campeonato', icon: 'fa-calendar',routerLink:['/criar-lista']},
             {label: 'Materiais', icon: 'fa-book',routerLink:['/login']},
             {label: 'Perfil', icon: 'fa-support',routerLink:['/perfil']},
             {label: 'Fale conosco', icon: 'fa-twitter',routerLink:['/corrigir']}
        ];
        */
  menuAluno : MenuItem[] = [
      {label: 'Questões', routerLink:['/listar-questoes/responder']  },
      {label: 'Questões corrigidas', routerLink:['/corrigidas'] },
      {label: 'Listas de questões', routerLink:['/listar-listas']  },
      {label: 'Atividades', routerLink:['/listar-todas'] },
      {label: 'Materiais', icon: 'fa-book',routerLink:['/home']},
      {label: 'Perfil', icon: 'fa-support',routerLink:['/perfil']},
      {label: 'Fale conosco', icon: 'fa-twitter',routerLink:['/home']},
      {label: 'Sair', icon: 'fa-twitter',routerLink:['/login']}

  ];
  menuProfessor : MenuItem[] = [
      {label: 'Gerenciar questões', routerLink:['/listar-todas-crud'] },
      {label: 'Inserir questões', routerLink:['/inserir'] },
      {label: 'Corrigir questões', routerLink:['/corrigir'] },
      {label: 'Gerenciar listas', routerLink:['/listas-questoes-crud'] },
      {label: 'Criar listas', icon: 'fa-book',routerLink:['/criar-lista']},
      {label: 'Fale conosco', icon: 'fa-twitter',routerLink:['/corrigir']},
      {label: 'Materiais', icon: 'fa-book',routerLink:['/login']},
      {label: 'Perfil', icon: 'fa-support',routerLink:['/perfil']},
      {label: 'Fale conosco', icon: 'fa-twitter',routerLink:['/corrigir']},
      {label: 'Sair', icon: 'fa-twitter',routerLink:['/login']}  
  ];
  
   ngOnInit() {
     //de acordo com o tipo de usuário, determinar qual será o seu Menu
     if(this.usuarioService.usuarioLogado.tipo=="professor"){
         this.items = this.menuProfessor;
     }else{
         this.items = this.menuAluno;
     }
     
    }

}

