function retornaFuncao(nome) {
    return function() {
        return nome;
    }
}

const funcao = retornaFuncao('Luiz');
const funcao2 = retornaFuncao('Otavio');
console.dir(funcao)
console.dir(funcao2)