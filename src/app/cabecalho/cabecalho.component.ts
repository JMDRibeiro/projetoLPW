import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/primeng';

@Component({
  selector: 'cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {

  constructor() { }

   items;

        ngOnInit() {
        this.items = [
            {
                label: 'Missões',
                destino : '/home'
                /*
                items: [
                    {label: 'Inserir'},
                    {label: 'Listar-Todas'}
                ]
                */
            },

            {
                label: 'Perfil',
                destino: ''
            },
            {
                label: 'Materiais',
            },
            {
                label: 'Mensagens',
            },


        ];
    }
}
