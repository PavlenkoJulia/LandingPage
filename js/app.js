const play = document.querySelector('.about__play');
const video = document.querySelector('.about__video video');

play.addEventListener('click', () => {
    video.play();
    video.setAttribute('controls', 'controls');
    play.classList.add('about__play--hidden');
});

let nav = $("#nav");
let navToggle = $("#navToggle");

navToggle.on("click", function(event) {
    event.preventDefault();

    nav.toggleClass("show");
});