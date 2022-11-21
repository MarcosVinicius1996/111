var distancia, km

function divideBy(){
    distancia= parseFloat(frdados.txdistancia.value.replace(",","."));
    km= parseFloat(frdados.txquilometros.value.replace(",","."));
    document.getElementById("result").innerHTML = distancia / km;
    document.getElementById("imagem2").src="imagens/viagem.png";
}