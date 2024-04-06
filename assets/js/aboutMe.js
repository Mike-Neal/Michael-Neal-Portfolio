$(document).ready(function () {
    $('.navbar-toggler').click(function () {
        $('.navbar-collapse').toggleClass('show');
    });
});

const resumeLink = document.createElement('a');
const resumeLogo = document.createElement('img');

resumeLink.href = './assets/img/MikeNealResume.pdf';
resumeLogo.src = './assets/img/Profile Pic Baldy.jpg';
resumeLogo.alt = 'Profile Picture';
resumeLogo.id = 'profilePic';

resumeLink.appendChild(resumeLogo);
document.getElementById('profileResume').appendChild(resumeLink);
resumeLink.addEventListener('click', function (event) {
    event.preventDefault();
    window.open(this.href, '_blank');
});