import { Component, OnInit } from '@angular/core';
import { Turma } from './../models/Turma';
import { TurmaService } from './../turma.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-todas-crud-turma',
  templateUrl: './listar-todas-crud-turma.component.html',
  styleUrls: ['./listar-todas-crud-turma.component.css']
})
export class ListarTodasCrudTurmaComponent implements OnInit {
  turmas:Turma[] = [];
  turmaSelecionada:Turma;
  constructor(private turmaService:TurmaService,private router: Router) { }

  ngOnInit() {
    this.turmas = this.turmaService.listAll();
  }

  onRowSelect(event) {
        this.turmas = event.data;
        this.router.navigate(['/turma/editar',this.turmaSelecionada.id]);
    }
}
