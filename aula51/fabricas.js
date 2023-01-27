// usando a chave THIS para acessar parametros dentros das funções

function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,
        fala: function(assunto) {
            return `${this.peso} está ${assunto}`;
        },
        altura: a,
        peso: p,
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    }
}

const p1 = criaPessoa('Asafe', 'Ethan', 0.96, 13);
console.log(p1.imc);
const p2 = criaPessoa('Miguel', 'Pablo', 1.70, 88);
console.log(p2.imc)