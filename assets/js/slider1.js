
// import {tns} from './src/tiny-slider.js';
document.addEventListener("DOMContentLoaded", function () {

    var slider = tns({
      container: '.my-slider',
      items: 2,
      center: true,
      startIndex: 1,
      loop: false,
      swipeAngle: false,
      controls: true,
      prevButton: '#prevBtn',
      nextButton: '#nextBtn',
      nav: false,
      speed: 400,
      responsive: {
        640: {
          edgePadding: 20,
          gutter: 20,
          items: 2
        },
        700: {
          gutter: 30
        },
        900: {
          items: 3
        }
      }
    });
    
    function updateActiveSlide() {
      let slides = document.querySelectorAll('.my-slider .tns-item'); 
      slides.forEach(slide => slide.classList.remove('activo')); 
    
      let info = slider.getInfo(); 
      let centerIndex = info.index;
    
    
      if (slides[centerIndex]) {
        slides[centerIndex].classList.add('activo');
      }
    }
     
    
    slider.events.on("indexChanged", updateActiveSlide);
    updateActiveSlide(); 
    });
    
    
    
    
    