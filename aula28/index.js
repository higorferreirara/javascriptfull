//const data = new Date(2019, 3, 20, 15, 30, 22, 200);
// ano, mês, dia, hora, minito, milesimo de segundo.
//console.log(data.toString())
/*const data = new Date();

console.log('dia', data.getDate())
console.log('Mês', data.getMonth() + 1)
console.log('Ano', data.getFullYear())
console.log('Hora', data.getHours())
console.log('Min', data.getMinutes())
console.log('Seg', data.getSeconds())
console.log('ms', data.getMilliseconds())
console.log('dia semana', data.getDay())
console.log(Date.now()) // vai te dar a data em milessimos de segundos 
*/
function zeroAEsquerda(num){
    return num >= 10? num : `0${num}`
}


function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano}  ${hora}:${min}:${seg}`
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);