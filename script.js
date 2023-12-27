const countdownContainer = document.querySelector('.contador');
const daysSpan = countdownContainer.querySelector('.days');
const hoursSpan = countdownContainer.querySelector('.hours');
const minutesSpan = countdownContainer.querySelector('.minutes');
const secondsSpan = countdownContainer.querySelector('.seconds');

function updateCountdown() {
  const targetDate = new Date('2024-01-27T19:59:59'); // Cambia a la fecha objetivo
  const currentDate = new Date();
  const timeDifference = targetDate - currentDate;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  daysSpan.textContent = days;
  hoursSpan.textContent = hours;
  minutesSpan.textContent = minutes;
  secondsSpan.textContent = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);

// S L I D E R
document.addEventListener("DOMContentLoaded", function (){
  const images = document.querySelectorAll(".image");
  let currentIndex = 0;

  function showImage (index) {
    images.forEach((image, i) => {
      image.classList.toggle("active", i === index);
    });
  }

  function nextImage (){
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  setInterval(nextImage, 3000);
  showImage(currentIndex);
})


//M U S I C A
let sound = new Audio('./audio/Ed-Sheeran-Perfect.mp3');

playBtn.addEventListener('click', () =>{
  sound.play();
})

playBtn.addEventListener('touchstart', () =>{
  sound.play();
})

pauseBtn.addEventListener('touchstart', () =>{
  sound.pause();
})

pauseBtn.addEventListener('click', () =>{
  sound.pause();
})


//L O A D E R
window.addEventListener("load", function () {
  var onloadHTML = document.getElementById('onload');
  var bodyHTML = document.getElementById('bodyAr');
  sound.play();
    
  onloadHTML.style.display = 'none';
  bodyHTML.classList.remove('hidden');
});
