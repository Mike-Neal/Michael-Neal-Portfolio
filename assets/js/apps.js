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
nflwcLogo.id = 'nflwcPic';

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
kcmLogo.id = 'kcmPic';

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
amrapLogo.id = 'amrapPic';

amrapLink.appendChild(amrapLogo);
document.getElementById('amrap').appendChild(amrapLink);
amrapLink.addEventListener('click', function (event) {
    event.preventDefault();
    window.open(this.href, '_blank');
});

const pwgrLink = document.createElement('a');
const pwgrLogo = document.createElement('img');

pwgrLink.href = 'https://mike-neal.github.io/Password-Generator/';
pwgrLogo.src = './assets/img/pwgrLogo.png';
pwgrLogo.alt = 'Password Generator Logo';
pwgrLogo.id = 'pwgrPic';

pwgrLink.appendChild(pwgrLogo);
document.getElementById('pwgr').appendChild(pwgrLink);
pwgrLink.addEventListener('click', function (event) {
    event.preventDefault();
    window.open(this.href, '_blank');
});

const cquizLink = document.createElement('a');
const cquizLogo = document.createElement('img');

cquizLink.href = 'https://mike-neal.github.io/Coding-Quiz/';
cquizLogo.src = './assets/img/cquizLogo.jpg';
cquizLogo.alt = 'Coding Quiz Logo';
cquizLogo.id = 'cquizPic';

cquizLink.appendChild(cquizLogo);
document.getElementById('cquiz').appendChild(cquizLink);
cquizLink.addEventListener('click', function (event) {
    event.preventDefault();
    window.open(this.href, '_blank');
});