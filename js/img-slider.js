// Function to initialize all sliders
function initializeSliders() {
    document.querySelectorAll('.slider-container').forEach(container => {
        const slides = container.querySelectorAll('.slider-img');
        const leftArrow = container.querySelector('.left-arrow');
        const rightArrow = container.querySelector('.right-arrow');
        
        if (slides.length > 0) {
            slides[0].classList.add('active'); // Show the first slide initially
            
            // Hide arrows if only one slide is present
            if (slides.length === 1) {
                leftArrow.style.display = 'none';
                rightArrow.style.display = 'none';
            }
        }
    });
}

// Function to go to the next slide
function nextSlide(sliderClass) {
    const slider = document.querySelector(`.${sliderClass}`);
    if (!slider) return;

    const slides = slider.querySelectorAll('.slider-img');
    const activeSlide = slider.querySelector('.slider-img.active');
    const leftArrow = slider.querySelector('.left-arrow');
    const rightArrow = slider.querySelector('.right-arrow');
    
    if (!activeSlide) return;

    const currentIndex = Array.from(slides).indexOf(activeSlide);
    activeSlide.classList.remove('active');

    const nextIndex = (currentIndex + 1) % slides.length;
    slides[nextIndex].classList.add('active');

    // Handle arrow visibility based on the current state
    if (slides.length === 1) {
        leftArrow.style.display = 'none';
        rightArrow.style.display = 'none';
    } else {
        leftArrow.style.display = 'block';
        rightArrow.style.display = 'block';
    }
}

// Function to go to the previous slide
function prevSlide(sliderClass) {
    const slider = document.querySelector(`.${sliderClass}`);
    if (!slider) return;

    const slides = slider.querySelectorAll('.slider-img');
    const activeSlide = slider.querySelector('.slider-img.active');
    const leftArrow = slider.querySelector('.left-arrow');
    const rightArrow = slider.querySelector('.right-arrow');
    
    if (!activeSlide) return;

    const currentIndex = Array.from(slides).indexOf(activeSlide);
    activeSlide.classList.remove('active');

    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    slides[prevIndex].classList.add('active');

    // Handle arrow visibility based on the current state
    if (slides.length === 1) {
        leftArrow.style.display = 'none';
        rightArrow.style.display = 'none';
    } else {
        leftArrow.style.display = 'block';
        rightArrow.style.display = 'block';
    }
}

// Initialize sliders on page load
document.addEventListener('DOMContentLoaded', initializeSliders);
