import { Injectable } from '@angular/core';
import { Turma } from './models/Turma'
import { Usuario } from './models/Usuario'

import { UsuarioService} from './usuario-service.service';
@Injectable()
export class TurmaService {
  turmas:Turma[] = [];
  id:number = 0;
  constructor(private usuarioService:UsuarioService) {

   }

  insert(turma:Turma){
      this.id++;
      turma.id = this.id;
      this.turmas.push(turma);
      console.log("Inserção efetuada! Turma:\n"+ turma);
  }
  listAll(){
    console.log("Listando todas as Turmas> Total :" + this.turmas);
    return this.turmas;
  }
  update(turma:Turma){
      let posicao = this.findTurma(turma);
      this.turmas[posicao] = turma;   

  }
  delete(turma:Turma){
      let posicao = this.findTurma(turma);
      this.turmas.splice(posicao,1);   
  }

  findTurma(turma:Turma){
      let posicao:number = 0;
      for(let i:number=0;i<this.turmas.length;i++){
          if(turma.id == this.turmas[i].id){
            posicao = i;
          }
      }
      return posicao;
  }

  getById(turma:Turma){
    
    let posicao:number = -1;
      for(let i:number=0;i<this.turmas.length;i++){
          if(turma.id == this.turmas[i].id){
            posicao = i;
          }
      }
    
    turma = this.turmas[posicao];
    return turma;
  }

  alunosNaoEstaoNaTurma(turma:Turma){
    let alunos:Usuario[] = this.usuarioService.listAllAlunos();
    let alunosNaoEstaoNaLista:Usuario[] = [];
    for(let i:number=0;i<alunos.length;i++){
      if(!this.alunoEstaNaTurma(turma,alunos[i])){
        alunosNaoEstaoNaLista.push(alunos[i]);
      }
    }
    return alunosNaoEstaoNaLista;
  }
  alunoEstaNaTurma(turma:Turma,aluno:Usuario){
    let estaNaLista:boolean = false;
    for(let j:number=0;j<turma.alunos.length;j++){
        if(turma.alunos[j].id == aluno.id){
            estaNaLista = true;
        }
    }
    return estaNaLista;
  }
}
