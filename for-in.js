/*
    Estrutura de Repetição - LOOP

        - FOR IN
*/


const users = { name: 'Gabriel', age: 28, street: 'Rua dos Bobos'}

// users.name -> Gabriel
// users['name'] -> Gabriel


// for (const key in users) {
//     console.log(key)
// }

for (const key in users){
    console.log(key + ' : ' + users[key]) // <-- MENOS UTIL
} 

const irmã = { name: 'Rafaelly', age: 18, street: 'Barcelona'}

for (const key in irmã){
    console.log(`${key} : ${irmã[key]}`)  //<--- MAIS PROFISSIONAL
}