
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle i");
    const linklerim = document.querySelector(".linklerim");

    menuToggle.addEventListener("click", () => {

        const acikMi = linklerim.classList.contains("aktiflik");

        if (acikMi) {
            linklerim.classList.remove("aktiflik");
            menuToggle.classList.remove("fa-times");
            menuToggle.classList.add("fa-bars");
        } else {
            linklerim.classList.add("aktiflik");
            menuToggle.classList.remove("fa-bars");
            menuToggle.classList.add("fa-times");
        }

    });

    /* SLIDER */
    const slider = document.getElementById('slider');
    let index = 0;
    const slides = document.querySelectorAll('.slide').length;

    setInterval(() => {
        index = (index + 1) % slides;
        slider.style.transform = `translateX(-${index * 100}%)`;
    }, 4000);

    /*  ------------------------ */

    const about = document.querySelector('.about');


    if (about) {
        console.log("about bulundu");

    } else {
        console.log("about bulunmadı");
    }

    const observer = new IntersectionObserver( //Tarayıcı otomatik hesaplar: Scroll  Ekran boyutu Threshold


        ([entry]) => {
            console.log(entry.isIntersecting, entry.intersectionRatio);

            if (entry.isIntersecting) {
                entry.target.classList.add('aktifyazi');
            } else {
                entry.target.classList.remove('aktifyazi');
            }
        },
        {
            threshold: 0.3 // %20 görünürlük
        }

    );

    observer.observe(about); // İzlemeyi başlatıyoruz

});