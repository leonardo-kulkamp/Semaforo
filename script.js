// Seleciona os elementos das luzes 
const luzVermelha = document.getElementById("vermelho");
const luzAmarela = document.getElementById("amarelo");
const luzVerde = document.getElementById("verde");

// Botoẽs

const btnVermelho = document.getElementById("btnVermelho");
const btnAmarelo = document.getElementById("btnAmarelo");
const btnVerde = document.getElementById("btnVerde");
const btnAutomático = document.getElementById("btnAutomático");
const btnParar = document.getElementById("btnParar");

// Variável para o modo automático
let intervalo;

function limpar(){
    luzVermelha.className = 'luz';
    luzAmarela.className = 'luz';
    luzVerde.className = 'luz';
}

function acenderVermelho(){
    limpar();
    luzVermelha.classList.add("acesa","vermelha");
}

function acenderAmarelo(){
    limpar();
    luzAmarela.classList.add("acesa", "amarela")
}

function acenderVerde(){
    limpar();
    luzVerde.classList.add("acesa","verde")
}

function modoAutomatico(){
    limpar();
    let estado = 0;
    intervalo = setInterval(()=>{
        if(estado === 0)acenderVermelho();
        else if (estado === 1)acenderAmarelo();
        else if (estado === 2)acenderVerde();
        estado = (estado + 1) % 3;
    },1000)
}

function parar(){
    clearInterval(intervalo);
    limpar();
}
btnVermelho.onclick = acenderVermelho;
btnAmarelo.onclick = acenderAmarelo;
btnVerde.onclick = acenderVerde;
btnAutomático.onclick = modoAutomatico;
btnParar.onclick = parar;
 / VALEU CARA

