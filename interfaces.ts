// Interfaces:
// O que é e quando usar?
//....

interface Humano {
    nome: string,
    idade?: number, // propriedade/atributo opcional da interface( sinal de "?")
    [peso: number]: any // Propriedade dinâmica
}

function saudarComOla(pessoa:Humano) {
    console.log(`Olá ${pessoa.nome}`);
}

function mudarNome(pessoa: Humano){
    pessoa.nome = 'Joana';
}

const pessoa = {
    nome: 'João',
    idade: 27
}

console.log(saudarComOla(pessoa));
console.log(mudarNome(pessoa));
console.log(pessoa);
console.log(saudarComOla(pessoa));
console.log(saudarComOla({nome:'Rafael',idade: 36 , peso: 80 }));