home=document.querySelectorAll('.link')
homelink=document.querySelectorAll('.linkto')
home1=[...home]
home2=[...homelink]
homesel=document.getElementById('home')
home1[0].addEventListener('click',function(e){
    calc()
    home2[0].style.display="flex"
})
home1[1].addEventListener('click',function(e){
    calc()
    home2[1].style.display="flex"
})
home1[2].addEventListener('click',function(e){
    calc()
    home2[2].style.display="flex"
})
home1[3].addEventListener('click',function(e){
    calc()
    home2[3].style.display="flex"
})
home1[4].addEventListener('click',function(e){
    calc()
    home2[4].style.display="flex"
})

function calc(){
    home2.forEach(element => {
        element.style.display='none'
    });
}
var dropbtn=document.querySelector(".dropbtn")
var overlay=document.querySelector(".overlay")
console.log(overlay,dropbtn)
dropbtn.addEventListener('click',function(e){
    overlay.classList.toggle('navbar-slider');
})
var preloader=document.getElementById('preloader')
window/addEventListener("load",function(e){
    preloader.style.display="none"
})
var projDisp=document.querySelectorAll(".proj-disp")
var prj_disp=document.querySelectorAll(".prj-disp")
var closer=document.querySelector("#closer")
var projectdisplay=[...projDisp]
var projectHide=[...prj_disp]
projectdisplay[0].addEventListener('click',function(e){
    projectHide[0].classList.toggle('active');
    closer.style.display="block"
})
projectdisplay[1].addEventListener('click',function(e){
    projectHide[1].classList.toggle('active');
    closer.style.display="block"
})
projectdisplay[2].addEventListener('click',function(e){
    projectHide[2].classList.toggle('active');
    closer.style.display="block"
})
projectdisplay[3].addEventListener('click',function(e){
    projectHide[3].classList.toggle('active');
    closer.style.display="block"
})
projectdisplay[4].addEventListener('click',function(e){
    projectHide[4].classList.toggle('active');
    closer.style.display="block"
})
closer.addEventListener('click',function(e){
    projectHide.forEach(element => {
        element.classList.remove('active');
        
    })
    closer.style.display="none"

})
var d = new Date();
var currHour = d.getHours();
var bg=document.querySelector('.background')
console.log(currHour)
if (currHour >= 9 && currHour <= 16) {
    document.body.classList.add('light')
    bg.classList.remove('bg_theme')
} 
// night
else if (currHour > 16 && currHour < 24) {
    document.body.classList.remove('light')
    bg.classList.toggle('bg_theme')
}

/* $(document).ready(function(){
    $(".textillate").textillate({
        loop:true,
        in:{
            effect:'fadeInDownBig',
            delayscale:3,
            delay:20,
        }
    })
}) */
var theme=document.querySelector('#theme')

theme.addEventListener('click',function(e){
    console.log('theme')
    document.body.classList.toggle('light')
    bg.classList.toggle('bg_theme')
})
bg.style.backgroundSize='cover'
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
    delay: 6500,
    disableOnInteraction: false,
  },
  keyboard: {
    enabled: true,
  },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
          slidesPerView: 2,
          spaceBetween: 50,
      },
      1200: {
          slidesPerView: 3,
          spaceBetween: 50,
      },
    },
  });