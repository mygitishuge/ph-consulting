
const header = document.querySelector('.nav-header');
const scrollContainer = document.querySelector('.scroll-container');
const logo = document.querySelector('.logo-header');
const snapThreshold = 1;

scrollContainer.addEventListener('scroll', () => {


    if (scrollContainer.scrollTop >= scrollContainer.clientHeight) {
        header.classList.add('final-nav');
        header.classList.remove('initial-nav');
        logo.classList.add('logo-header-final');
        logo.classList.remove('logo-header-initial');
    } else {
        header.classList.add('initial-nav');
        header.classList.remove('final-nav');
        logo.classList.add('logo-header-initial');
        logo.classList.remove('logo-header-final');
    }
});