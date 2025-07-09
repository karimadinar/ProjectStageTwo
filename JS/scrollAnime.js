
/*====== SLICK JS ======*/
$(".show-case-slider").slick({
    infinite: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 1500,
});

// PARTNERS SLIDER ANIMATION
$(".partners_slider").slick({
    infinite: true,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 1500,

    responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        },

        {
            breakpoint: 360,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }  
        }
      ]
});

// TIMELINE SLIDER ANIMATION
$(".timeline-slider").slick({
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 1500,

    responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        },

        {
            breakpoint: 360,
            settings: {
              arrows: false,
              centerMode: true,
              slidesToShow: 1
            }  
        }
      ]
});


// CERTIFICATES SLIDER ANIMATION
$(".certificates-slider").slick({
    infinite: true,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 1500,

    responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow:1
          }
        },

        {
            breakpoint: 360,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }  
        }
      ]
});

// CERTIFICATES SLIDER ANIMATION
$(".turnOver-slider").slick({
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 1500,
});



// LOCATIONS SLIDER ANIMATION
$(".locations-banners-slider").slick({
  infinite: true,
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: false,
  autoplay: true,
  autoplaySpeed: 1500,
});

// TRANS MODEL SLIDER ANIMATION
$(".trans-model-slider").slick({
  infinite: true,
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: false,
  autoplay: true,
  autoplaySpeed: 2100,
});

// MAGIFIQE POP UP ANIMATION

/*$('.magnifique-container').magnificPopup({
    delegate: 'img', // child items selector, by clicking on it popup will open
    type: 'image'
    // other options
  })*/