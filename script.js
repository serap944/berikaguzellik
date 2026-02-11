
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

    const observer = new IntersectionObserver( //gözeten istenilen  alana girerse haber verir

        ([entry]) => {  /* 3. PERDE — “GÖZETMEN RAPOR VERİYOR”
👇 Şu an en kritik sahnedeyiz:
([entry]) => {
Ne oluyor?
Observer sana bir rapor dosyası gönderir:
entries = [entry1, entry2, entry3...]
Ama sen diyorsun ki:
“Ben sadece ilk oyuncuyu izliyorum.”
Yani:
entries[0] → entry
Bu yüzden:
([entry]) */
            console.log(entry.isIntersecting, entry.intersectionRatio);

            if (entry.isIntersecting) { //Eleman threshold koşulunu geçtiyse çalışır.
                entry.target.classList.add('aktifyazi'); //entry.target 👉 Observer’ın izlediği gerçek DOM elemanı
            } else {
                entry.target.classList.remove('aktifyazi');
            }
        },
        {
            threshold: 0.3 // %30 görünürlük
        }


    );

    observer.observe(about); // İzlemeyi başlatıyoruz




    const kartlar2 = document.querySelectorAll(".kart");

    const observer2 = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                const aciklama = entry.target.querySelector(".aciklama");

                if (entry.isIntersecting) {
                    aciklama.classList.add("aktif5");
                } else {
                    aciklama.classList.remove("aktif5");
                }
            });
        },
        {
            threshold: 0.6   // kartın %60’ı görünüyorsa çalış
        }
    );

    kartlar2.forEach(kart => {
        observer2.observe(kart);
    });

    document.querySelectorAll('.kart2').forEach(kart => {
        kart.addEventListener('click', () => {
            // mobilde toggle
            kart.classList.toggle('aktif');
        });
    });


});

