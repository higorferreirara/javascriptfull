const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

iniciar.addEventListener('click', function(event) {
    relogio.innerHTML = setInterval(mostrarHora())
});

pausar.addEventListener('click', function(event) {
    alert('cliquei no pausar');
});

zerar.addEventListener('click', function(event) {
    alert('cliquei no zerar');
});

function mostrarHora() {
    let data = new Date();

    return data.toLocaleDateString('pt-br', {
        hour12: false
    })
}

