var p , sorteio
var i = 1

function sortear(params) {
    sorteio = Math.floor(Math.random()*21);
    console.log(sorteio);
}

function facil(params) {
    p = 5
    console.log(p);
}

function medio(params) {
    p = 3
    console.log(p);
}

function dificil(params) {
    p = 1
    console.log(p);
}

function rodar(params) {
    var numero 
    numero = document.getElementById('numero').value;

        if (i <= p) {

            if (numero == sorteio) {
            window.location.href = 'win.html'
            i++
            console.log(i);
            }
            else if(numero < sorteio){
            document.getElementById('resp').innerText = 'Um poquinho maior';
            i++
            console.log(i)
            }
            else{
            document.getElementById('resp').innerText = 'Um poquinho menor';
            i++
            console.log(i)
            }
        }

        else{
        window.location.href = 'lol.html'
        }
}