export class Questao{

    id : number;
    nivelDificuldade : number;
    enunciado : String;
    dica : String;
	retornosEsperados = [
		{entrada:"", saida:""}
	];
    //retornosEsperados = [
    //{entrada :"Entrada de exemplo", saida:"Retorno Esperado"},
    //];
	titulo : String;

	/*
	constructor(nivelDificuldade,enunciado,dica,retornos,titulo){
		//this.id = id;
		this.nivelDificuldade = nivelDificuldade;
		//this.tempoRespostaSegundos = tempoRespostaSegundos;
		this.enunciado = enunciado;
		this.dica = dica;
		//this.pontuacao = pontuacao;
		//this.assunto = assunto;
        this.retornosEsperados = retornos;
		this.titulo = titulo;
	}
	algumasQuestoes(){
		let questaoEhPar : Questao = new Questao(1,"Escreva um algoritmos que retorne se um número é ou não par","Se ligue na condição para ser par : SER DIVISÍVEL POR 2",[{entrada :"2", saida:"Eh par"},{entrada :"5", saida:"Eh impar"}],"É par?");
		let questaoEhPerfeito : Questao = new Questao(2,"Escreva um algoritmos que retorne se um número é ou não perfeito","Se ligue na condição para ser perfeito : ESSE NÚMERO TEM DE SER IGUAL A SOMA DE SEUS DIVISORES, EXCETO ELE MESMO",[{entrada :"6", saida:"Eh perfeito"},{entrada :"5", saida:"Não é perfeito"}],"É par?");
	}
	*/
		constructor(){
		
	}

	
}
