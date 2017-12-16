import {Turma} from './Turma';
export class Usuario{
    id : String;
    nomeCompleto : String;
    nomeUsuario : String;
    email : String;
    senha : String;
    tipo : number;
    disciplina : String;
    turmas:Turma[] = [];


    toChaveValor(){
		let chaveValor = {
        nomeCompleto:this.nomeCompleto,
		nomeUsuario:this.nomeUsuario,
		email:this.email,
        senha:this.senha,
        tipo:this.tipo};
        console.log(chaveValor);
		return chaveValor;
	}
}