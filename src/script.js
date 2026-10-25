// copyright date
const copyrightDate = document.getElementById('copyrightDate');
copyrightDate.textContent = '2023-2026';

// gallery switcher
const digital = document.getElementById('digital');
const traditional = document.getElementById('traditional');
const photography = document.getElementById('photography');
const imageManipulation = document.getElementById('image-manipulation');
const graphicDesign = document.getElementById('graphic-design');
const fanArt = document.getElementById('fan-art');
const nsfwDigital = document.getElementById('nsfw-digital');
const nsfwTraditional = document.getElementById('nsfw-traditional');

const selectGallery = document.getElementById('galleries');

function switchGallery(selected) {
    if (selected === 0) {
        digital.style.display = 'block';
    } else if (selected === 1) {
        traditional.style.display = 'block';
    } else if (selected === 2) {
        photography.style.display = 'block';
    } else if (selected === 3) {
        imageManipulation.style.display = 'block';
    } else if (selected === 4) {
        graphicDesign.style.display = 'block';
    } else if (selected === 5) {
        fanArt.style.display = 'block';
    } else if (selected === 6) {
        nsfwDigital.style.display = 'block';
    } else if (selected === 7) {
        nsfwTraditional.style.display = 'block';
    }
}

function resetGalleries() {
    digital.style.display = 'none';
    traditional.style.display = 'none';
    photography.style.display = 'none';
    imageManipulation.style.display = 'none';
    graphicDesign.style.display = 'none';
    fanArt.style.display = 'none';
    nsfwDigital.style.display = 'none';
    nsfwTraditional.style.display = 'none';
}

function artGallery() {
    let selectedValue = selectGallery.value;
    resetGalleries();
    switchGallery(parseInt(selectedValue));
}

selectGallery.addEventListener('change', () => {
    artGallery();
});

window.addEventListener('DOMContentLoaded', () => {
    artGallery();
});
