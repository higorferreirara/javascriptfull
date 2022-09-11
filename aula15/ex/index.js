const numero = Number(prompt('Digite um número:'))
const numerotitulo = document.getElementById('numero-titulo')
const texto = document.getElementById('texto')

numerotitulo.innerHTML = numero
texto.innerHTML = `<p>Seu número + 2 é: <strong>${numero + 2}</strong>.</p>`
texto.innerHTML += `<p>A raiz quadrada do seu número é: <strong>${numero ** 0.5}</strong></p>`
texto.innerHTML += `<p>${numero} é um número inteiro? <strong>${Number.isInteger(numero)}</strong></p>`
texto.innerHTML += `<p>È NaN: <strong>${Number.isNaN(numero)}</strong></p>`
texto.innerHTML += `<p>Arredondando para Baixo: <strong>${Math.floor(numero)}</strong></p>`
texto.innerHTML += `<p>Arredondando para cima: <strong>${Math.ceil(numero)}</strong></p>`
texto.innerHTML += `<p>Com duas casas decímais: <strong>${numero.toFixed(2)}</strong></p>`
