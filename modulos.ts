/*O que é um  Módulo?
É uma maneira de organizar p código e separár o mesmo do escopo global e  acessando ele em outro arquivo
 através do import/export. 
 Módulos precisam de um loader no browser como o : "SystemJS" . 
 
 Inclusive, na própria documentação do TS a mesma sugere atualemnte o uso de módulos e não de namespaces. */

// Importação dos módulos que criamos para esse arquivo principal
import { areaRetangulo } from "./retangulo"; 
import { areaCircunferencia } from "./circuferencia";

// Agora, iremos rodar o SystemJS para rodar o código no browser.
// Sem essa essa ferramenta, o código fica compilável, mas o browser não conse ler. 

console.log(areaCircunferencia(7));
console.log(areaRetangulo(8,8));



// APENAS PARA FINS ILUSTRTIVOS ESTOU COLOCANDO OS MÓDULOS NESSE MESMO ARQUIVO:

// Função Area Retangulo
export function areaRetangulo(base:number , altura: number): number{
    return base * altura;
}

export const PI: number = 3.14;

// Função area circunferência:
export function areaCircunferencia(raio:number): number {
   return raio * raio * PI ;
}

