let display = document.getElementById("numero-display");
const decremento = document.getElementById("btnDecremento");
const reset = document.getElementById("btnReset");
const incremento = document.getElementById("btnIncremento");

let contador = 0;
let intervalo;
display.innerText = contador;

function iniciarContador(operacao) {
    if(contador >= 999999){
        display.innerText = "Máximo!!!";
    }
    else if(contador <= -999999){
        display.innerText = "Mínimo!!!";
    }
    else {
        intervalo = setInterval(() => {
            contador += operacao;
            display.innerText = contador;
        }, 100);
    }
}

function pararContador() {
    clearInterval(intervalo);
}

incremento.addEventListener("mousedown", () => iniciarContador(1));
incremento.addEventListener("click", () => {
    if(contador >= 999999){
        return;
    }
    else {
        contador++;
        display.innerText = contador;
    }
})

decremento.addEventListener("mousedown", () => iniciarContador(-1));
decremento.addEventListener("click", () => {
    if(contador <= -999999){
        return;
    }
    else {
        contador--;
        display.innerText = contador;
    }
})

document.addEventListener("mouseup", pararContador);

reset.addEventListener("click", () => {
    contador = 0;
    display.innerText = contador;
});