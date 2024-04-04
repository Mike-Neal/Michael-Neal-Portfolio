$(document).ready(function () {
    $('.navbar-toggler').click(function () {
        $('.navbar-collapse').toggleClass('show');
    });
});

const nflwcLink = document.createElement('a');
const nflwcLogo = document.createElement('img');

nflwcLink.href = 'https://mike-neal.github.io/NFL-Weather-Checker/';
nflwcLogo.src = './assets/img/nflLogo.jpg';
nflwcLogo.alt = 'NFL Logo';

nflwcLink.appendChild(nflwcLogo);
document.getElementById('nflwc').appendChild(nflwcLink);
nflwcLink.addEventListener('click', function (event) {
    event.preventDefault();
    window.open(this.href, '_blank');
});

const kcmLink = document.createElement('a');
const kcmLogo = document.createElement('img');

kcmLink.href = 'https://kcm-app-342e981adbd9.herokuapp.com/';
kcmLogo.src = './assets/img/kcmPic.jpeg';
kcmLogo.alt = 'KCM Logo';

kcmLink.appendChild(kcmLogo);
document.getElementById('kcm').appendChild(kcmLink);
kcmLink.addEventListener('click', function (event) {
    event.preventDefault();
    window.open(this.href, '_blank');
});

const amrapLink = document.createElement('a');
const amrapLogo = document.createElement('img');

amrapLink.href = 'https://amrapfitness-vw7b.onrender.com/';
amrapLogo.src = './assets/img/AMRAPLogo.png';
amrapLogo.alt = 'AMRAP Logo';

amrapLink.appendChild(amrapLogo);
document.getElementById('amrap').appendChild(amrapLink);
amrapLink.addEventListener('click', function (event) {
    event.preventDefault();
    window.open(this.href, '_blank');
});