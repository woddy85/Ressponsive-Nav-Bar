const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        //Toogle Nav
        nav.classList.toggle('nav-active');

        //Animated Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`
            }
        });
        //burger Animation
        burger.classList.toggle('toggle');
    });
}

//This is a cleaner way to do it
// const app = ()=>{
//     navSlide();
//     navSlide();
//     navSlide();
//     navSlide();
// }
navSlide();