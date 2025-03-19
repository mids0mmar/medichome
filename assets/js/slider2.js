// 
var slider2 = tns({
    container: '.my-slider2',
    items: 2,
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
        items: 1
      },
      700: {
        gutter: 30
      },
      900: {
        items: 3
      }
    }
  });