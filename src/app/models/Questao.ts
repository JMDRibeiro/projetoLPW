import { Assunto } from './Assunto';
import { Alternativa } from './Alternativa';
export class Questao{

	id : number;
    nivelDeDificuldade : number;
    tempoParaResponder : number;
    texto : string;
    dica : string;
    pontuacao : number;
    assunto : Assunto;
    alternativas : Alternativa[] = [];
    constructor(){
        this.alternativas[0] = new Alternativa(); this.alternativas[0].estaCorreta = false;
        this.alternativas[1] = new Alternativa(); this.alternativas[1].estaCorreta = false;
        this.alternativas[2] = new Alternativa(); this.alternativas[2].estaCorreta = false;
        this.alternativas[3] = new Alternativa(); this.alternativas[3].estaCorreta = false;
        this.alternativas[4] = new Alternativa(); this.alternativas[4].estaCorreta = false;
        this.assunto = new Assunto();
    }

   
}

