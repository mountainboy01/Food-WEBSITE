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