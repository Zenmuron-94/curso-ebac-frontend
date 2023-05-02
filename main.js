const form = document.getElementById("form-comparar");


form.addEventListener('submit', function(e){

    e.preventDefault();
    var valorA = parseInt(document.getElementById("numA").value);
    var valorB = parseInt(document.getElementById("numB").value);
    const msgvalida = `Valor de B: <b>${numB.value}</b> é maior que Valor de A: <b>${numA.value}</b>`;
    const msginvalida =`Valor de B: <b>${numB.value}</b> é menor que valor de A: <b>${numA.value}</b>`;
    const msgiguais = `Valor de B: <b>${numB.value}</b> e valor de A: <b>${numA.value}</b> são iguais`;
    if(valorA == valorB){
        const containermsgIguais = document.querySelector(".iguais-message");
        containermsgIguais.innerHTML = msgiguais;
        containermsgIguais.style.display = "block";
        const containerMsgValida = document.querySelector(".valid-message");
        containerMsgValida.innerHTML = msgvalida;
        containerMsgValida.style.display = "none";
        const containerMsgInvalida = document.querySelector(".invalid-message");
        containerMsgInvalida.innerHTML = msginvalida;
        containerMsgInvalida.style.display = "none";
        numA.value ="";
        numB.value ="";
    } else if (valorA < valorB){
        const containerMsgValida = document.querySelector(".valid-message");
        containerMsgValida.innerHTML = msgvalida;
        containerMsgValida.style.display = "block";
        const containermsgIguais = document.querySelector(".iguais-message");
        containermsgIguais.innerHTML = msgiguais;
        containermsgIguais.style.display = "none";
        const containerMsgInvalida = document.querySelector(".invalid-message");
        containerMsgInvalida.innerHTML = msginvalida;
        containerMsgInvalida.style.display = "none";
        numA.value ="";
        numB.value ="";
    }else{
        const containerMsgInvalida = document.querySelector(".invalid-message");
        containerMsgInvalida.innerHTML = msginvalida;
        containerMsgInvalida.style.display = "block";
        const containermsgIguais = document.querySelector(".iguais-message");
        containermsgIguais.innerHTML = msgiguais;
        containermsgIguais.style.display = "none";
        const containerMsgValida = document.querySelector(".valid-message");
        containerMsgValida.innerHTML = msgvalida;
        containerMsgValida.style.display = "none";
        numA.value ="";
        numB.value ="";
    }
})