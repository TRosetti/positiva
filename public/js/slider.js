const swiper = new Swiper('.reels', {
   
    grabCursor: true,
    spaceBetween: 20,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    breakpoints: {
        0:{
            slidesPerView: 1.2
        },
        500:{
            slidesPerView: 1.5
        },
        710:{
            slidesPerView: 2
        },
        1000:{
            slidesPerView: 3
        },
        1500:{
            slidesPerView: 4
        }
    }
});



const swiper2 = new Swiper('.feed', {
    grabCursor: true,
    spaceBetween: 20,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    breakpoints: {
        0:{
            slidesPerView: 1.2
        },
        500:{
            slidesPerView: 1.5
        },
        710:{
            slidesPerView: 2
        },
        1000:{
            slidesPerView: 3
        },
        1630:{
            slidesPerView: 4
        }
    }
});


const swiper3 = new Swiper('.quem-somos-container', {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    autoplay: {
        delay: 2000,
    },
    

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    breakpoints: {
        0:{
            slidesPerView: 1.2
        },
        500:{
            slidesPerView: 1.5
        },
        900:{
            slidesPerView: 2
        },
        1250:{
            slidesPerView: 3
        }
    }
});

