// Carrusel 

// Función para iniciar el carrusel automático
function startAutoSlide() {
    intervalId = setInterval(function () {
        fntExecuteSlide('next');
    }, 2000); // Cambia este valor para ajustar el tiempo entre slides (en milisegundos)
}

// Función para detener el carrusel automático
function stopAutoSlide() {
    clearInterval(intervalId);
}


// carrusel
// Función para ejecutar el carrusel
function fntExecuteSlide(side) {
    let parentTarget = document.getElementById('slider');
    let elements = parentTarget.getElementsByTagName('li');
    let curElement, nextElement;

    // Encontrar el índice del slide actual
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].style.opacity == 1) {
            curElement = i;
            break;
        }
    }

    // Calcular el siguiente slide
    if (side == 'prev' || side == 'next') {
        nextElement = (side == 'prev') ? (curElement == 0 ? elements.length - 1 : curElement - 1) : (curElement == elements.length - 1 ? 0 : curElement + 1);
    } else {
        nextElement = side;
        side = (curElement > nextElement) ? 'prev' : 'next';
    }

    // Actualizar la visualización del slide
    let elementSel = document.querySelector('.listslider').getElementsByTagName('a');
    elementSel[curElement].classList.remove('item-select-slid');
    elementSel[nextElement].classList.add('item-select-slid');
    elements[curElement].style.opacity = 0;
    elements[curElement].style.zIndex = 0;
    elements[nextElement].style.opacity = 1;
    elements[nextElement].style.zIndex = 1;
}

// Inicia el carrusel automático al cargar la página
window.onload = function () {
    if (document.querySelector('#container-slider')) {
        startAutoSlide();
    }
};

// Agrega estas líneas al final de tu JavaScript para controlar el carrusel automático cuando se navega manualmente
document.querySelector('#container-slider').addEventListener('mouseenter', stopAutoSlide);
document.querySelector('#container-slider').addEventListener('mouseleave', startAutoSlide);