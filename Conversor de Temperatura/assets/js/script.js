let btnConverter = document.getElementById("btnConverter");
let temperaturaResultado = document.getElementById("temperaturaResultado");
let container = document.getElementById("container");
let display = document.getElementById("display");
let labelGraus = document.getElementById("labelGraus");
let labelConverterPara = document.getElementById("labelConverterPara");
let cor;

function mudarTema(cor){
    display.style.backgroundColor = cor;
    container.style.borderColor = cor;
    btnConverter.style.backgroundColor = cor;
    btnConverter.style.borderColor = cor;
    labelGraus.style.color = cor;
    labelConverterPara.style.color = cor;
}

btnConverter.addEventListener("click", () => {
    let graus = Number(document.getElementById("graus").value);
    let select1 = document.getElementById("opcoes1").value;
    let select2 = document.getElementById("opcoes2").value;

    if(isNaN(graus) || graus === "") {
        window.alert("Digite um valor válido para conversão!");
        return;
    }

    if(select1 === "C" && select2 === "F"){
        let celsiusFahrenheit = (graus * 1.8) + 32;
        temperaturaResultado.innerText = `${celsiusFahrenheit.toFixed(2)}°F`;
        cor = "#c50000";
        mudarTema(cor);
    }
    
    else if(select1 === "C" && select2 === "K"){
        let celsiusKelvin = graus + 273.15;
        temperaturaResultado.innerText = `${celsiusKelvin.toFixed(2)}K`;
        cor = "#3262ff";
        mudarTema(cor);
    }

    else if(select1 === "F" && select2 === "C"){
        let fahrenheitCelsius = (graus - 32) / 1.8;
        temperaturaResultado.innerText = `${fahrenheitCelsius.toFixed(2)}°C`;
        cor = "#00c7b6";
        mudarTema(cor);
    }

    else if(select1 === "F" && select2 === "K"){
        let fahrenheitKelvin = (graus - 32) * (5 / 9) + 273.15;
        temperaturaResultado.innerText = `${fahrenheitKelvin.toFixed(2)}K`;
        cor = "#3262ff";
        mudarTema(cor);
    }

    else if(select1 === "K" && select2 === "C"){
        let kelvinCelsius = graus - 273.15;
        temperaturaResultado.innerText = `${kelvinCelsius.toFixed(2)}°C`;
        cor = "#00c7b6";
        mudarTema(cor);
    }

    else if(select1 === "K" && select2 === "F"){
        let kelvinFahrenheit = (graus - 273.15) * 1.8 + 32;
        temperaturaResultado.innerText = `${kelvinFahrenheit.toFixed(2)}°F`;
        cor = "#c50000";
        mudarTema(cor);
    }

    else if(select1 === select2) {
        window.alert("Selecione unidades diferentes para conversão!");
        return;
    }
});