/*
    Funções

    Function padrão  -> function(){}
    arrow function   -> () => {}

    Não precisa escrever "function".
    Além disso, usamos o sinal "=>" para cria-lá,
    o que lembra uma flecha, fazendo jus ao nome "arrow function".
*/

function sayMyName(name){
    return `seu nome é ${name}`   //mesma coisa (função padrão)
}

const sayMyName2 = name => `seu nome é ${name}`    //mesma coisa (arrow function)

console.log(sayMyName('Gabriel'))
console.log(sayMyName2('Rafaelly'))

const sum = (number1, number2) => number1 + number2   // arrow function

console.log(sum(7, 7))

const sub = (number1, number2) =>{  
    return number1 - number2          // <-- precisa do (return) pois pulou linha.
}

console.log(sub(7, 2))