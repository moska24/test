$(document).ready(function(){
  $('.reviews').slick({
    infinite: false,
    arrows: false,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    draggable: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.switch-btn').click(function(){
    $(this).toggleClass('switch-on');
  });
})
