let matriz_codigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

/*Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

function encriptar(mensaje_a_encriptar) {
    mensaje_a_encriptar = mensaje_a_encriptar.toLowerCase();
    for (let i = 0; i < matriz_codigo.length; i++) {
        if (mensaje_a_encriptar.includes(matriz_codigo[i][0])) {
            mensaje_a_encriptar = mensaje_a_encriptar.replaceAll(matriz_codigo[i][0], matriz_codigo[i][1]);
        }
    }
    return mensaje_a_encriptar;
}

function codificar_enviar() {
    const mensajeInput = document.querySelector('.texto_entrada_campo');
    if (mensajeInput) {
        const mensaje = mensajeInput.value;
        const mensajeCodificado = encriptar(mensaje);
        window.location.href = `mensaje_enviado.html?mensaje=${encodeURIComponent(mensajeCodificado)}`;
    } else {
        console.error('Elemento con clase "texto_entrada_campo" no encontrado.');
    }
}

function obtenerMensajeDeURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('mensaje');
}

document.addEventListener("DOMContentLoaded", function () {
    const mensajeCodificado = obtenerMensajeDeURL();
    if (mensajeCodificado) {
        const textoSalidaCampo = document.querySelector('.texto_salida_campo');
        if (textoSalidaCampo) {
            textoSalidaCampo.value = decodeURIComponent(mensajeCodificado);
        } else {
            console.error('Elemento con clase "texto_salida_campo" no encontrado.');
        }
    }
});

function desencriptar(mensaje_a_desencriptar) {
    mensaje_a_desencriptar = mensaje_a_desencriptar.toLowerCase();
    for (let i = 0; i < matriz_codigo.length; i++) {
        if (mensaje_a_desencriptar.includes(matriz_codigo[i][1])) {
            mensaje_a_desencriptar = mensaje_a_desencriptar.replaceAll(matriz_codigo[i][1], matriz_codigo[i][0]);
        }
    }
    return mensaje_a_desencriptar;
}

function descodificar_enviar() {
    const mensajeInput = document.querySelector('.texto_entrada_campo');
    if (mensajeInput) {
        const mensaje = mensajeInput.value;
        const mensaje_descodificado = desencriptar(mensaje);
        window.location.href = `mensaje_enviado.html?mensaje=${encodeURIComponent(mensaje_descodificado)}`;
    } else {
        console.error('Elemento con clase "texto_entrada_campo" no encontrado.');
    }
}

function obtenerMensajeDeURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('mensaje');
}

document.addEventListener("DOMContentLoaded", function () {
    const mensaje_descodificado = obtenerMensajeDeURL();
    if (mensaje_descodificado) {
        const textoSalidaCampo = document.querySelector('.texto_salida_campo');
        if (textoSalidaCampo) {
            textoSalidaCampo.value = decodeURIComponent(mensaje_descodificado);
        } else {
            console.error('Elemento con clase "texto_salida_campo" no encontrado.');
        }
    }
});


console.table(matriz_codigo);
