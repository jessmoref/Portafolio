function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
    
if (texto.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Encriptado con éxito";
    parrafo.textContent = "";
    muñeco.src = "./imgs/muneco.png";
} else {
    muñeco.src = "./imgs/muneco.png";
    tituloMensaje.textContent;
    parrafo.textContent = "Ingresa el texto que deseas encriptar";
    swal("Algo salio mal!", "Texto invalido!", "warning");
    }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Desencriptado con éxito";
        parrafo.textContent = "";
        muñeco.src = "./imgs/muneco.png";
    } else {
        muñeco.src = "./imgs/muneco.png";
        tituloMensaje.textContent;
        parrafo.textContent = "Ingresa el texto que deseas desencriptar";
        swal("Algo salio mal!", "Texto invalido!", "warning");
    }

}

/*Funcion para limpiar la caja de texto*/
function limpiarTexto() {
    document.getElementById("texto").value = "";
    window.location.reload();
}

/*Funcion para copiar*/
function copiarTexto(){
    let texto = document.getElementById("texto").value;
    const textArea = document.querySelector(".texto2");
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
    let contenido = document.getElementById('texto');

    contenido.select();
    contenido.setSelectionRange(0,99999);

    if (contenido.value == '') {
        tituloMensaje.textContent;
        parrafo.textContent = "Ingresa que copiar.";
        swal("Algo salio mal!", "Texto invalido!", "warning");
    } else{
                document.execCommand('copy');
                tituloMensaje.textContent = "C O P I A D O!";
                parrafo.textContent = "";
    }
}
