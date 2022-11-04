// #Rodando a primeira linha de código na forma manual:

const  texto1 : string = 'Hello World!!! RafasssA';
console.log(texto1);

// No terminal, dentro da pasta onde se encontra o arquivo do código, digite  tsc nome_do_arquivo.ts . 
//Em sesguida, note que na pasta do projeto foi gerado  um arquivo JS com o mesmo nome do arquivo do TS.
//Com esse arquivo JS, executamos o comando node nome_do_arquivo.js e o programa será executado. 

//# Rodando o código através do plugin Code Runner:
//1° Instale o o pacote do node chamado ts-node através do comando: npm i -g ts-node 
//2º Baixe o plugin do Code Runner e acione o comando Ctrl + Alt + N;

//# para rodar o arquivo typescript que queremos , e o mesmo alterar automaticamente a versão do Javascript, deve no CMD rodar 
// o comando tsc nome_do_arquivo.ts 

//Rodando um projeto TS que usa o HTML:
//Devemos sempre linkar no arqiivo desse html não o arquivo do TS e sim a versão JS deste arquivo, pois o browser somente
//consegue ler JS!

// ---------------------------------------

//#TIPOS - Conhecendo alguns tipos e provocando erros de tipagem:

//String
let nome = 'Rafael';
//nome = 22; // Gera um erro de tipagem: "Type number is not assingnable to type string";
console.log(nome);

//Number
let idade = 23;
//idade = '23'; Erro! 
console.log(idade);

//Boolean
let possuiHobbies = true;
//possuiHobbies = 1111; // Erro!
console.log(possuiHobbies);

//#Tipos Explicitos:

/*Devemos sempre declarar a variável e tipifica-la em uma mesma linha,
pois caso contrário, será um tipo dinânmico do JS (significa que nós não precisamos declarar seu tipo. 
Mas isso só é possível porque o JS  identifica o tipo da variável que estamos declarando e o atribui, 
mesmo que não explicitamente.).
*/

//Exemplo de como NÃO se deve fazer:
let minhaIdade;
minhaIdade = 37;
console.log(typeof minhaIdade);

// Exemplo CORRETO:
let minhaaIdade : number =  50;
console.log( typeof minhaIdade);


//#Arrays:
/*Para a tipar corretamente um Array, devemos depois do nome da variável colocar o tipo que pode
ser string, number ou any (que siginifica que pode ser qualquer  tipo), depois o sinal de colchetes [] e dpois inicializar a variável
com os dados do array.*/

let dadosPessoais: string[] = ['Rafael','Brazil', 'Rio de Janeiro'];
console.log(typeof dadosPessoais);

//#Tuplas

/*
Elas representam uma estrutura de dados que parecidos com um Array.
É como se configurasemos regras para essas estruturas de dados. 
*/

// Exemplo:
//          (Regra dos tipos de dados) | (Dados da Tupla)
let dadosCliente : [string , number] = ['Richard', 10];
dadosCliente.push(`Rafael`,20)
console.log(dadosCliente);
// (Como mostra o exemplo acima, de fato os dados da tupla  deve seguir estas regras de tipagem que colocamos) 

/*( Arrays X Tuplas - As diferenças: É que nos arrays nós trabalhamos somente com um tipo de dado 
e com as tuplas com diferentes tipos. )*/

/* # Enum:
Ele permite enumemarmos uma estrutura de dados
Enums são muito utilizados em cenários onde a mudança dos dados não é constante ou não mudam como: cadastro de sexo, 
dias da semana e afins. */
//Exemplo:

enum semestre  {   /* Importante: se não atribuirmos uma enumeração fixa, o valor padrão dos dados
                    será sempre na ordem padrão de 0, 1, 2 ...*/

                    /* Outro ponto, se em toda estrutura dos dados enumerarmos apenas um dado mesmo da mesma, 
                    a estrutura de dado seguinte, assumirá a ordem númerica de valor colocado nessa estrutura anteriores.
                    */

    Janeiro = 1,
    Fevereiro = 2,
    Marco = 3,
    Abril = 4,
    Maio = 5,
    Junho = 6,

}

    // Setando nas novas variáveis o Enum criado com os meses que queremos:
let mostrarMesAbril: semestre = semestre.Abril;
let mostrarMesJunho: semestre = semestre.Junho;


// Mostrando apenas os meses de Abril e Junho:
console.log(` Numeração do mês de Abril: ${mostrarMesAbril}`);
console.log(` Numeração mês de Junho: ${mostrarMesJunho}`);

for (const i in semestre) {
    
    console.log(semestre[i]);
}

// # Any:
// Permiti qualquer tipagem, como string, numbe array e etc.
// Esse tipo, lembra a tipagem dinâmica do JS.
// O mesmo  pode ser usado por exemplo, quanto estamos graduativamente mudando o código do JS para TS.

let carro: any = 'BMW';
carro = {
    marca: 'BMW',
    modelo:'ZX',
    ano: 2018,
}
console.log(carro);

// #Usando tipos em funções:

//Do tipo String:
function mostrarNome(nome: string) : string {
    return nome;
}

console.log(mostrarNome('Rafael'));


// Do tipo Number:
function mostrarCalculo(numero: number, multiplicador: number ): number {
     return numero * multiplicador;
}

console.log(mostrarCalculo(9,10));

// Do tipo Void - Tipagem vazia:

const digaOi  =  () :void => console.log('Oii') ;

console.log(digaOi());

/* # Funções como tipos:
É quando atribumios a uma  variável qualquer que o tipo dela vai ser uma função:
Exemplo 1:
*/

