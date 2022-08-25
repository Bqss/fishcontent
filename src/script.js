
const navLinks = document.querySelector('.nav__links')
const navToggler = document.querySelector('.nav__toggler');

navToggler.onclick = () => {
    navToggler.classList.toggle('active');
    navLinks.classList.toggle('nav__links--active');

}

const herosection = new Swiper(".hero-sections", {
    spaceBetween: 100,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination : {
        el : ".swiper-pagination",
        "clickable" : true
    }
});
const  testimonial = new Swiper(".testimonial", {
    spaceBetween: 100,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

});



