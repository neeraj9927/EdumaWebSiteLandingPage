// navbar ke liye

const nav = document.querySelector('nav');
var navmenu = document.querySelector('.menu');
var humbeger = document.querySelector('.humberger');

humbeger.addEventListener("click", () => {
    humbeger.classList.toggle("active");
    navmenu.classList.toggle('active');
});

// header ke liye js
    var lastscrollTop = 0;
    var header = document.getElementById('header');   

    window.addEventListener('scroll', function(){
        var ScrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if(ScrollTop > lastscrollTop){
            header.classList.add('scroll');
        }
        else{
          header.classList.remove('scroll');
          nav.style.background = "#0720ff"
          
        }
        lastscrollTop = ScrollTop;
    });

// main slider ke liye js
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 1500,
    },
    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
    },
  });

    // owl card slider ke liye
$(document).ready(function() {
      $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true,
                loop:true,
                
            },
            600:{
                items:2,
                nav:true,
                loop:true
            },
            1000:{
                items:4,
                nav:true,                
                loop:true
            }
        }
    })
});

// back to top button
var backtoTopButton = document.getElementById('backtoTopButton');

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 500) {
        backtoTopButton.style.display = "block";
    }
    else{
        backtoTopButton.style.display = "none";
    }
})

backtoTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});


// testamonils slider ke liye

var swiper = new Swiper(".mySwipers", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    
  },
});




