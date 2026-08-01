// =============================
// MOBILE MENU
// =============================

const hamburger = document.querySelector(".hamburger");

const navMenu = document.querySelector(".nav-menu");


hamburger.addEventListener("click",()=>{

    navMenu.classList.toggle("active");

});


// Close menu after clicking link

document.querySelectorAll(".nav-menu a").forEach(link=>{

    link.addEventListener("click",()=>{

        navMenu.classList.remove("active");

    });

});


// =============================
// SCROLL REVEAL
// =============================


const sections = document.querySelectorAll(".section");


const observer = new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }


    });


},{threshold:.15});



sections.forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});
// =============================
// BACK TO TOP BUTTON
// =============================

const backToTop = document.getElementById("backToTop");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 500){

        backToTop.classList.add("active");

    }else{

        backToTop.classList.remove("active");

    }


});


backToTop.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});