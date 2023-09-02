let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

let numeroEntrada = document.getElementById("numeroEntrada");
let mensaje = document.getElementById("mensaje");
let intento = document.getElementById("intento");
let intentos = 0;
function chequearResultado() {
    intentos ++;
    intento.textContent = intentos;
    let numeroIngresado = parseInt(numeroEntrada.value);

    if(numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){
        mensaje.textContent = "Por favor introduce un numero valido entre 1 a 100";
        return;
    }

    if(numeroIngresado === numeroAleatorio){
        mensaje.textContent = "¡Felicitaciones! ¡Adivinaste el numero!";
        mensaje.style.color = "green";
        numeroEntrada.disabled = true;
    }else if(numeroIngresado < numeroAleatorio){
        mensaje.textContent = "¡Más alto! El número es mayor al que dijiste";
        mensaje.style.color = "red";
    }else{
        mensaje.textContent = "¡Más bajo! El número es menor al que dijiste";
        mensaje.style.color = "red";
    }
}