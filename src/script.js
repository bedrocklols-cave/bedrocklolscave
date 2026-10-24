// copyright date
const copyrightDate = document.getElementById("copyrightDate");
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

function showGallery(number) {
    if (number === 0) {
        digital.style.display = 'block';
        traditional.style.display = 'none';
        photography.style.display = 'none';
        imageManipulation.style.display = 'none';
        graphicDesign.style.display = 'none';
        fanArt.style.display = 'none';
        nsfwDigital.style.display = 'none';
        nsfwTraditional.style.display = 'none';
    } else if (number === 1) {
        digital.style.display = 'none';
        traditional.style.display = 'block';
        photography.style.display = 'none';
        imageManipulation.style.display = 'none';
        graphicDesign.style.display = 'none';
        fanArt.style.display = 'none';
        nsfwDigital.style.display = 'none';
        nsfwTraditional.style.display = 'none';
    } else if (number === 2) {
        digital.style.display = 'none';
        traditional.style.display = 'none';
        photography.style.display = 'block';
        imageManipulation.style.display = 'none';
        graphicDesign.style.display = 'none';
        fanArt.style.display = 'none';
        nsfwDigital.style.display = 'none';
        nsfwTraditional.style.display = 'none';
    } else if (number === 3) {
        digital.style.display = 'none';
        traditional.style.display = 'none';
        photography.style.display = 'none';
        imageManipulation.style.display = 'block';
        graphicDesign.style.display = 'none';
        fanArt.style.display = 'none';
        nsfwDigital.style.display = 'none';
        nsfwTraditional.style.display = 'none';
    } else if (number === 4) {
        digital.style.display = 'none';
        traditional.style.display = 'none';
        photography.style.display = 'none';
        imageManipulation.style.display = 'none';
        graphicDesign.style.display = 'block';
        fanArt.style.display = 'none';
        nsfwDigital.style.display = 'none';
        nsfwTraditional.style.display = 'none';
    } else if (number === 5) {
        digital.style.display = 'none';
        traditional.style.display = 'none';
        photography.style.display = 'none';
        imageManipulation.style.display = 'none';
        graphicDesign.style.display = 'none';
        fanArt.style.display = 'block';
        nsfwDigital.style.display = 'none';
        nsfwTraditional.style.display = 'none';
    } else if (number === 6) {
        digital.style.display = 'none';
        traditional.style.display = 'none';
        photography.style.display = 'none';
        imageManipulation.style.display = 'none';
        graphicDesign.style.display = 'none';
        fanArt.style.display = 'none';
        nsfwDigital.style.display = 'block';
        nsfwTraditional.style.display = 'none';
    } else if (number === 7) {
        digital.style.display = 'none';
        traditional.style.display = 'none';
        photography.style.display = 'none';
        imageManipulation.style.display = 'none';
        graphicDesign.style.display = 'none';
        fanArt.style.display = 'none';
        nsfwDigital.style.display = 'none';
        nsfwTraditional.style.display = 'block';
    }
}
