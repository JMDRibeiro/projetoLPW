import { Injectable } from '@angular/core';
import { ListaQuestoes } from './models/ListaQuestoes';
import { Questao } from './models/Questao';
import { Usuario } from './models/Usuario';
import { QuestaoService } from './questao.service';
import { UsuarioService } from './usuario-service.service';

import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ListaQuestoesService {
  listasQuestoes : ListaQuestoes[] = [];
  private listasQuestoesCollection: AngularFirestoreCollection<any>;

   constructor(private questaoService:QuestaoService, private usuarioService:UsuarioService,private afs: AngularFirestore) {
     this.listasQuestoesCollection = this.afs.collection<any>("ListaQuestoes");
     let listaQuestoes1 : ListaQuestoes = new ListaQuestoes();
     let listaQuestoes2 : ListaQuestoes = new ListaQuestoes();
     let listaQuestoes3 : ListaQuestoes = new ListaQuestoes();
     let usuarioLaranja : Usuario = new Usuario();
     listaQuestoes1.titulo = "Teste1"; listaQuestoes1.professorAdministrador = this.usuarioService.getById(usuarioLaranja);
     listaQuestoes2.titulo = "Teste2"; listaQuestoes2.professorAdministrador = this.usuarioService.getById(usuarioLaranja);
     listaQuestoes3.titulo = "Teste3";listaQuestoes3.professorAdministrador = this.usuarioService.getById(usuarioLaranja);
     let questao:Questao = new Questao();
     questao.id = "1";
     listaQuestoes1.questoes.push(this.questaoService.getById(questao));
     listaQuestoes2.questoes.push(this.questaoService.getById(questao));
     listaQuestoes3.questoes.push(this.questaoService.getById(questao));
     questao.id = "2";
     listaQuestoes1.questoes.push(this.questaoService.getById(questao));
     questao.id = "3";
     listaQuestoes1.questoes.push(this.questaoService.getById(questao));
     listaQuestoes2.questoes.push(this.questaoService.getById(questao));
     listaQuestoes1.dataInicio = new Date();
     listaQuestoes1.dataFim = new Date("December 4, 2017 10:13:00");

     listaQuestoes2.dataInicio = new Date();
     listaQuestoes2.dataFim = new Date("January 4, 2018 10:13:00");

     listaQuestoes3.dataInicio = new Date();
     listaQuestoes3.dataFim = new Date("December 22, 2017 12:15:00");

    //this.insert(listaQuestoes1);
    //this.insert(listaQuestoes2);
    //this.insert(listaQuestoes3);
  }

  insert(listaQuestao:ListaQuestoes){
      this.listasQuestoes.push(listaQuestao);
      console.log("Inserção efetuada! Questao:\n"+ listaQuestao);
  }
  insertOnFirebase(listaQuestoes:ListaQuestoes){
    return this.listasQuestoesCollection.add(listaQuestoes.toChaveValor())
  }
  listAllOnFireBase(): Observable<any[]> {
   let resultados: any[] = [];
   let meuObservable = new Observable<any[]>(observer => {
     this.listasQuestoesCollection.snapshotChanges().subscribe(result => {
       result.map(documents => {
         let id = documents.payload.doc.id;
         let data = documents.payload.doc.data();
         let document = { id: id, ...data };
         resultados.push(document);
       });
       observer.next(resultados);
       observer.complete();
     }); });
   return meuObservable;
 }

  listAll(){
    console.log("Listando todas as Questões> Total :" + this.listasQuestoes.length);
    return this.listasQuestoes;
  }

  listAllByAluno(aluno:Usuario){
    let listasAluno:ListaQuestoes[] = [];
    for(let i:number =0;i<this.listasQuestoes.length;i++){
        if(this.alunoEstaNaLista(this.listasQuestoes[i],aluno)){
          listasAluno.push(this.listasQuestoes[i]);
        }

    }
    console.log("Listando todas as Questões do aluno"+aluno.nomeCompleto +"> Total :\n" + listasAluno);
    return listasAluno;
  }

  listAllByProfessor(professor:Usuario){
    let listasProfessor:ListaQuestoes[] = [];
    for(let i:number =0;i<this.listasQuestoes.length;i++){
        if(this.professorEstaNaLista(this.listasQuestoes[i],professor)){
          listasProfessor.push(this.listasQuestoes[i]);
        }

    }
    console.log("Listando todas as Questões do professor"+professor.nomeCompleto +"> Total :\n" + listasProfessor);
    return listasProfessor;
  }

  update(listaQuestao:ListaQuestoes){
      console.log("Atualizando Questão = "+listaQuestao);
      let posicao = this.findListaQuestao(listaQuestao);
      this.listasQuestoes[posicao] = listaQuestao;   

  }
  delete(listaQuestao:ListaQuestoes){
      console.log("Eliminando Questão  = "+listaQuestao);
      let posicao = this.findListaQuestao(listaQuestao);
      this.listasQuestoes.splice(posicao,1);   
  }

  findListaQuestao(listaQuestao:ListaQuestoes){
      let posicao:number = 0;
      for(let i:number=0;i<this.listasQuestoes.length;i++){
          if(listaQuestao.id == this.listasQuestoes[i].id){
            posicao = i;
          }
      }
      return posicao;
  }

  getById(listaQuestao:ListaQuestoes){
    
    let posicao:number = -1;
      for(let i:number=0;i<this.listasQuestoes.length;i++){
          if(listaQuestao.id == this.listasQuestoes[i].id){
            posicao = i;
          }
      }
    
    listaQuestao = this.listasQuestoes[posicao];
    return listaQuestao;
  }

  alunosNaoEstaoNaLista(lista:ListaQuestoes){
    let alunos:Usuario[] = this.usuarioService.listAllAlunos();
    let alunosNaoEstaoNaLista:Usuario[] = [];
    for(let i:number=0;i<alunos.length;i++){
      if(!this.alunoEstaNaLista(lista,alunos[i])){
        alunosNaoEstaoNaLista.push(alunos[i]);
      }
    }
    return alunosNaoEstaoNaLista;
  }
  alunoEstaNaLista(lista:ListaQuestoes,aluno:Usuario){
    let estaNaLista:boolean = false;
    for(let j:number=0;j<lista.alunos.length;j++){
        if(lista.alunos[j].id == aluno.id){
            estaNaLista = true;
        }
    }
    return estaNaLista;
  }

   professorEstaNaLista(lista:ListaQuestoes,professor:Usuario){
    let estaNaLista:boolean = false;
    console.log(lista);
    console.log(professor);
    if(lista.professorAdministrador.id == professor.id){
       estaNaLista = true;
    }
    return estaNaLista;
  }

  questoesNaoEstaoNaLista(lista:ListaQuestoes){
    let questoes:Questao[] = this.questaoService.listAll();
    let questoesNaoEstaoNaLista:Questao[] = [];
    for(let i:number=0;i<questoes.length;i++){
      if(!this.questaoEstaNaLista(questoes[i],lista)){
        questoesNaoEstaoNaLista.push(questoes[i]);
      }
    }
    return questoesNaoEstaoNaLista;
  }

  questaoEstaNaLista(questao:Questao,lista:ListaQuestoes){
    let estaNaLista:boolean = false;
    for(let i:number=0;i<lista.questoes.length;i++){
        if(lista.questoes[i].id==questao.id){
            estaNaLista = true;
        }
  }
  return estaNaLista;
  }
}

