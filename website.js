
// Cache the querySelector results
var header = document.querySelector("header");

// Scroll event listener with debounce
window.addEventListener("scroll", function() {
  header.classList.toggle("sticky", window.scrollY > 0);
});

document.addEventListener("DOMContentLoaded", function() {
  var homePage = document.querySelector(".homeLogo");
  
    window.addEventListener("scroll", function() {
      var scrollPosition = window.scrollY;
      var opacity = 1 - scrollPosition / 200; // Adjust the division factor as needed
  
      // Apply the opacity to the background container
      homePage.style.opacity = opacity;
  
      // Toggle a class for additional styling if desired
      homePage.classList.toggle("background-fade", scrollPosition > 100); // Adjust the scroll position threshold as needed
    });
});


window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++){
      var windowheight = window.innerHeight;
      var revealtop = reveals[i].getBoundingClientRect().top;
      var revealpoint = 150;

      if(revealtop < windowheight - revealpoint){
        reveals[i].classList.add('active');
      }

      else{
        reveals[i].classList.remove('active')
      }
    }
}



let myDiv = document.querySelectorAll('.other-proj');

myDiv.forEach(myDiv => {
  myDiv.addEventListener('mouseleave', () => {
    myDiv.scrollTo({ top: 0, behavior: 'smooth' }); /* Scroll back to the top when unhovering */
  });
});

let list = document.querySelector('.sliders .list');
let items = document.querySelectorAll('.sliders .list .slide');
let dots = document.querySelectorAll('.sliders .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthItems = items.length - 1;

next.onclick = function(){
    if(active + 1 > lengthItems){
        active = 0;
    }else{
        active = active + 1;
    }
    reloadSlider();
}

prev.onclick = function(){
    if(active - 1 < 0){
        active = lengthItems;
    }else{
        active = active - 1;
    }
    reloadSlider();
}

let refreshSlider = setInterval(()=> {next.click()}, 4000);

function reloadSlider() {
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector('.sliders .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(refreshSlider);
    let refreshSlider = setInterval(()=> {next.click()}, 4000);
}

dots.forEach((li, key) => {
    li.addEventListener('click', function(){
        active = key;
        reloadSlider();
    })
})

