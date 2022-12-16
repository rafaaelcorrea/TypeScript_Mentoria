/* Decorators:
Resumidamente, o “decorator” é uma função que é executada em tempo de execução e 
que pode ser anexada a uma classe,  propriedade, método e etc.
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

