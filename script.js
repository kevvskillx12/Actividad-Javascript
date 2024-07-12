function verificarEdad() {
    const edad = document.getElementById('edad').value;
    if (edad >= 18) {
        alert("Ya puedes conducir.");
    } else {
        alert("Aún no puedes conducir.");
    }
}
function calificar() {
    const nota = document.getElementById('nota').value;
    let calificacion = '';

    if (nota >= 0 && nota < 3) {
        calificacion = 'Muy deficiente';
    } else if (nota >= 3 && nota < 5) {
        calificacion = 'Insuficiente';
    } else if (nota >= 5 && nota < 6) {
        calificacion = 'Suficiente';
    } else if (nota >= 6 && nota < 7) {
        calificacion = 'Bien';
    } else if (nota >= 7 && nota < 9) {
        calificacion = 'Notable';
    } else if (nota >= 9 && nota <= 10) {
        calificacion = 'Sobresaliente';
    } else {
        calificacion = 'Nota inválida';
    }

    alert(calificacion);
}
let cadenas = [];
function agregarCadena() {
    const cadena = document.getElementById('cadena').value;
    if (cadena) {
        cadenas.push(cadena);
        document.getElementById('cadena').value = '';
    } else {
        alert('Por favor, escribe una cadena de texto.');
    }
}

function mostrarCadenas() {
    if (cadenas.length > 0) {
        alert(cadenas.join('-'));
    } else {
        alert('No hay cadenas de texto agregadas.');
    }
}

function calcularLetraDNI() {
    const dni = document.getElementById('dni').value;
    const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';

    if (dni >= 0 && dni <= 99999999) {
        const letra = letras.charAt(dni % 23);
        alert(`La letra de tu DNI es: ${letra}`);
    } else {
        alert('Número de DNI inválido.');
    }
}
