//Generics
//Seguindo a definição de *Generics* na documentação do TypeScript, 
//ele nos permite criar um componente que pode funcionar em vários tipos, em vez de em um único.
//É um tipagem que é definida tardia, na própria inferência ou de forma taxativa em algum lugar do código. 

// Um exemplo que usa o tipo Any:
/*
function funcaoPadrao(parametro: any) {
    return parametro;   
}

// Com o any, o valor do nosso parâmetro pode ser qualquer coisa:

console.log(funcaoPadrao('Rafael')); // Uma string...
console.log(funcaoPadrao(37)); // Um number....
console.log({nome: 'joao' , idade: 37}); // Um objeto...
*/

function funcaoPadrao<TIPO>( parametro: TIPO): TIPO { 
    return parametro;
}

// Em cada chamada dessa função, temos vários tipos de argumentos diferentes:
console.log(funcaoPadrao('Rafael').length); //  por de trás dos panos, o TS reconhece que  é uma string...
console.log(funcaoPadrao<number>(37)); //Realizando o tipo por inferência
console.log( {nome:'joao' , idade: 37} ); // por de trás dos panos, o TS reconhece que  é um objeto...

// Usando Generics com Arrays:

const avaliacoes: Array<number> = [1.53, 2.00, 7.5];
//avaliacoes.push('5.5');  Gera erro, pois o array é um genreics do tipo number
avaliacoes.push(30);

function imprimirDados<TIPO>(  parametroImpressao: TIPO[]) {
    parametroImpressao.forEach( elementoArray => console.log(elementoArray) );
}

imprimirDados([1,2,3]); // Um array  que de forma implícita é do tipo  number.

imprimirDados<number>([4,5,6]); // De forma explicita informa que o array é de number;

imprimirDados<string>(['Ana','Carlos','Ricardo']); // De forma explicita informa que o array é de strings

imprimirDados<{nome:string,idade: number}>([ /* Definindo que o tipo de dado na chamada da função  será um objeto.
 colocando dentro do sinal de maior e menor as propriedades e seus tipos do objeto. <{...}>  */
    {nome:'Ciclano', idade: 36},
    {nome:'Fulano', idade: 46},
    {nome:'Beltrano', idade: 56},
]);

// O  tipo função junto com o Genereics

function funcaoBase(parametro: any): any { // Função que servirá como basew apenas para a variável
    console.log(parametro);
}

const umaFuncao: <TIPO>(dadoA: TIPO) => TIPO  =  funcaoBase; //A variável recebe um tipo função e nesta tem um subtipo Generics. 
console.log(umaFuncao('Imprimindo'));

// Classes com Generics:

 abstract class OperacaoBinaria <TIPO_A ,TIPO_B> {
    constructor(public operando1: TIPO_A , public operando2: TIPO_B ){}
    
    abstract executarCalculo(): TIPO_B ;
}

 class SomaBinaria extends OperacaoBinaria <number, number> {

        executarCalculo(): number {
        return this.operando1 + this.operando2;
        }
    
 }

  const soma = new SomaBinaria(3,4);

  console.log(soma.executarCalculo());


  // ==================================

  // Mais um exemplo de classes com Genericsxxxz
  class Data  {

    //público  por padrão:

     dia: number;
     public mes: number;
     ano:number;

     constructor( dia: number = 1 , mes: number = 12, 
        ano: number = 1970  ){

        }

  }

class DiferencaEntreDatas extends OperacaoBinaria<Data, string> {

    pegarTempo( data: Data): number {
        let {dia, mes, ano } = data ;
        return  new Date (` ${dia} / ${mes} / ${ano} `).getTime();       
    }

    executarCalculo(): string {
        const tempo1 = this.pegarTempo(this.operando1);
        const tempo2 = this.pegarTempo(this.operando2);
        const calcularDiferencaDatas = Math.abs(tempo1 - tempo2);
        const dia = 1000 * 60 * 60 * 24;
        return `${Math.ceil(calcularDiferencaDatas / dia)} dia(s).`;           
    }

}

const data1 = new Data(1,1,2021);
const data2 = new Data(1,1,2022);

console.log(new DiferencaEntreDatas(data1,data2).executarCalculo());

// Exercício:

// utilizando Generics, faça uma classe Chamada "Fila" .
// Essa classe tem que possuir um atributo que se chama "filaArray" do tipo Array,
/* Métodos que essa classe deve possuir: ENTRAR ( insere um dado no array), PRÓXIMO (pega o próximo elemento da fila e remove ele) 
e IMPRIMIR imprimir os elemntos dessa fila. */

abstract class FilaBase<TIPO_GENERICS_A> {

    constructor( public nomes:string[] = [] , public filaDeNomesArray: string[] = []){}

   abstract entrarNaFila(): TIPO_GENERICS_A ;
   abstract removeDaFila(): TIPO_GENERICS_A;
   abstract imprimirDadosFila(): TIPO_GENERICS_A;
}

class Fila extends FilaBase<string[]> {

    entrarNaFila(): any {

       //let nomesArray : string[] = ['ciclano','beltrano','fulano'];

        for (let i = 0; i < this.nomes.length; i++) {
                this.filaDeNomesArray.push(this.nomes[i]);  
        }
    }

    removeDaFila():  any[]{
        return this.filaDeNomesArray.splice(1,1);
    }


    imprimirDadosFila(): any {
            return `${this.filaDeNomesArray} `;
    }

    
    }

const estanciaFila = new  Fila( ['ciclano','beltrano','fulano'],)
estanciaFila.entrarNaFila();
estanciaFila.removeDaFila();
console.log(estanciaFila.imprimirDadosFila());