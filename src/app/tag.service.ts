import { Injectable } from '@angular/core';
import { Tag } from './models/Tag';


@Injectable()
export class TagService {
  tags : Tag[] = [];
   id:number = 0;
  constructor() {
    let tagTestes:Tag = new Tag();
    let tagTestes1:Tag = new Tag();
    let tagTestes2:Tag = new Tag();

    tagTestes.nome = "Estruturas de Repetição";
    this.insert(tagTestes);
    tagTestes1.nome = "Matrizes";
    this.insert(tagTestes1);
    tagTestes2.nome = "Array";
    this.insert(tagTestes2);
   }

  insert(tag:Tag){
      this.id++;
      tag.id = this.id;
      this.tags.push(tag);
      console.log("Inserção efetuada! Tag:\n"+ tag);
  }
  listAll(){
    console.log("Listando todas as Tags> Total :" + this.tags);
    return this.tags;
  }
  update(tag:Tag){
      let posicao = this.findTag(tag);
      this.tags[posicao] = tag;   

  }
  delete(tag:Tag){
      let posicao = this.findTag(tag);
      this.tags.splice(posicao,1);   
  }

  findTag(tag:Tag){
      let posicao:number = 0;
      for(let i:number=0;i<this.tags.length;i++){
          if(tag.id == this.tags[i].id){
            posicao = i;
          }
      }
      return posicao;
  }

  getById(tag:Tag){
    
    let posicao:number = -1;
      for(let i:number=0;i<this.tags.length;i++){
          if(tag.id == this.tags[i].id){
            posicao = i;
          }
      }
    
    tag = this.tags[posicao];
    return tag;
  }

}
