const sliders = document.getElementsByTagName('img');
const prevButton = document.getElementById('prev');
prevButton.style.fontSize = '18px';
prevButton.style.background = 'whialicebluete';
prevButton.style.borderRadius = '5px';
prevButton.style.width = '100px';
prevButton.style.margin = '5px';
const nextButton = document.getElementById('next');
nextButton.style.fontSize = '18px';
nextButton.style.background = 'aliceblue';
nextButton.style.borderRadius = '5px';
nextButton.style.width = '100px';
nextButton.style.margin = '5px';

let images = 0;

function sliderContainer(imagesChange){
    for(let slider of sliders){
    slider.style.width = '100%';
    slider.style.height = '670px';  
    slider.style.display = 'none';  
    }
    sliders[imagesChange].style.display = 'inline-block';
}
sliderContainer(images);

function nextSlider(){
    if(images === sliders.length - 1) {
        nextButton.style.display = 'none';
    } else {
        images++;
        prevButton.style.display = 'inline-block';  
    }
    sliderContainer(images);
}

nextButton.addEventListener('click', nextSlider);

function prevSlider(){
    if(images === 0){
        prevButton.style.display = 'none';
    } else {
        images--;
        nextButton.style.display = 'inline-block'; 
    }
    sliderContainer(images);
}

prevButton.addEventListener('click', prevSlider);