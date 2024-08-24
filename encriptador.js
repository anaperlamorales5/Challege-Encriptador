function encriptar() {
    const texto = document.getElementById("texto").value;
    const tituloMensaje = document.getElementById("titulo-mensaje");
    const parrafo = document.getElementById("parrafo");
    const muñeco = document.getElementById("muñeco");
    const respuesta = document.querySelector(".evaluar");
  
    const textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
    

    if (texto.length != 0) {
      if(texto !== texto.toLowerCase()){
        tituloMensaje.textContent = "El texto debe ser todo en minúscula";
        alert('El texto debe ser todo en minúscula')
      } else {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
        muñeco.src = "imagenes/3652.jpg";   
      }
    
    } else {
      tituloMensaje.textContent = "El campo de texto no debe estar vacio";
      alert('El campo de texto está vacío')
    }
    respuesta.innerHTML = textoCifrado
        
  }
  
  function desencriptar() {
    const texto = document.getElementById("texto").value;
    const tituloMensaje = document.getElementById("titulo-mensaje");
    const parrafo = document.getElementById("parrafo");
    const muñeco = document.getElementById("muñeco");
    const respuesta = document.querySelector("evaluar");
  
    let textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");


      if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        muñeco.src = "imagenes/3652.jpg";     
      }
      
  }
  
  function copiarContenido() {
    const button = document.getElementById("btnCopiar");
    const respuestacopiada = document.getElementById("respuestacopiada");
    const copyToClipboard = async str => {
    try {
      await navigator.clipboard.writeText(str);
      alert("Mensaje copiado");
    } catch (error) {
       console.log(error);
    }
}

    button.addEventListener("click", () => {
    copyToClipboard(respuestacopiada.textContent);  
})
}