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
    document.querySelectorAll('.course__video')
      .forEach(x=>x.addEventListener('click', e => {
          const url = e.currentTarget.closest('.course__video').dataset.src + '?enablejsapi=1';
          const modal = document.createElement('div');
          modal.classList.add('modal');
          const bg = document.createElement('div');
          bg.classList.add('bg');
          bg.addEventListener('click', c => c.currentTarget.closest('.modal').outerHTML = '');
          const video = document.createElement('div');
          video.classList.add('modal-video');
          video.innerHTML = `<iframe width="100%" height="100%" src="${url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
          modal.appendChild(bg);
          modal.appendChild(video);
          document.body.appendChild(modal);
      }));
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