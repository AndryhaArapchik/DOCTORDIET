 import Swiper from 'swiper/bundle';
 import 'swiper/swiper-bundle.css';
 import 'plyr/dist/plyr.css';

document.addEventListener('DOMContentLoaded', onLoad);

function onLoad(){
    const swiper = new Swiper('.reviews__slider', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    const galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
      });
    const galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        thumbs: {
          swiper: galleryThumbs
        }
    });
    const player = new Plyr('.player');
}
