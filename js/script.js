// script.js
const sliderImages = document.querySelectorAll('.slider-container img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;

function showImage(index) {
  sliderImages.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + sliderImages.length) % sliderImages.length;
  showImage(currentIndex);
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % sliderImages.length;
  showImage(currentIndex);
});

// Initialize with the first image active
showImage(currentIndex);
