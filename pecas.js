/* Exercicio do modulo Logica de Programacao, feito no encontro remoto do dia 21/12/2021 */
// 15.01.22

/* Criar um programa para cadastrar pecas de uma loja com 3 condicoes:
    i   - Nome maior que 3 caracteres
    ii  - Peso maior que 100g
    iii - Maximo de 10 pecas cadastradas
*/

// Declarar variavel
let pesoPeca   = 150
let numeroPeca = 9
let nomePeca   = 'Disco de Freio'

// Forma aninhada
if(nomePeca.length > 3) {
    console.log("Name adequado!")
    if(pesoPeca > 100) {
        console.log("Peso adequado!")
        if(numeroPeca < 10) {
            console.log("Espaço disponível!")
        }
        else{
            console.log("Sem espaço disponível (max.: 10 pecas!)")
        }
    }
    else{
        console.log("Peso abaixo do permitido (100g)!")
    }
    console.log("Cadastrado corretamente!")
}
else{
    console.log("Nome menor que o permitido (min.: 03 caracteres!)")
    console.log("Não Cadastrado!")
}
