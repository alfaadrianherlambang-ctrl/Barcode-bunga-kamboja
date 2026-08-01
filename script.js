/* ==========================================
   WEBSITE KAMBOJA V2.0
   JavaScript
========================================== */

// ===============================
// Animasi Fade In Saat Scroll
// ===============================

const cards = document.querySelectorAll(".card, .hero-card");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

},{
    threshold:0.15
});

cards.forEach(card=>{

    card.style.opacity="0";
    card.style.transform="translateY(40px)";
    card.style.transition="all .8s ease";

    observer.observe(card);

});


// ===============================
// Tombol Back To Top
// ===============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


// ===============================
// Parallax Header
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    let value = window.scrollY;

    header.style.backgroundPositionY = value * 0.3 + "px";

});


// ===============================
// Hero Image Zoom Saat Scroll
// ===============================

const heroImage = document.querySelector(".hero-card img");

window.addEventListener("scroll",()=>{

    let y = window.scrollY;

    heroImage.style.transform =
        "scale("+(1 + y/6000)+")";

});


// ===============================
// Efek Hover Badge
// ===============================

const badge = document.querySelector(".badge");

badge.addEventListener("mouseenter",()=>{

    badge.style.transform="scale(1.05)";

});

badge.addEventListener("mouseleave",()=>{

    badge.style.transform="scale(1)";

});


// ===============================
// Efek Klik Card
// ===============================

cards.forEach(card=>{

    card.addEventListener("mousedown",()=>{

        card.style.transform="scale(.98)";

    });

    card.addEventListener("mouseup",()=>{

        card.style.transform="scale(1)";

    });

});


// ===============================
// Footer Tahun Otomatis
// ===============================

const year = new Date().getFullYear();

const copyright =
document.querySelector(".copyright");

if(copyright){

copyright.innerHTML =
"© "+year+" Kelompok Bunga Kamboja";

}
