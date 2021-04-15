 import Swiper from 'swiper/bundle';
 import 'swiper/swiper-bundle.css';

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
            callPlayer("pauseVideo");
          }
        }
    });
}

function callPlayer(func, args) {
  var i = 0,
      iframes = document.getElementsByTagName('iframe'),
      src = '';
  for (i = 0; i < iframes.length; i += 1) {
      src = iframes[i].getAttribute('src');
      if (src && src.indexOf('youtube.com/embed') !== -1) {
          iframes[i].contentWindow.postMessage(JSON.stringify({
              'event': 'command',
              'func': func,
              'args': args || []
          }), '*');
      }
  }
}