/* Decorators:
Resumidamente, o “decorator” é uma função que é executada em tempo de execução e 
que pode ser anexada a uma classe,  propriedade, método e etc.
Obs.: uma função decorarators  NÃO pode ser uma Arrow Function. 
Eles não são chamados como uma função commum, mas são invocados no background quando uma classe , ou propriedade
ou método é executado. 
Sua estrutura consiste em começar com um “@” seguido no nome da função, como por exemplo no código abaixo:
*/

// Classe "decorarada" com uma função a parte que irá imprimi-la.

@imprimirClasse
class Eletrodomestico {
    constructor(){
        console.log('Imprimindo...');
    }
}
// função que irá imprimir a classe usando a técnica do decorators.
// Essa função só será chamada quando a classe for carregada.
//A classe será imprimida como uma função
 function imprimirClasse(construtor?: Function): any{
    console.log(construtor);
}


console.log(new Eletrodomestico());

// Factory de Decarotors (Fábrica de Decorators). 
//São funções que retornam Decorators

@condicaoDecorator(true)
class Eletrodomestico02 {
    constructor(){
        console.log('Imprimindo02...');
    }

}

function decoratorConsoleLog(constructor: Function) {
    console.log(constructor);
}

function decoratorVazio( vazio: Function) {}

function  condicaoDecorator(valor: boolean) :any{  
    return valor ?  decoratorConsoleLog: decoratorVazio ;
}

// Ou tudo em uma só função :

// Função fábrica de Decorators:

function  condicaoDecorator02(valorLogico: boolean): Function{ 

    function decoratorConsoleLog(construtor: Function) { 
        return console.log(construtor)
    }

    function decoratorVazio( vazio: Function) {};

    return valorLogico === true ?  decoratorConsoleLog: decoratorVazio ;
  
}

new  Eletrodomestico02();


// Decorator de métodos:

class ContaBancaria{

    @semValorNegativoDecorator
    public valorSaldo: number;

    constructor(valorSaldo = 0 ) {
        this.valorSaldo = valorSaldo;
    }

   @congelaEdicaoObjetoDecorator
    sacar(valorSaque: number): any{
        const executaSaque: number = this.valorSaldo -= valorSaque;
        valorSaque > this.valorSaldo || this.valorSaldo <= 0 ? 'Saldo insuficiente' : executaSaque ;

    }

    deposito( @parametroDecorator valorDeposito: number): number{
        const executaDeposito = this.valorSaldo += valorDeposito
         return  executaDeposito;
    }

    saldo(): number{
        return this.valorSaldo;    
    }


}

// Um Factory Decorator que congela o o objeto...


function congelaEdicaoObjetoDecorator(alvo: any, nomeMetodo: string,
    descritor: PropertyDescriptor) : any {
                console.log(alvo);
                console.log(nomeMetodo);
                descritor.writable = false; // Desativada a edição no objeto
    }

const c1 = new ContaBancaria(5000);



c1.sacar = function(saque){    
    return this.valorSaldo  = saque; // sacar is read-only! ( não conseguimos redescrever esse método com o wiritable desativado  )

}

console.log(c1);


// Decorator em propriedades (usando a mesma Classe ContaBancaria):

function semValorNegativoDecorator(alvo: any, nomePropriedade: string ) {
    // deleta a propriedade "setada" anteriormente:
    delete alvo[nomePropriedade]

    // cria outra propriedade e "seta" a mesma:
    Object.defineProperty(alvo , nomePropriedade , {
        get: function (): any {
            return alvo["_" + nomePropriedade] ;
        },
        
       set: function(valor: any ): void {
           if(valor < 0) {
            throw new Error('Saldo inválido');           
           } else {
                alvo["_" + nomePropriedade] = valor;
           }
        }      
    });d  
}

const c2 = new ContaBancaria(-5000); // Vai cair no fluxo do Throw do Decorator:

// Decorator em parâmetros ( usando a mesma classe ContaBancaria):

function parametroDecorator( alvo:any, nomeMetodo: string, indiceParametro:number ){
    console.log( `alvo:${alvo}`);
    console.log( `nome do método:${nomeMetodo}`);
    console.log( `indíce de parametro :${indiceParametro}`);
}