(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

    
})(jQuery);
const portfolios = [

  {
    id: 1,
    title: "Tune Up Mesin Mobil",
    category: "Servis Mesin",
    description:
      "Dokumentasi proses tune up mesin mobil pelanggan agar performa kendaraan kembali optimal.",

    link: "",

    images: [
      "img/porto-1.jpeg",
      "img/porto-2.jpg",
      "img/porto-3.jpg"
    ]
  },

  {
    id: 2,
    title: "Perawatan Berkala Kendaraan",
    category: "Ganti Oli",
    description:
      "Servis berkala kendaraan pelanggan dengan penggantian oli dan pengecekan mesin.",

    link: "",

    images: [
      "img/porto-2.jpg",
      "img/porto-4.jpg",
      "img/porto-5.jpeg"
    ]
  },

  {
    id: 3,
    title: "Perbaikan Sistem Kelistrikan",
    category: "Kelistrikan",
    description:
      "Penanganan masalah aki, starter, lampu, dan sistem kelistrikan kendaraan.",

    link: "",

    images: [
      "img/porto-3.jpg",
      "img/porto-1.jpeg",
      "img/porto-6.jpeg"
    ]
  },

  {
    id: 4,
    title: "Pengecekan dan Perbaikan Rem",
    category: "Servis Rem",
    description:
      "Penanganan masalah rem pada kendaraan untuk kendaraan mobil dan motor",

    link: "",

    images: [
      "img/porto-3.jpg",
      "img/porto-1.jpeg",
      "img/porto-6.jpeg"
    ]
  },

  {
    id: 5,
    title: "Spooring dan Balancing Mobil",
    category: "Spooring",
    description:
      "Perbaikan kaki-kaki mobil",

    link: "",

    images: [
      "img/porto-3.jpg",
      "img/porto-1.jpeg",
      "img/porto-6.jpeg"
    ]
  },

  {
    id: 6,
    title: "Hasil Detailing Kendaraan",
    category: "Detailing",
    description:
      "Penanganan masalah baret, pengecatan ulang, dan detailing bodi kendaraan",
    link: "",

    images: [
      "img/porto-3.jpg",
      "img/porto-1.jpeg",
      "img/porto-6.jpeg"
    ]
  }

];

function openPortfolio(id) {

  const portfolio =
    portfolios.find(item => item.id === id);

  if (!portfolio) return;

  document.getElementById("portfolioTitle").innerText =
    portfolio.title;

  document.getElementById("portfolioCategory").innerText =
    portfolio.category;

  document.getElementById("portfolioDescription").innerText =
    portfolio.description;

  document.getElementById("portfolioLink").href =
    portfolio.link;

  const carouselInner =
    document.getElementById("portfolioCarouselInner");

  carouselInner.innerHTML = "";

  portfolio.images.forEach((image, index) => {

    carouselInner.innerHTML += `
      <div class="carousel-item ${index === 0 ? 'active' : ''}">
        <img
          src="${image}"
          class="d-block w-100"
          style="height: 600px; object-fit: cover;"
        >
      </div>
    `;

  });

  const modal =
    new bootstrap.Modal(
      document.getElementById('portfolioModal')
    );

  modal.show();

}

document.querySelectorAll('.flip-team').forEach(team => {

    team.addEventListener('click', function () {

        this.classList.toggle('flipped');

    });

});