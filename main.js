window.onload = main;
// window.addEventListener('load', main)
// let activeImageIndex = 0;

/** Start of the program */
function main() {
    startSlideshowAnimation()
}

function startSlideshowAnimation() {
    setInterval(changeActiveImage, 2000);
    // changeActiveImage();
}

function changeActiveImage() {
    const images = document.querySelectorAll('.slideshow-container > img');
    
    for (let i = 0; i < images.length; i++) {
        if (images[i].classList.contains('show')) {
            
            images[i].classList.remove('show');
            
            
            let nextIndex = i + 1;

            if (nextIndex >= images.length) {
                nextIndex = 0;
            }

            images[nextIndex].classList.add('show');

            break;
        }
    }

    
}