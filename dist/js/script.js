const burger = document.querySelector('.burger'),
    nav = document.querySelector('.nav'),
    navClose = document.querySelector('.nav__close');

burger.addEventListener('click', () => {
    nav.classList.add('nav__active');
});

navClose.addEventListener('click', () => {
    nav.classList.remove('nav__active');
});

try {
    const mute = document.querySelector('.mute__checkbox'),
        audio = new Audio('audio/waterTower.mp3'),
        checkMute = () => {
        if (mute.checked) {
            audio.play();
        } else {
            audio.pause();
        }
    };
 /*   
    if (mute) {
        setTimeout(checkMute, 2000);
    } */
    

    mute.addEventListener('change', checkMute);
} catch {
    console.log('');
}


try {
    const pagination = document.querySelector('.pagination'),
        paginationVideo  = document.querySelector('.pagination_video'),
        paginationBtn = document.querySelector('.pagination__arrow'),
        video = document.querySelectorAll('video');


    const sliderThumbs = new window.Swiper('.slider-thumbs', {
        loop: true,
        spaseBetween: 20,
        slidesPerView: 3,
        centeredSlides: true,
        loopedSlides: 4
    });
    
    sliderThumbs.on('click', (swiper) => {
        swiper.slideTo(swiper.clickedIndex);
        if (paginationVideo) {
            paginationVideo.classList.toggle('pagination_active');
            video[swiper.clickedSlide.dataset.swiperSlideIndex].play();
        }
    });
    
    const sliderMain = new window.Swiper('.slider-main', {
        loop: true,
        spaseBetween:10,
        loopedSlides: 4
    });
    sliderThumbs.controller.control = sliderMain;
    sliderMain.controller.control = sliderThumbs;


    sliderMain.on('slideChange', () => {
        for(let i = 0; i < video.length; i += 1) {
            video[i].pause();
        }
    });



    paginationBtn.addEventListener('click', () => {
        pagination.classList.toggle('pagination_active');
    });

} catch {
    console.log('-'); 
}
 