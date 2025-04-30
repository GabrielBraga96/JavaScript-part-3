/*
Estrutura de Repitição - LOOP

    -FOR
        1) INICIALIZAÇÃO - Criar uma variavel e colocar um valor inicial para ela
        2) CONDIÇÃO - Enquanto for true, o laço continuará iterando
                      Ele irá verificar antes de cada iteração
        3) EXPRESSÃO FINAL - O que irá ocorrer a cada vez que nosso laço der uma volta

        for([inicialização]; [condição]; [expressão final]){
            *seu código aqui*
        }

*/

// for(let i = 0; i < 15; i++){
//     console.log(i)

// }

const users = [
    'Maria',
     'Joao', 
     'Aline', 
     'Carolina', 
     'Maria', 
     'Joao', 
     'Aline', 
     'Carolina', 
     'Maria', 
     'Joao', 
     'Aline', 
     'Carolina'
    ]

// users.length => Tamanho do meu array

for(let i = 0; i < users.length; i++){
    console.log(users[i])
}