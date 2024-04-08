$(document).ready(function () {
    $('.navbar-toggler').click(function () {
        $('.navbar-collapse').toggleClass('show');
    });
});

const resumeLink = document.createElement('a');
const resumeLogo = document.createElement('img');

resumeLink.href = './assets/img/MikeNealResume.pdf';
resumeLink.id = 'mnResume';
resumeLogo.src = './assets/img/Profile Pic Baldy.jpg';
resumeLogo.alt = 'Profile Picture';
resumeLogo.id = 'profilePic';

resumeLink.appendChild(resumeLogo);
resumeLink.style.width = `${resumeLogo.width}px`;
resumeLink.style.height = `${resumeLogo.height}px`;
document.getElementById('profileResume').appendChild(resumeLink);
resumeLink.addEventListener('click', function (event) {
    event.preventDefault();
    window.open(this.href, '_blank');
});