/*Namespaces, nada mais é que um espaço reservado onde os nomes das variáveis, funções e etc não conflitam
com o espaço global*/

namespace DadosReservados {

    const usuario : string = 'Rafael';

    // Export é necessário para a função fica acessível fora do escopo do Namespace
   export function chamarNome() : string{
        return `${usuario}`;
    }

}

/* Acessando a função do nome Namespace. 
Sempre se coloca o nome do Namespace antes de chamar qualquer dado dele.*/
console.log(DadosReservados.chamarNome());

const usuario : string  = 'Usuário Anònimo'; // Não dá conflito, pois a variável é global. 

// Namespaces aninhados:

namespace Header {
    
    const header: any = document.createElement('header');

    //Nesse segundo namespace, deixamos o export para podermos obter acesso a esta camada de namespace.
   export namespace Nav {
        const nav: any = document.createElement('nav');

        export function adicionaNavNoHeader() {
            header.appendChild(nav);
        }
    }

}


console.log(Header.Nav.adicionaNavNoHeader()); 