/* 1º - Obs.: na linha abaixo, que representa o processo de tipificação, é importante que o tipo do parâmetro seja igual
ao parâmetro que está configurado na função  que queremos associar.
*/ 
let nome2: (displayNome: string) => string;

//2º-  Associando a função que desejamos:
nome2 = mostrarNome;

console.log(nome2('Jeremy'));
console.log(typeof(nome2));

// ---------

// Exemplo2: 

let calcular :  (a:number , b:number) => number;

calcular = mostrarCalculo;

console.log(calcular(5,5));

//#Objeto - tipificando-o:
// Para Tipificr um objeto, se tipifica as propriedades do mesmo da forma abaixo:
let moto : {marca: string, modelo:string , ano:number} = {

    marca: 'Honda',
    modelo:'CB 500',
    ano: 2021,

}

// Execício de objetos:
/* Crie um objeto que se chama funcionário com:
    - Array de Strings com nomes de dois supervisores;
    -Função de bater ponto que recebe a hora(number) e retorna uma string;
    -Ponto normal (<= 8);
    -Fora do horário (> 8); */

// Resposta:

const funcionario : { supervisores:string[] , ponto: (marcacaoPonto: number) => string} = {

    supervisores : ['Fulano' , 'Ciclano'],

    ponto:  (marcacaoPonto: number ) => {
        let ternarioPonto: string;
        return ternarioPonto = marcacaoPonto <=8 ? 'Ponto normal' : 'Fora do horário' ;
    },

}

console.log(funcionario.ponto(10));

/*Definindo tipos personalizados ( Alias):
Criamos o tipo personalizado "Funcionário" , um alias, que servirá como um modelo de tipagem para os objetos, assim
dessa forma, podemos criar outros objetos que utilizaram essa "tipagem personalizada":
*/

// Criando  a personalização de tipagem do nosso objeto "default/padrão":
type PadraoObjFuncionario = {   
    supervisores: string[], 
    baterPonto: (ponto: number) => string
};

let funcionario1 : PadraoObjFuncionario =  { /* Associação do tipo personalizado de tipagem que criamos para
 este novo objeto . */
    supervisores:['Carlos', 'Jéssica'],

    baterPonto(marcacao: number): string  {
        const ternarioPonto: string = marcacao <=8 ? 'Ponto normal' :' Fora do horário';
        return ternarioPonto;

    }

}

let funcionario2: PadraoObjFuncionario = { /* Associação do tipo personalizado de tipagem que criamos para
este novo objeto . */

    supervisores:['Ricardo','João'] ,

    baterPonto(horas:number): string {
        const ternarioPonto: string = horas <= 8 ? 'Ponto normal' : 'Fora do horário';
        return ternarioPonto;
    }

}

// Union types
// É a capacidade de podermos tipificarmos uma variável com 2 ou mais opções de tipos pré-definidos;
//Exemplo:

let nota: number | string;
nota = 10;
nota = '10';
//nota = [10]; // <<< Dá erro, pois não pré configuramos o tipo array.

console.log( typeof(nota));

// Never:
/*É um tipo que é muito utilizado em funções , cuja a mesma nunca executa um bloco de código comum, pois
 executa  algum um erro ou um tipo de looping.

 Exemplo:
 */

 function exibirFalha( mensagem:string): never {

  throw new Error(mensagem);
   
 }

 const produto = {   // Obs.: Professor criou esse objeto sem tipa-lo!
    nome: 10,
    preco: 23,

    validarDados()  {
        const ternarioChecaDados = typeof this.nome != 'string' || isNaN(this.preco) ?  exibirFalha('Cheque o tipo do(s) dado(s) inserido(s)')
        : this.preco <= 0 ? exibirFalha('Preço inválido!') : 'Tipos de dados válidos!'; 
        
        return ternarioChecaDados;
    }
 }

console.log(produto.validarDados());

// Exercício
//Converta ao máximo o código abaixo de JS para TS:
// 1º Forma de se fazer:

// Objeto padrão contaBancária
let contaBancaria01: {saldo: number , depositar: (valor: number) => number} = {
    saldo: 3456,
    depositar(valor: number) {
        const adicaoValorMaisSaldo: number  = this.saldo += valor;
        return adicaoValorMaisSaldo;
    }
}
 // Objeto correntista cujo qual esta atrelado ao mesmo o objeto conta bancária
let correntista01: {nome: string , contaBancaria01: any, contatos: string[] } = {
    nome: 'Ana Silva',
    contaBancaria01: contaBancaria01,
    contatos: ['34567890', '98765432']
}
 
correntista01.contaBancaria01.depositar(3000);
console.log(correntista01)

//=====================================================
// 2º forma de se fazer( tornando o objetos em tipo para ser usado em um ou em mais objetos):

//Tornando em um tipo o objeto modelo
type  ContaBancaria = {
    saldo: number,
    depositar: (valor: number) => void;
}

// Criando um objeto, cujo o mesmo será atribuido a tipagem personalizada que criamos
let contaBancaria : ContaBancaria = {
    saldo: 3000,
    depositar: (valor: number) => this.saldo += valor
}

// Tornando em um tipo o objeto modelo

type Correntista = {
    nome: string,
    contaBancaria: ContaBancaria,
    contatos: string[],
}

//Criando um objeto, cujo o mesmo será atribuido a tipagem personalizada que criamos
let correntista02: Correntista = {
    nome:'Helena',
    contaBancaria: contaBancaria,
    contatos: ['9999-4655','3333-7777'],

}
