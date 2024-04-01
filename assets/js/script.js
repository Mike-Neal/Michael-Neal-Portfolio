$(document).ready(function () {
    $('.navbar-toggler').click(function () {
        $('.navbar-collapse').toggleClass('show');
    });
});

const nflwcLink = document.createElement('a');
nflwcLink.href = 'https://mike-neal.github.io/NFL-Weather-Checker/';
nflwcLink.textContent = 'NFL Weather Checker';
document.getElementById('nflwc').appendChild(nflwcLink).addEventListener('click', function (event) {
    event.preventDefault();
    window.open(this.href, '_blank');
});

const kcmLink = document.createElement('a');
kcmLink.href = 'https://kcm-app-342e981adbd9.herokuapp.com/';
kcmLink.textContent = 'Kitchen Cooking and Meal-Planning App';
document.getElementById('kcm').appendChild(kcmLink).addEventListener('click', function (event) {
    event.preventDefault();
    window.open(this.href, '_blank');
});

const amrapLink = document.createElement('a');
amrapLink.href = 'https://amrapfitness-vw7b.onrender.com/';
amrapLink.textContent = 'As Many Reps As Possible';
document.getElementById('amrap').appendChild(amrapLink).addEventListener('click', function (event) {
    event.preventDefault();
    window.open(this.href, '_blank');
});