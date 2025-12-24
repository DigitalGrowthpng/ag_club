const slides = [
    {
        image: 'images/squid.webp',
        title: 'Squid AG Games 2',
        description: '"Squid AG Games 2", un evento inspirado en el Squid Craft Games 1 y 2 de Eufonia Studio y la serie de Netflix SquidGame. Son 8 juegos, uno quedará en pie y será el ganador.',
        link: 'https://ko-fi.com/s/805d89cb11',
    },
    {
        image: 'images/hoyo.webp',
        title: 'El Hoyo',
        description: '"El Hoyo" un evento inspirado en la pelicula de Netflix, capacidad de 120 jugadores (60 por cada hoyo), sistema automatico (sencillo), lobby de espera con parkour. Extra: Tab 🌟',
        link: 'https://ko-fi.com/s/cfcc9716be', 
    },
    {
        image: 'images/farm.webp',
        title: 'Farm',
        description: '"The Farm" un evento inspirado en un tnt tag en la granja, partidas dinamicas entre pollitos y huevitos, rondas customizables (tiempo, cantidad, modos, etc), lobby de espera con parkour y portales para la entrada al minijuego. Extras: Tab, scoreboard, hud 🌟',
        link: 'https://ko-fi.com/s/9396b14fc7',
    }
];

let currentIndex = 0;
let autoPlayInterval; // Variable para guardar el temporizador

function initCarousel() {
    const dotsContainer = document.getElementById('dots-container');
    dotsContainer.innerHTML = '';
    
    slides.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.onclick = () => {
            currentIndex = index;
            updateDOM();
            resetAutoPlay(); // Reiniciar tiempo si el usuario hace clic
        };
        dotsContainer.appendChild(dot);
    });
    
    updateDOM();
    startAutoPlay(); // Iniciar el pase automático
}

function changeSlide(direction) {
    currentIndex += direction;
    if (currentIndex >= slides.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = slides.length - 1;
    updateDOM();
    resetAutoPlay(); // Reiniciar tiempo si el usuario usa las flechas
}

function updateDOM() {
    const slide = slides[currentIndex];
    
    // Cambia imagen
    document.getElementById('slide-bg').style.backgroundImage = `url('${slide.image}')`;
    
    // Cambia textos
    document.getElementById('slide-title').innerText = slide.title;
    document.getElementById('slide-desc').innerText = slide.description;
    
    // Cambia el link del <a>
    document.getElementById('slide-link').href = slide.link;

    // Actualiza puntos
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

// FUNCIONES DE AUTO-PLAY
function startAutoPlay() {
    // 5000 milisegundos = 5 segundos
    autoPlayInterval = setInterval(() => {
        currentIndex++;
        if (currentIndex >= slides.length) currentIndex = 0;
        updateDOM();
    }, 5000); 
}

function resetAutoPlay() {
    clearInterval(autoPlayInterval); // Detener el tiempo actual
    startAutoPlay(); // Volver a empezar el contador de 5 segundos
}

document.addEventListener('DOMContentLoaded', initCarousel);