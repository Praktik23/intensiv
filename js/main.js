document.addEventListener("DOMContentLoaded", () => {
    const skillsListItem = document.querySelectorAll (".skills-list__item");

    skillsListItem.forEach(item => {
        const stripe = item.querySelector(".skills-outside__stripe");

        const widthValue = stripe.style.width;

        stripe.setAttribute("data-percent", widthValue);
    })

    let mixer = mixitup('.portfolio-list');

    Fancybox.bind("[data-fancybox]", {});
    
});
