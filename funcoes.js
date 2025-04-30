/*
    Functions / funções

        Trecho de código que é executado
        SOMENTE quando solicitado
*/

const variavel = 'abacatinho'

console.log(variavel)

function nomeNaTela(){
    console.log('Gabriel')
}

nomeNaTela()
nomeNaTela()
nomeNaTela()


/*
    As Funçoes pode receber argumentos ou parametros dentro do parentezes ()
*/

function saySysterName(name){
    console.log(`O nome da minha irmã é: ${name}`)
}

saySysterName('Rafaelly')
saySysterName('Aline')
saySysterName('Allan')

/*
    Função com mais de um Parametro
*/

function sum(value, value2, value3){
    console.log(value + value2 + value3)
}

sum(30, 30, 30)
sum(1, 1, 1)
sum(2, 2, 2)

/*
    Funçoes podem receber Argumentos ou Parametros 
*/

function sayName(name = 'Gabi'){  // <-- valor padrão ignorado
    console.log(name)
}

sayName('Geovanna')


function sumG(number1 = 1, number2 = 1){ // <-- Valor padrão contabilizado
    console.log(number1 + number2)
}

sumG()

function sumS(number1 = 1, number2 = 1){  // <-- ignorado
    console.log(number1 + number2)
}

sumS(10, 20)  // <-- Valor informado contabilizado


/*
    Função com Variavel
*/

const myNumber = 20

function sumP(number1 = myNumber, number2 = 1){  // <-- Valores contabilizados
    console.log(number1 + number2)
}

sumP()