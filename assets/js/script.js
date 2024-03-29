$(document).ready(function() {
    $('.navbar-toggler').click(function() {
      $('.navbar-collapse').toggleClass('show');
    });
  });

  const link = document.createElement('a');
  link.href = 'https://mike-neal.github.io/NFL-Weather-Checker/';
  link.textContent = 'NFL Weather Checker';
document.getElementById('nflwc').appendChild(link);