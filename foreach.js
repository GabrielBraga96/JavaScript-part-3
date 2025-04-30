/*
    For Each (item,index,array)
*/

const users = [
    { name: 'Rafaelly', age: 18, number: '(15) 99724-2424'},
    { name: 'Aline', age: 30, number: '(15) 99711-1111'},
    { name: 'Rosangela', age: 59, number: '(15) 99787-0134'},
    { name: 'Allan', age: 34, number: '(15) 99788-8888'},
]

// users.forEach((item, index) => {
//     console.log(index + ") "+item)  //erro
// });

users.forEach((item, index) => {
    console.log(`${index + 1}) Nome: ${item.name}, Idade: ${item.age}, Contatos: ${item.number}`)
});