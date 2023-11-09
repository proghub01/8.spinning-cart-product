const productContainer = document.getElementById('product-container');
const productImage = document.getElementById('product-image');
const slider = document.getElementById('myRange');

let currentImageIndex = 1;
const totalImages = 200;

slider.addEventListener('input', handleSliderChange);

function handleSliderChange() {
    currentImageIndex = parseInt(slider.value);
    const imagePath = `Source/${currentImageIndex}.png`;
    productImage.src = imagePath;
}