
$(document).ready(function(){
    // testimonials owl carsouel
    $('.testimonial-owl-carousel').owlCarousel({
            loop:true,
            nav:true,
            autoplay:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        });
    // mobial navbar
var mobile_nav=$("#nav-links").clone(true).prop({
    id:'mobile_nav'
});
$('body').append(mobile_nav);
$('body').prepend(' <button type="button" id="mobile-nav-toggle"><i class="fas fa-bars"></i></button> ');
$('body').append('<div id="mobile-body-overly"></div>');

// toggel mobile-nave
$("#mobile-nav-toggle i").on("click",function(){
    $(this).toggleClass("fa-bars fa-times");
    $("#mobile-body-overly").toggleClass("mobile-body-overly");
    
// show mobile nav
let mobileNav_width=mobile_nav.innerWidth();
    if($(this).hasClass("fa-times")){
        mobile_nav.animate({
            right:0
        },1000)
    }else{
        mobile_nav.animate({
            right:'-'+mobileNav_width
        },1000)
    }
    
})
//hide mobile-nav when click any a in mobile-nav
   $(mobile_nav).find('a').each(function(){
       $(this).on('click',function(){
           $(mobile_nav).fadeOut(100);
       })
   });

   //add class nav-top to navbar
   $(window).scroll(function(){
        if($(window).scrollTop()>=500){
            $("#header nav").addClass("nav-top");
        }else{
            $("#header nav").removeClass("nav-top");
        }
   });
// go to up
  $(window).scroll(function(){
      if($(window).scrollTop()>=500){
          $(".btn-up").fadeIn(2000);
      }else{
          $(".btn-up").fadeOut(2000);
      }
  }) ;
  $(".btn-up").on("click",function(){
      $(window).scrollTop(0,0);
  })
  //nice scroll 
  $("body").niceScroll({
    cursorcolor:"aquamarine",
    cursorwidth:"8px"
  });
});


