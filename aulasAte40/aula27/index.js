// ( condiçao )? Valor verdadeiro : valor falso

const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Normal';


const corUsuario = null;
const corPadrao = corUsuario || 'preta';

console.log(nivelUsuario, corPadrao);

//if (pontuacaoUsuario >= 1000) {
//    console.log('Usuário VIP');
//} else {
//   console.log('Usuário Normal')
//}

