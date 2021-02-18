 import Swiper from 'swiper/bundle';
 import 'swiper/swiper-bundle.css';

document.addEventListener('DOMContentLoaded', onLoad);

function onLoad(){
    const swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}