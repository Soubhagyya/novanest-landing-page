const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add("visible");

        }

    });

}, { threshold:0.15 });

revealElements.forEach((el) => observer.observe(el));
const dropdownToggle = document.querySelector(".dropdown > a");

dropdownToggle.addEventListener("click", function(e){

    if(window.innerWidth <= 768){

        e.preventDefault();

        this.parentElement.classList.toggle("active");

    }

});