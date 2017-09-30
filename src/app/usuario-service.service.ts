import { Injectable } from '@angular/core';
import { Usuario } from './models/Usuario';
@Injectable()
export class UsuarioService {

  usuarios:Usuario[]=[];
  id : number = 0;

  constructor() { }
 insert(usuario:Usuario){
      this.id++;
      usuario.id = this.id;
      this.usuarios.push(usuario);
      console.log(usuario);
  }
  listAll(){
    console.log("Listando todos os Usuários> Total :" + this.usuarios.length)
    return this.usuarios;
  }
  update(usuario:Usuario){
      console.log("Atualizando Usuário");
      let posicao = this.findUsuario(usuario);
      this.usuarios[posicao] = usuario;   

  }
  delete(usuario:Usuario){
      console.log("Eliminando Usuário");
      let posicao = this.findUsuario(usuario);
      this.usuarios.splice(posicao,1);   
  }

  findUsuario(usuario:Usuario){
      let posicao:number = -1;
      for(let i:number=0;i<this.usuarios.length;i++){
          if(usuario.id == this.usuarios[i].id){
            posicao = i;
          }
      }
      return posicao;
  }

  getUsuarioByLogin(usuario:Usuario){
    
    let posicao:number = -1;
      for(let i:number=0;i<this.usuarios.length;i++){
          if(usuario.login == this.usuarios[i].login){
            posicao = i;
          }
      }
    
    usuario = this.usuarios[posicao];
    return usuario;
  }

  getById(usuario:Usuario){
    
    let posicao:number = -1;
      for(let i:number=0;i<this.usuarios.length;i++){
          if(usuario.id == this.usuarios[i].id){
            posicao = i;
          }
      }
    
    usuario = this.usuarios[posicao];
    return usuario;
  }

  autenticarUsuario(usuario:Usuario){
    let podeLogar:boolean = false;  
    for(let i:number=0;i<this.usuarios.length;i++){
        if(this.usuarios[i].login==usuario.login && this.usuarios[i].senha==usuario.senha){
            podeLogar = true;
        }
    }
    return podeLogar;
  }

}
