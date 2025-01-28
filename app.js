let amigos = [];

// Función para agregar un nombre al array y actualizar la lista en pantalla
function agregarAmigo() {
    const inputNombre = document.getElementById("amigo"); // Obtener el valor del campo de texto
    const nombre = inputNombre.value.trim(); // Eliminar espacios al inicio y al final

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Agregar el nombre al array
    amigos.push(nombre);

    // Actualizar la lista visible
    actualizarListaAmigos();

    // Limpiar el campo de texto
    inputNombre.value = "";
    inputNombre.focus();
}

// Función para actualizar la lista de nombres en pantalla
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpiar la lista actual

    // Recorrer el array y agregar cada nombre como un elemento de lista
    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para realizar el sorteo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("La lista está vacía. Agrega nombres antes de realizar el sorteo.");
        return;
    }

    // Seleccionar un nombre al azar
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en pantalla
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `🎉 El amigo secreto es: <strong>${amigoSorteado}</strong> 🎉`;
}
