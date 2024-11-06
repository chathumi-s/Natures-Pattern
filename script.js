
window.onscroll = function() {
    var header = document.querySelector('.navigation_logo_container'); // Select the navbar
    var heroHeight = document.querySelector('.first_section_container').offsetHeight; // Get the height of the hero section

    if (window.scrollY > heroHeight) { // If scrolled past hero section
        header.classList.add('scroll-background'); // Add class to change background
    } else {
        header.classList.remove('scroll-background'); // Remove class if above hero section
    }
};
let currentSlide = 0; // Start from the first slide
const slides = document.querySelectorAll('.f_img video'); // Select all images
const totalSlides = slides.length; // Get the total number of slides

function showSlide(index) {
    const slideWidth = slides[0].clientWidth; // Get the width of a single slide
    const fImgContainer = document.querySelector('.f_img'); // Get the slider container
    fImgContainer.scroll({
        left: slideWidth * index, // Scroll to the current slide
        behavior: 'smooth' // Enable smooth scrolling behavior
    });
}

// Function to change the slide automatically
function changeSlide() {
    currentSlide = (currentSlide + 1) % totalSlides; // Increment slide index and loop back
    showSlide(currentSlide); // Show the updated slide
}

// Set an interval for automatic slide change every 5 seconds
setInterval(changeSlide, 8000); // Change slide every 5 seconds

// Initially show the first slide
showSlide(currentSlide);






/*const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navbar.classList.toggle("active");
});

const dots = document.querySelectorAll(".dot");
const videos = document.querySelectorAll(".media-slide");
const texts = document.querySelectorAll(".text-content");

function updateSlider(index) {
    dots.forEach(dot => dot.classList.remove("active"));
    videos.forEach(video => video.classList.remove("active"));
    texts.forEach(text => text.classList.remove("active"));

    dots[index].classList.add("active");
    videos[index].classList.add("active");
    texts[index].classList.add("active");
}

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => updateSlider(index));
});
*/