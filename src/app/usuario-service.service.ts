import { Injectable } from '@angular/core';
import { Usuario } from './models/Usuario';
@Injectable()
export class UsuarioService {

  usuarios:Usuario[]=[];
  id : number = 0;
  usuarioLogado:Usuario = new Usuario();

  constructor() { 
    let professorTeste1 = new Usuario();
    let alunoTeste1 = new Usuario();
    let professorTeste2 = new Usuario();
    let alunoTeste2 = new Usuario();  let alunoTeste3 = new Usuario();  let alunoTeste4 = new Usuario();
    let alunoTeste5 = new Usuario();  let alunoTeste6 = new Usuario();  let alunoTeste7 = new Usuario();
    let alunoTeste8 = new Usuario();  let alunoTeste9 = new Usuario();  let alunoTeste10 = new Usuario();  let alunoTeste11 = new Usuario();  

    professorTeste1.email =  "leonardo@gmail.com";             professorTeste2.email =  "david.alain@gmail.com";
    professorTeste1.login = "leosoares";                       professorTeste2.login = "davalain";
    professorTeste1.nomeCompleto = "Leonardo Soares e Silva";  professorTeste2.nomeCompleto = "David Alain do Nascimento";
    professorTeste1.nomeUsuario = "LSoares";                   professorTeste2.nomeUsuario = "DavAlain"; 
    professorTeste1.senha = "123";                             professorTeste2.senha = "123"; 
    professorTeste1.tipo = 1;                                  professorTeste2.tipo = 1; 

    alunoTeste1.email =  "joaoifpe15@gmail.com";              alunoTeste2.email =  "van@gmail.com";
    alunoTeste1.login = "jdr55";                              alunoTeste2.login = "vanCap";
    alunoTeste1.nomeCompleto = "João Marcelo D. R. Sobrinho"; alunoTeste2.nomeCompleto = "Vanessa Almeida";
    alunoTeste1.nomeUsuario = "JMDRS";                        alunoTeste2.nomeUsuario = "Vanessinha Magali";
    alunoTeste1.senha = "123";                                alunoTeste2.senha = "123";
    alunoTeste1.tipo = 0;                                     alunoTeste2.tipo = 0;
    alunoTeste1.disciplina = '3TILPW';                        alunoTeste2.disciplina = '3TIADS'; 


    alunoTeste3.email =  "bia@gmail.com";              alunoTeste4.email =  "emely.melo@gmail.com";
    alunoTeste3.login = "biaGus";                              alunoTeste4.login = "emyLaj";
    alunoTeste3.nomeCompleto = "Beatriz Ramos"; alunoTeste4.nomeCompleto = "Emely Melo";
    alunoTeste3.nomeUsuario = "Bia Engenheira";                        alunoTeste4.nomeUsuario = "Emely Grey";
    alunoTeste3.senha = "123";                                alunoTeste4.senha = "123";
    alunoTeste3.tipo = 0;                                     alunoTeste4.tipo = 0;
    alunoTeste3.disciplina = '3TIADS';                        alunoTeste4.disciplina = '3TILPW'; 

    alunoTeste5.email =  "gusmao@gmail.com";              alunoTeste6.email =  "evra@gmail.com";
    alunoTeste5.login = "gusGus";                              alunoTeste6.login = "evaSj";
    alunoTeste5.nomeCompleto = "Mateus Gusmão"; alunoTeste6.nomeCompleto = "Eva Victória";
    alunoTeste5.nomeUsuario = "Capitão";                        alunoTeste6.nomeUsuario = "Evinha dos TI";
    alunoTeste5.senha = "123";                                alunoTeste6.senha = "123";
    alunoTeste5.tipo = 0;                                     alunoTeste6.tipo = 0;
    alunoTeste5.disciplina = '3TIMAT';                        alunoTeste6.disciplina = '3TILPW'; 

    alunoTeste7.email =  "milena@gmail.com";              alunoTeste8.email =  "muke@gmail.com";
    alunoTeste7.login = "mihGus";                              alunoTeste8.login = "johPeq";
    alunoTeste7.nomeCompleto = "Milena Siqueira"; alunoTeste8.nomeCompleto = "Joanne Gabriela";
    alunoTeste7.nomeUsuario = "Milenária";                        alunoTeste8.nomeUsuario = "Joh Jong Un";
    alunoTeste7.senha = "123";                                alunoTeste8.senha = "123";
    alunoTeste7.tipo = 0;                                     alunoTeste8.tipo = 0;
    alunoTeste7.disciplina = '3TILPW';                        alunoTeste8.disciplina = '3TIADS'; 

    alunoTeste9.email =  "pedrao@gmail.com";              alunoTeste10.email =  "marcelino@gmail.com";
    alunoTeste9.login = "pedGus";                              alunoTeste10.login = "marGus";
    alunoTeste9.nomeCompleto = "Pedro Hugo"; alunoTeste10.nomeCompleto = "Marcelino Barros";
    alunoTeste9.nomeUsuario = "Capivara comprometida";        alunoTeste10.nomeUsuario = "Marcelino dos teclados";
    alunoTeste9.senha = "123";                                alunoTeste10.senha = "123";
    alunoTeste9.tipo = 0;                                     alunoTeste10.tipo = 0;
    alunoTeste9.disciplina = '3TIMAT';                        alunoTeste10.disciplina = '3TILPW'; 

    alunoTeste11.email =  "joh@gmail.com";              
    alunoTeste11.login = "johGus";                         
    alunoTeste11.nomeCompleto = "Jhonantas Wesley"; 
    alunoTeste11.nomeUsuario = "Cap. Iaw Brow";        
    alunoTeste11.senha = "123";                                
    alunoTeste11.tipo = 0; 
    alunoTeste11.disciplina = '3TIMAT';

    this.insert(professorTeste1); this.insert(professorTeste2);
    this.insert(alunoTeste1);this.insert(alunoTeste2);this.insert(alunoTeste3);this.insert(alunoTeste4);
    this.insert(alunoTeste5);this.insert(alunoTeste6);this.insert(alunoTeste7);this.insert(alunoTeste8);
    this.insert(alunoTeste9);this.insert(alunoTeste10);this.insert(alunoTeste11);
  }
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

  listAllAlunos(){
    let alunos:Usuario[] = [];
    for(let i:number=0;i<this.usuarios.length;i++){
        if(this.usuarios[i].tipo==0){
            alunos.push(this.usuarios[i]);
        }
    }
    return alunos;
  }
}

