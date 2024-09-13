function updateCountdown() {
    const targetDate = new Date('2026-08-14T23:59:59-03:00');
    const now = new Date();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

function rotateCarousel(direction) {
    const items = document.querySelectorAll('.carousel-item');
    const activeItem = document.querySelector('.carousel-item.active');
    let nextItem, prevItem;

    if (direction === 'next') {
        nextItem = activeItem.nextElementSibling || items[0];
        prevItem = activeItem;
    } else {
        nextItem = activeItem;
        prevItem = activeItem.previousElementSibling || items[items.length - 1];
    }

    items.forEach(item => item.classList.remove('prev', 'active', 'next'));

    if (direction === 'next') {
        activeItem.classList.add('prev');
        nextItem.classList.add('active');
        const newNextItem = nextItem.nextElementSibling || items[0];
        newNextItem.classList.add('next');
    } else {
        prevItem.classList.add('active');
        activeItem.classList.add('next');
        const newPrevItem = prevItem.previousElementSibling || items[items.length - 1];
        newPrevItem.classList.add('prev');
    }

    // Reinicia o temporizador automático
    clearInterval(carouselInterval);
    carouselInterval = setInterval(() => rotateCarousel('next'), 5000);
}

setInterval(updateCountdown, 1000);
let carouselInterval = setInterval(() => rotateCarousel('next'), 5000);
updateCountdown(); // Atualiza imediatamente ao carregar a página

// Configuração inicial do carrossel
const items = document.querySelectorAll('.carousel-item');
items[items.length - 1].classList.add('prev');