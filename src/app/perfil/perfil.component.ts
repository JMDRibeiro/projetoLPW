import { Component, OnInit } from '@angular/core';
import { Usuario } from './../models/Usuario';

@Component({
  selector: 'perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  data : any;
  usuario : Usuario;
  constructor() {
        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: '#4bc0c0'
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderColor: '#565656'
                }
            ]
        }
    }

  ngOnInit() {
    this.usuario = new Usuario();
    this.usuario.nomeCompleto = " João Marcelo D. R. Sobrinho";
    this.usuario.nomeUsuario = "JR55";
    

  }

}
