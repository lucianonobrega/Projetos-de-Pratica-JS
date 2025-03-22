document.getElementById("calcular").addEventListener("click", () => {

    let inputValorInicial = parseFloat(document.getElementById("inputValorInicial").value);
    let inputValorMensal = parseFloat(document.getElementById("inputValorMensal").value);
    let inputTaxaJuros = parseFloat(document.getElementById("inputTaxaJuros").value);
    let inputPeriodo = parseInt(document.getElementById("inputPeriodo").value);
    let displayResultado = document.getElementById("displayResultado");    

    if (isNaN(inputValorInicial) || inputValorInicial < 0) {
        alert("O valor inicial deve ser um número positivo!");
        return;
    }

    else if (isNaN(inputValorMensal) || inputValorMensal < 0) {
        alert("O valor mensal deve ser um número positivo!");
        return;
    }

    else if (isNaN(inputTaxaJuros) || inputTaxaJuros <= 0) {
        alert("A taxa de juros deve ser um número maior que zero!");
        return;
    }

    else if (isNaN(inputPeriodo) || inputPeriodo <= 0) {
        alert("O período deve ser um número maior que zero!");
        return;
    }

    else {
        let r = inputTaxaJuros / 100;

        let t = inputPeriodo;

        let montante = inputValorInicial * Math.pow(1 + r / 12, t * 12) + 
        inputValorMensal * ((Math.pow(1 + r / 12, t * 12) - 1) / (r / 12));

        displayResultado.innerText = `R$ ${montante.toFixed(2)}`;
    }
});

document.getElementById("limpar").addEventListener("click", () => {
    document.getElementById("resultado").innerText = " ";
})
