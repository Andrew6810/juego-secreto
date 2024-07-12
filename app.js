let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);//value accede al valor actual del usuario devuelve un String
    

    if(numeroUsuario === numeroSecreto){//=== PARA ASEGURAR DE QUE LOS TIPOS DE DATOS TAMBIEN SON IGUALES
        asignarTextoElemento('p' , `Felicidades!!, Acertaste el número en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroUsuario > numeroSecreto){
            asignarTextoElemento('p' , 'El número secreto es MENOR :c');
        } else  {
            asignarTextoElemento('p' , 'El número secreto es MAYOR :c');
        }
            intentos++;
            limpiarCaja();
    }
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posible!');
    } else{
            //Si el nnumero generado esta en la lista
            if(listaNumerosSorteados.includes(numeroGenerado)){
                return generarNumeroSecreto;
            } else {
                listaNumerosSorteados.push(numeroGenerado);
                return generarNumeroSecreto;
            }
        }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego Del Número Secreto');
    asignarTextoElemento('p',`Ingrese un número del 1 a ${numeroMaximo}!:`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de número
    //Generar el número aleatorio
    //Inicializar el número de Intentos
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled', 'true'); // Deshabilitar el botón de nuevo juego
}

condicionesIniciales();