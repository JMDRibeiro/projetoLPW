import { Injectable } from '@angular/core';
import { Questao } from './models/Questao';
import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
import { Observable } from "rxjs/Observable";

@Injectable()
export class QuestaoService {
  id : number = 0;
  questoes : Questao[] = [];
  questao1:Questao = new Questao();
  questao2:Questao = new Questao();
  questao3:Questao = new Questao();
  private questaoCollection: AngularFirestoreCollection<any>;
  constructor(private afs: AngularFirestore) {
    this.questaoCollection = this.afs.collection<any>("Questoes");
      
    this.questao1.titulo = "Bazinga!";
    this.questao1.nivelDificuldade = 1;
    this.questao1.enunciado = " Enunciado do Bazinga!";
    this.questao1.dica = " Dica do Bazinga!";
    this.questao1.retornosEsperados[0].entrada = "Entrada1 - Bazinga";
    this.questao1.retornosEsperados[0].saida = "Saida1 - Bazinga";
    this.questao1.retornosEsperados[1].entrada = "Entrada2 - Bazinga";
    this.questao1.retornosEsperados[1].saida = "Saida2 - Bazinga";
    this.questao1.retornosEsperados[2].entrada = "Entrada3 - Bazinga";
    this.questao1.retornosEsperados[2].saida = "Saida3 - Bazinga";
    

    this.questao2.titulo = "Vamos trabalhar!";
    this.questao2.nivelDificuldade = 2;
    this.questao2.enunciado = " Enunciado do Vamos trabalhar!";
    this.questao2.dica = " Dica do Vamos trabalhar!";
    this.questao2.retornosEsperados[0].entrada = "Entrada1 - Vamos trabalhar";
    this.questao2.retornosEsperados[0].saida = "Saida1 - Vamos trabalhar";
    this.questao2.retornosEsperados[1].entrada = "Entrada2 - Vamos trabalhar";
    this.questao2.retornosEsperados[1].saida = "Saida2 - Vamos trabalhar";
    this.questao2.retornosEsperados[2].entrada = "Entrada3 - Vamos trabalhar";
    this.questao2.retornosEsperados[2].saida = "Saida3 - Vamos trabalhar";

    this.questao3.titulo = "Triângulos!";
    this.questao3.nivelDificuldade = 3;
    this.questao3.enunciado = " Enunciado do Triângulos!";
    this.questao3.dica = " Dica do Triângulos!";
    this.questao3.retornosEsperados[0].entrada = "Entrada1 - Triângulos";
    this.questao3.retornosEsperados[0].saida = "Saida1 - Triângulos";
    this.questao3.retornosEsperados[1].entrada = "Entrada2 - Triângulos";
    this.questao3.retornosEsperados[1].saida = "Saida2 -  Triângulos";
    this.questao3.retornosEsperados[2].entrada = "Entrada3 -  Triângulos";
    this.questao3.retornosEsperados[2].saida = "Saida3 -  Triângulos";

    this.insert(this.questao1); 
    this.insert(this.questao2); 
    this.insert(this.questao3); 
     
   
  }

  insertOnFirebase(questao:Questao){
    this.questaoCollection.add(questao.toChaveValor()).then(
    resultado => {
         	questao.id = resultado.id;
    });
    console.log("id gerado pelo FireBase : "+questao.id);

  }
  insert(questao:Questao){
      this.id++;
      questao.id = this.id+"";
      this.questoes.push(questao);
      console.log("Inserção efetuada! Questao:"+ questao.titulo+" #"+questao.id);
  }
  listAll(){
    console.log("Listando todas as Questões> Total :" + this.questoes.length)
    return this.questoes;
  }
  update(questao:Questao){
      console.log("Atualizando Questão ( titulo = "+questao.titulo);
      let posicao = this.findQuestao(questao);
      this.questoes[posicao] = questao;   

  }
  delete(questao:Questao){
      console.log("Eliminando Questão ( titulo = "+questao.titulo);
      let posicao = this.findQuestao(questao);
      this.questoes.splice(posicao,1);   
  }

  findQuestao(questao:Questao){
      let posicao:number = 0;
      for(let i:number=0;i<this.questoes.length;i++){
          if(questao.id == this.questoes[i].id){
            posicao = i;
          }
      }
      return posicao;
  }

  getById(questao:Questao){
    
    let posicao:number = -1;
      for(let i:number=0;i<this.questoes.length;i++){
          if(questao.id == this.questoes[i].id){
            posicao = i;
          }
      }
    
    questao = this.questoes[posicao];
    return questao;
  }

  getByIdOnFireBase(questao:Questao){
     let questaoObservable:Observable<any> = new Observable(observer => {
     let doc = this.questaoCollection.doc(questao.id);
     doc.snapshotChanges().subscribe(result => {
       let id = result.payload.id;
       let data = result.payload.data()
       console.log("Oh o data");
       console.log(data);
       let document = { id: id, ...data };
       observer.next(document);
       observer.complete();
     });
   });
   questaoObservable.subscribe(
     resultadoObservable => {
    	questao.id = resultadoObservable.id;
      questao.enunciado = resultadoObservable.enunciado;
      questao.dica = resultadoObservable.dica;
      questao.nivelDificuldade = resultadoObservable.nivelDificuldade;
      questao.retornosEsperados = resultadoObservable.retornosEsperados;
      questao.titulo = resultadoObservable.titulo;
  }
  )
  console.log("Oh a questão!");
  console.log(questao);
  /*
  let  q:Questao = new Questao();
  q.id = questao.id;
  q.enunciado = questao.enunciado;
  q.dica = questao.dica;
  q.nivelDificuldade = questao.nivelDificuldade;
  q.retornosEsperados = questao.retornosEsperados;*/
  return questao;
  }


listAllOnFireBase(): Observable<any[]> {
   let resultados: any[] = [];
   let meuObservable = new Observable<any[]>(observer => {
     this.questaoCollection.snapshotChanges().subscribe(result => {
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
 deleteOnFireBase(funcionario): Promise<void> {
   return this.questaoCollection.doc(funcionario.id).delete();
 }

 updateOnFireBase(questao:Questao){
   this.questaoCollection.add(questao.toChaveValor()).then(
   resultado => {
     	questao.id = resultado.id;
    });
 }
}
