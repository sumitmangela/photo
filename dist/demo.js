






// image slider main
$(document).ready(function(){
    
 
                $('.single').slick({
                autoplay : true,
                    autoplaySpeed : 5000,
                  pauseOnFocus : false,
                    pauseOnHover : false,
                 arrows : false,
                    draggable : false,
                         });
              
                $('.left').click(function(){
                  $('.single').slick('slickPrev');
                })

                $('.right').click(function(){
                  $('.single').slick('slickNext');
                })
                
                
                
               
                $('.album').slick({
             
                autoplay : true,
                    infinite : true,
                  pauseOnFocus : false,
                    pauseOnHover : false,
                   // adaptiveHeight : true,
                 arrows : false,
                    draggable : true,
                centerMode :true,
              // centerPadding : '0%',
                variableWidth: true,
                  rows: 2,
                   slidesPerRow : 1,
                   lazyLoad :  'progressive' ,
           
                        
     
                
                
                
                responsive: [{

                  breakpoint: 1024,
                  settings: {
                     rows: 1,
                    slidesPerRow : 1,
                  }

                }, {

                  breakpoint: 600,
                  settings: {
                     rows: 1,
                   // slidesPerRow : 1,
                  }

                }]

                
                });  
            
                    
    
    
    
   
        });



//scrolltotop
 
   $(function () {
  $.scrollUp({
    scrollName: 'scrollUp', // Element ID
    topDistance: '600' , // Distance from top before showing element (px)
    topSpeed: 300 , // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 500, // Animation in speed (ms)
    animationOutSpeed: 500, // Animation out speed (ms)
  scrollText: '^',
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });
});




//smoothScroll
 $(function () {
$('a').smoothScroll({
duration: 1000, // animation speed
easing: 'swing', // find more easing options on http://api.jqueryui.com/easings/
offset: 0 // custom offset
});
});



//scrollify
 $(function() {
          $.scrollify({
              section : ".scroll",
           
          });
     
    
        });