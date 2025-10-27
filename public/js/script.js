let banner = document.getElementById('banner');
let navMobile = document.getElementById('nav-mobile');

if(window.innerWidth > 1536){
    banner.classList.add('section-container')
}

if(window.innerWidth >= 0){
    navMobile.classList.add('section-container')
}