document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('sorteador').addEventListener('submit', function(evento){
        evento.preventDefault();
        let numeroMaximo = document.getElementById('num-max').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numRnd = Math.random() * numeroMaximo;
        numRnd = Math.floor(numRnd + 1);
        

        document.getElementById('resultado-valor').innerText = numRnd;
        document.querySelector('.resultado').style.display = 'block';
    })
})