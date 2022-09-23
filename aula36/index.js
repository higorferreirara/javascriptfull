const pessoas = {
    nome: 'Higor',
    sobrenome: 'Ferreira',
    idade: 32
};

for (let chave in pessoas) {
    console.log(chave, pessoas[chave])
}


//console.log(pessoas.nome);
//console.log(pessoas['sobrenome'])
//const frutas = ['pera', 'uva', 'maçã', 'banana'];

//for (let i in frutas) {
//    console.log(frutas[i]) // for 'in' lê os indices ou chaves do objeto.
//}

//for (let i = 0; i < frutas.length; i++) {
//    console.log(frutas[i])
//}