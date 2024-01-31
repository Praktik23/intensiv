document.addEventListener("DOMContentLoaded", () => {
    const skillsListItem = document.querySelectorAll (".skills-list__item");

    skillsListItem.forEach(item => {
        const stripe = item.querySelector(".skills-outside__stripe");

        const widthValue = stripe.style.width;

        stripe.setAttribute("data-percent", widthValue);
    })

    let mixer = mixitup('.portfolio-list');

    Fancybox.bind("[data-fancybox]", {});

    const feedback = new Swiper('.feedback-swiper', {
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.feedback-button-next',
          prevEl: '.feedback-button-prev',
        },

        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
      });

    const swiper = new Swiper('.slider-promo-swiper', {
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.slider-promo-button-next',
          prevEl: '.slider-promo-button-prev',
        },

        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
      });
    
});
