const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if(window.scrollY > 500){
        header.classList.add('anim-header');
    } else {
        header.classList.remove('anim-header');
    }
})