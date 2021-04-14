 import Swiper from 'swiper/bundle';
 import 'swiper/swiper-bundle.css';
 import Plyr from 'plyr/dist/plyr.polyfilled';
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
        },
        on:{
          slideChange: (swiper) => {
            const activeSlide = swiper.slides[swiper.realIndex];
            const player = activeSlide.querySelector('.player');
            if(player)
              initPlayer(player);
            players.forEach(p => p.pause());
          }
        }
    });
    const firstPlayer = document.querySelector('.player');
    initPlayer(firstPlayer);
}

const players = [];

function initPlayer(element){
  const player = new Plyr(element, {
    youtube: { 
      noCookie: false, 
      rel: 0, 
      showinfo: 0, 
      iv_load_policy: 3, 
      modestbranding: 1 
    }
  });
  players.push(player);
}
