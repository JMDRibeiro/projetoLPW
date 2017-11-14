import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './../usuario-service.service';
import { TurmaService } from './../turma.service';
import { Turma } from './../models/Turma';
import { Usuario } from './../models/Usuario';

import {Message} from 'primeng/primeng';
import {Router} from '@angular/router';
import { ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-inserir-turma',
  templateUrl: './inserir-turma.component.html',
  styleUrls: ['./inserir-turma.component.css']
})
export class InserirTurmaComponent implements OnInit {
  turma:Turma = new Turma();
  alunos:Usuario[];

  constructor(private usuarioService:UsuarioService, private turmaService:TurmaService,private router: Router,private route:ActivatedRoute) { }

  ngOnInit() {
    
    this.turma.id = this.route.snapshot.params['id'];
      if(this.turma.id == undefined){
        this.turma.nome = "";
        this.turma.professorAdminstrador = this.usuarioService.usuarioLogado;
        this.alunos = this.usuarioService.listAllAlunos();
        console.log(this.turma);
      }else{
        this.turma = this.turmaService.getById(this.turma);
        this.alunos = this.turmaService.alunosNaoEstaoNaTurma(this.turma);
      }

  }

  salvar(){
    if(this.turma.id>0){
      this.turmaService.update(this.turma);
    }else{
       this.turmaService.insert(this.turma);
       this.router.navigate(['/turma/gerenciar']);
    }
  }

}
