document.addEventListener("DOMContentLoaded", () => {
    // Sayfa tamamen yüklendikten sonra kodların çalışmasını sağlar

    const menuBtn = document.querySelector(".menu-toggle");
    // Menü açma/kapatma butonunu seçiyoruz

    const menuIcon = document.querySelector(".menu-toggle i");
    // Butonun içindeki ikon (fa-bars / fa-times)

    const menu = document.querySelector(".linklerim");
    // Açılıp kapanacak olan mobil menü alanı

    // ===== MENÜ AÇ / KAPA =====
    menuBtn.addEventListener("click", (e) => {

        if (window.innerWidth > 1024) return;
        // Eğer ekran 1024px'ten büyükse (masaüstü) hiçbir şey yapma

        e.stopPropagation();
        // Tıklamanın document'e yayılmasını engeller (yoksa hemen kapanır)

        menu.classList.toggle("aktiflik");
        // Menüye aktiflik class'ını ekler veya kaldırır (aç/kapa)

        menuIcon.classList.toggle("fa-bars");
        // Hamburger ikonunu değiştir

        menuIcon.classList.toggle("fa-times");
        // Çarpı ikonunu değiştir
    });


    // ===== BOŞ ALANA TIKLANIRSA MENÜYÜ KAPAT =====
    document.addEventListener("click", (e) => {

        if (window.innerWidth > 1024) return;
        // Sadece mobilde çalışsın

        const menuAcikMi = menu.classList.contains("aktiflik");
        // Menü açık mı kontrol ediyoruz

        if (
            menuAcikMi &&                     // Menü açıksa
            !menu.contains(e.target) &&       // Tıklanan yer menünün içi değilse
            !menuBtn.contains(e.target)       // Tıklanan yer buton değilse
        ) {

            menu.classList.remove("aktiflik");
            // Menüyü kapat

            menuIcon.classList.remove("fa-times");
            // Çarpı ikonunu kaldır

            menuIcon.classList.add("fa-bars");
            // Hamburger ikonunu geri getir
        }

    });



    // Alt Menü
    const basliklar = document.querySelectorAll(".baslik");

    basliklar.forEach(baslik => {
        baslik.addEventListener("click", function () {

            if (window.innerWidth > 1024) return;

            const alt = this.nextElementSibling;
            alt.classList.toggle("acik");
        });
    });



    const listeler = document.querySelectorAll(".menu-oge");

    listeler.forEach(li => {
        li.addEventListener("click", () => {

            // önce hepsinin rengini sıfırla
            listeler.forEach(item => {
                item.style.backgroundColor = "transparent";
            });

            // tıklanan li'yi renklendir
            li.style.backgroundColor = "rgb(13, 148, 13)";
        });
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
            threshold: 0.5 // %30 görünürlük
        }


    );

    observer.observe(about); // İzlemeyi başlatıyoruz


    const observer2 = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                const aciklama = entry.target.querySelector(".aciklama");

                if (entry.isIntersecting) {
                    aciklama.classList.add("aktif5");
                }
                else {
                    aciklama.classList.remove("aktif5");
                }
            });
        },
        {
            threshold: 0.7
        }
    );

    // gözlemcinin kimi izleyeceğine karar ver
    document.querySelectorAll(".kart").forEach(kart => {
        observer2.observe(kart);
    });

});




