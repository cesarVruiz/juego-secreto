let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto)
{
    let elementoHTML = document.querySelector(elemento); //h1 es el titulo que se muestra al usuario, tambien llamado elemento
    elementoHTML.innerHTML = texto; 
    return;
}

function verificarIntento() //esta funcion es llamada desde el codigo HTML
{
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(typeof(numeroDeUsuario));
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroDeUsuario);
    console.log(numeroDeUsuario === numeroSecreto); //el triple = funciona para comparar el valor y el tipo del dato
   
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //el usuario no acertó 
        if(numeroDeUsuario > numeroSecreto)
            asignarTextoElemento('p', 'El numero secreto es menor');
        else
            asignarTextoElemento('p', 'El numero secreto es mayor');
        intentos ++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja()
{
    document.querySelector('#valorUsuario').value='';
    
}

function generaNumeroSecreto()
{
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //Si ya sorteamos todos los numeros
    if(listaNumerosSorteados.legth == numeroMaximo)
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros');
    else
        if(listaNumerosSorteados.includes(numeroGenerado))
            return generaNumeroSecreto;
        else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado
        }
   
}

function condicionesIniciales()
{
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Ingresa un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generaNumeroSecreto;
    intentos = 1;

}

function reiniciarJuego()
{
    //limpiarCaja
    limpiarCaja();
    //Indicar el intervalo de 1 al 10
    //generarNumeroSecreto
    //inicializar numero de Intentos
    condicionesIniciales();
    //deshabilitar boton nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}



condicionesIniciales();