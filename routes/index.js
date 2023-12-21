const slideshowImages = [
  "/images/hospitalSearch.jpeg",
  "/images/services.jpeg",
  "/images/hospitalspage.jpeg"
];
let currentSlide = 0;

function showNextSlide() {
  const slideshow = document.querySelector('.slideshow');
  slideshow.innerHTML = `
    <img src="${slideshowImages[currentSlide]}" alt="Slide ${currentSlide + 1}">
  `;
  currentSlide = (currentSlide + 1) % slideshowImages.length;
}

// Change slide every 5 seconds (5000 milliseconds)
setInterval(showNextSlide, 5000);
