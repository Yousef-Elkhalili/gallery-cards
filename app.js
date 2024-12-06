const slides = document.querySelectorAll('.slide')
const resetButton = document.querySelector('.reset');

for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearAllClasses()

        slide.classList.add('active')
    })
}

function clearAllClasses() {
    slides.forEach(slide => {
        slide.classList.remove('active')
    });
}

resetButton.addEventListener('click', clearAllClasses);