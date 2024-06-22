function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const burger = document.querySelector('.burger');
    navLinks.classList.toggle('open');
    burger.classList.toggle('open');
}


//slider
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
let totalSlides = slides.length;
const slideWidth = slides[0].clientWidth;
const autoSlideInterval = 3000; // Auto slide interval in milliseconds
let timer;

function moveSlider(direction) {
    const maxIndex = totalSlides - 4; // Always show 4 slides

    if (direction === 'next') {
        currentIndex = (currentIndex < maxIndex) ? currentIndex + 1 : 0;
    } else if (direction === 'prev') {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : maxIndex;
    }

    updateSlider();
}

function updateSlider() {
    const offset = -slideWidth * currentIndex;
    document.querySelector('.slider').style.transform = `translateX(${offset}px)`;
}

function startAutoSlide() {
    timer = setInterval(() => {
        moveSlider('next');
    }, autoSlideInterval);
}

function stopAutoSlide() {
    clearInterval(timer);
}

// Adjust totalSlides if images are dynamically added or removed
function adjustTotalSlides() {
    totalSlides = slides.length;
    moveSlider('next'); // Ensure slider position is updated
}

// Start auto sliding
startAutoSlide();

// Pause auto sliding on mouse over
document.querySelector('.slider-container').addEventListener('mouseenter', stopAutoSlide);

// Resume auto sliding on mouse leave
document.querySelector('.slider-container').addEventListener('mouseleave', startAutoSlide);

// Adjust slider on window resize (optional, if needed)
// Remove this if you want to keep 4 slides always
window.addEventListener('resize', adjustTotalSlides);
