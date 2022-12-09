// Interfaces:
// O que é e quando usar?
//São como um modelo de tipagem que geralmente são usadas em  objetos , classes e etc. 

 export interface Humano { // Interface ( Colocando o export, conseguimos usar essa interface em outro arquivo. )
    nome: string,
    idade?: number, // propriedade/atributo opcional da interface( sinal de "?")
    [peso: number]: any // Propriedade dinâmica 
    
}

function saudarComOla(pessoa:Humano) { // Declarando o parâmetro que vai entrar como o tipo da interface que criamos. 
    console.log(`Olá ${pessoa.nome}`);
}

function mudarNome(pessoa: Humano){ // Declarando o parâmetro que vai entrar como o tipo da interface que criamos. 
    pessoa.nome = 'Joana';
}

const pessoa: Humano = { // Relacionando o tipo do objeto com a interface que criamos. 
    nome: 'João',
    idade: 27
}

console.log(saudarComOla(pessoa));
console.log(mudarNome(pessoa));
console.log(pessoa);
console.log(saudarComOla(pessoa));
console.log(saudarComOla({nome:'Rafael',idade: '36' }));

// Usando interfaces "como se fossem heranças" em  classes:
/* Regras para usar a palavra certa no momento das heranças:

Classe que herda outra classe : extends
Classe que herda uma interface: implements
-------------------------------------------
Interface que herda uma outra interface: extends
Interface que herda uma classe: extends 

Obs.: uma classe que herda outra classe se usa extends, já uma classe que herda uma interface se usa implements e
Uma interface que herda uma outra interface se usa o extends.*/

class Cliente implements Humano {
    nome: string = '';
    ultimaCompra: Date = new Date(); // propriedade exclusiva da classe. 

    informarSobrenome(sobreNome:string) {
        console.log(`Olá meu nome é ${this.nome} ${sobreNome}`);
     }

}

const meuCliente = new Cliente();
meuCliente.nome = 'Jota';
console.log(meuCliente.informarSobrenome('Alencar'));
console.log(meuCliente.ultimaCompra);

// Interfaces de função

    interface FuncaoCalculo {

        (valorA:number, valorB: number) // uma função/método inacabado. 
    }
    
    let calcularpotencia: FuncaoCalculo = (base: number , expoente: number): number => {
       return  Math.pow(base, expoente);
    
    }

console.log(calcularpotencia(3,2));

// Herança entre interfaces:
// Simulando uma hierarquia de heranças:

interface A {
    metodoA():void ;
}

interface B {
    metodoB(): void ;
}


interface C extends A,B { //  herdando mais de uma interface

    metodoC(): void; 


}

// Uma classe herdando as interfaces A e B 
class ClasseC implements A,B {

    metodoA(): void {/*bloco de execução...*/}
    metodoB(): void { /*bloco de execução...*/}
}


interface D extends  ClasseC {

}