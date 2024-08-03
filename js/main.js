/***************************** NAVBAR JS **********************************/

const navbar= document.querySelector("#navbar");
const toggleIcon = document.querySelector("#toggle-icon");

toggleIcon.addEventListener("click",()=>{
      navbar.classList.toggle("active");
      toggleIcon.classList.toggle("fa-times");
})

/***************************** NAVBAR JS **********************************/



/***************************** OUR MENU SWIPER JS **********************************/
var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
        clickable: false,
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });

/***************************** OUR MENU SWIPER JS **********************************/

/***************************** SCROLL REVEAL JS **********************************/
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};


ScrollReveal().reveal(".hero-img", {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".hero-tag", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".hero-text h1", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".hero-text p", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".hero-link", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".service #col-1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".service #col-2", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".service #col-3", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".testamonial-img", {
  ...scrollRevealOption,
  origin:'left',
  delay:1000
});

ScrollReveal().reveal(".testamonial-content span", {
  ...scrollRevealOption,
  origin:'bottom',
  delay: 500
});

ScrollReveal().reveal(".testamonial-content h1", {
  ...scrollRevealOption,
  origin:'bottom',
  delay: 1000
});

ScrollReveal().reveal(".testamonial-content p", {
  ...scrollRevealOption,
  origin:'bottom',
  delay: 1500
});

ScrollReveal().reveal(".client-details", {
  ...scrollRevealOption,
  origin:'bottom',
  delay: 2000
});

ScrollReveal().reveal(".clinet-rating", {
  ...scrollRevealOption,
  origin:'bottom',
  delay: 2500
});

ScrollReveal().reveal(".start-details span", {
  ...scrollRevealOption,
  origin:'bottom',
  delay: 500
});

ScrollReveal().reveal(".start-details h1", {
  ...scrollRevealOption,
  origin:'bottom',
  delay: 1000
});

ScrollReveal().reveal(".start-details p", {
  ...scrollRevealOption,
  origin:'bottom',
  delay: 1500
});

ScrollReveal().reveal(".start-details .start-link", {
  ...scrollRevealOption,
  origin:'bottom',
  delay: 2000
});

ScrollReveal().reveal(".start-img", {
  ...scrollRevealOption,
  origin:'right',
  delay:1000
});




/***************************** SCROLL REVEAL JS **********************************/

/***************************** SCROLL TOP JS **********************************/
const scrollTop = document.querySelector("#scrollTop");
window.addEventListener("scroll",()=>{
	if(window.pageYOffset>300){
	scrollTop.classList.add("active");
     }

     else{
     	scrollTop.classList.remove("active");
     }
})

scrollTop.addEventListener("click",()=>{
	window.scrollTo(0 ,0);
})


/***************************** SCROLL TOP JS **********************************/