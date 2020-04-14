

/* Preloader */





/* Carousel */

var slideIndex = 2;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  
  slides[slideIndex-1].style.display = "block";  
}

/* Animations using scrollreveal */



window.sr = ScrollReveal();


sr.reveal('.nav-container', {
  duration:4500,
  origin:'bottom'
});


// sr.reveal('.home-image', {
//     duration:3000,
//     origin:'top',
//     distance:'200px'
// });

sr.reveal('.home-wrap', {
    duration:3000,
    origin:'left',
    distance:'300px'
});

sr.reveal('.points-container', {
    duration:4000,
    origin:'right',
    distance:'300px'
});

// sr.reveal('.features-image', {
//     duration:3000,
//     origin:'top',
//     distance:'300px'
// });

sr.reveal('.pics-container', {
    duration:3400,
    origin:'bottom',
    distance:'400px'
})

sr.reveal('.reviews', {
  duration:3400,
  origin:'bottom',
  distance:'400px'
})

