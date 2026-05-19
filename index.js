const hamburger = document.querySelector(".ri-menu-3-line");
const nav = document.querySelector("nav");

hamburger.addEventListener('click', () => {
    nav.classList.toggle("show")
});

// const herosection = document.getElementById("hero");
// const aboutsection = document.getElementById("about");
// const delivarysection = document.getElementById("Delivery");
// const testimonysection = document.getElementById("testimony");
// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if(entry.isIntersecting) {
//             entry.target.classList.add("view");

//             observer.unobserve(entry.target);
//         } 
//     });
// }, {
//     threshold: 0.1
// });
// observer.observe(herosection);
// observer.observe(aboutsection);
// observer.observe(delivarysection);
// observer.observe(testimonysection);



