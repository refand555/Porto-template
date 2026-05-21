// =========================
// HEADER SCROLL
// =========================

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {

    header.classList.toggle(
        'scrolled',
        window.scrollY > 50
    );

});

// =========================
// HERO DATA
// =========================

const heroData = [

    {
        title:
        "Secangkir Hangat untuk Setiap Cerita",

        description:
        "Nikmati suasana nyaman dan kopi pilihan terbaik.",

        image:
        "assets/images/BG Header.jpg"
    },

    {
        title:
        "Aroma Kopi, Suasana yang Menenangkan",

        description:
        "Hadirkan momen hangat di setiap tegukan.",

        image:
        "assets/images/BG Header2.jpeg"
    },

    {
        title:
        "Tempat untuk Berhenti Sejenak",

        description:
        "Temukan rasa nyaman di setiap sudut kedai.",

        image:
        "assets/images/BG Header3.png"
    }

];

// =========================
// GENERATE HERO
// =========================

const heroWrapper =
document.getElementById('heroWrapper');

const heroIndicators =
document.getElementById('heroIndicators');

heroData.forEach((hero, index) => {

    // INDICATOR
    heroIndicators.innerHTML += `

        <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to="${index}"
            class="${index === 0 ? 'active' : ''}"
        ></button>

    `;

    // SLIDE
    heroWrapper.innerHTML += `

        <div 
            class="
                carousel-item
                hero-slide
                ${index === 0 ? 'active' : ''}
            "
            style="
                background-image:
                url('${hero.image}')
            "
        >

            <div class="hero-overlay"></div>

            <div class="container hero-content">

                <h1>
                    ${hero.title}
                </h1>

                <p>
                    ${hero.description}
                </p>

                <a href="#" class="btn-custom">
                    Jelajahi Kedai
                </a>

            </div>

        </div>

    `;

});

// =========================
// DUMMY MENU DATA
// =========================
``
const menuData = [

    {
        title: "Iced Americano",
        price: "Rp16.000",
        image: "assets/images/Iced_Americano.jpg",
        description: "..."
    },

    {
        title: "Matcha Latte",
        price: "Rp22.000",
        image: "assets/images/Matcha Latte.jpeg",
        description: "..."
    },

    {
        title: "Es Kopi Gula Aren",
        price: "Rp18.000",
        image: "assets/images/Kopi Gula Aren.jpg",
        description: "..."
    },

    {
        title: "Cinnamon Roll",
        price: "Rp31.000",
        image: "assets/images/Cinnamon Roll.jpeg",
        description: "..."
    },

    {
        title: "Matcha Latte Special",
        price: "Rp24.000",
        image: "assets/images/Latte.jpg",
        description: "..."
    },

    {
        title: "Croissant",
        price: "Rp27.000",
        image: "assets/images/Croissant.jpeg",
        description: "Lorem Ipsum Dolor SiT Amet"
    }

];

// =========================
// SERVICES DATA
// =========================

const servicesData = [

    {
        title: "Signature Coffee",

        description:
        "Diracik langsung oleh barista kami menggunakan biji kopi pilihan dengan cita rasa autentik.",

        image:
        "assets/images/Signature Coffe.jpg"
    },

    {
        title: "Live Acoustic",

        description:
        "Temani malam hangatmu dengan live acoustic yang hadir setiap akhir pekan.",

        image:
        "assets/images/Live Music.jpeg"
    },

    {
        title: "Cozy Space",

        description:
        "Sudut hangat untuk bekerja, berbincang, dan menikmati suasana kedai.",

        image:
        "assets/images/Cozy.jpeg"
    },

    {
        title: "Pastry Fresh Setiap Hari",

        description:
        "Nikmati pastry dan dessert hangat yang dipanggang fresh setiap hari.",

        image:
        "assets/images/Fresh Pastry.jpg"
    }

];

// =========================
// PORTFOLIO DATA
// =========================

const portfolioData = [

    {
        category: "Event • Bazaar",

        title:
        "Coffee Booth at Surabaya Coffee Fest",

        thumbnail:
        "assets/images/Porto1.jpeg",

        gallery: [

            "assets/images/Porto1.jpeg",

            "assets/images/Porto2.jpg",

            "assets/images/Porto3.jpg"

        ],

        description:
        "Booth kopi kami hadir dalam acara Surabaya Coffee Fest dengan konsep hangat dan modern.",

        link:
        "https://example.com",

        large: true
    },

    {
        category: "Live Acoustic",

        title:
        "Weekend Music Session",

        thumbnail:
        "assets/images/Porto2.jpg",

        gallery: [

            "assets/images/Porto2.jpg",

            "assets/images/Porto4.jpeg"

        ],

        description:
        "Live acoustic setiap akhir pekan dengan suasana santai dan hangat.",

        link:
        "https://example.com",

        large: false
    },

    {
        category: "Community",

        title:
        "Coffee Community Meetup",

        thumbnail:
        "assets/images/Porto3.jpg",

        gallery: [

            "assets/images/Porto3.jpg",

            "assets/images/Porto1.jpeg",

            "assets/images/Porto2.jpg"

        ],

        description:
        "Komunitas pecinta kopi berkumpul untuk berbagi cerita dan pengalaman.",

        link:
        "https://example.com",

        large: false
    },

    {
        category: "Workshop",

        title:
        "Manual Brew Experience",

        thumbnail:
        "assets/images/Porto4.jpeg",

        gallery: [

            "assets/images/Porto4.jpeg",

            "assets/images/Porto1.jpeg"

        ],

        description:
        "Workshop manual brew interaktif bersama barista profesional kami.",

        link:
        "https://example.com",

        large: true
    }

];

// =========================
// TEAM DATA
// =========================

const teamData = [

    {
        name: "Andi",

        role: "Head Barista",

        image:
        "assets/images/Cewek1.jpeg",

        socials: {

            instagram: "#",

            facebook: "#",

            youtube: "#"
        }
    },

    {
        name: "Sinta",

        role: "Store Manager",

        image:
        "assets/images/Cowok1.jpeg",

        socials: {

            instagram: "#",

            facebook: "#",

            youtube: "#"
        }
    },

    {
        name: "Raka",

        role: "Customer Service",

        image:
        "assets/images/Cewek2.jpeg",

        socials: {

            instagram: "#",

            facebook: "#",

            youtube: "#"
        }
    }

];

// =========================
// TESTIMONIAL DATA
// =========================

const testimonialData = [

    {
        name: "Amanda",

        image:
        "assets/images/Cewek1.jpeg",

        review:
        "Tempatnya nyaman banget buat kerja atau ngobrol santai."
    },

    {
        name: "Reza",

        image:
        "assets/images/Cowok1.jpeg",

        review:
        "Suasana hangat dan pelayanan ramah."
    },

    {
        name: "Nabila",

        image:
        "assets/images/Cewek2.jpeg",

        review:
        "Interiornya estetik dan bikin betah."
    },

    {
        name: "Dimas",

        image:
        "assets/images/Cowok1.jpeg",

        review:
        "Cocok buat healing setelah kerja."
    },

    {
        name: "Salsa",

        image:
        "assets/images/Cewek2.jpeg",

        review:
        "Baristanya ramah dan kopinya enak."
    },

    {
        name: "Kevin",

        image:
        "assets/images/Cewek1.jpeg",

        review:
        "Tempat favorit buat meeting santai."
    }

];

// =========================
// GENERATE MENU
// =========================

const menuGrid = document.getElementById('menuGrid');

menuData.forEach((menu, index) => {

    menuGrid.innerHTML += `

        <div 
            class="menu-item"
            data-aos="fade-up"
            data-aos-delay="${index * 100}"
            data-index="${index}"
            data-bs-toggle="modal"
            data-bs-target="#menuModal"
        >

            <img 
                src="${menu.image}" 
                alt="${menu.title}"
            >

            <h3>${menu.title}</h3>

            <span>${menu.price}</span>

        </div>

    `;

});

// =========================
// GENERATE SERVICES
// =========================

const servicesWrapper =
document.getElementById('servicesWrapper');

servicesData.forEach((service, index) => {

    servicesWrapper.innerHTML += `

        <div class="service-item"   
data-aos="${
    index % 2 === 0
    ? 'fade-right'
    : 'fade-left'
}">

            <!-- Text -->
            <div class="service-content">

                <h3>
                    ${service.title}
                </h3>

                <p>
                    ${service.description}
                </p>

            </div>

            <!-- Image -->
            <div class="service-image">

                <img 
                    src="${service.image}" 
                    alt="${service.title}"
                >

            </div>

        </div>

    `;

});

// =========================
// GENERATE PORTFOLIO
// =========================

const portfolioWrapper =
document.getElementById('portfolioWrapper');

portfolioData.forEach((portfolio, index) => {

    portfolioWrapper.innerHTML += `

        <div 
            class="portfolio-item ${
                portfolio.large ? 'large' : ''
            }"

            data-index="${index}"

            data-bs-toggle="modal"
            data-bs-target="#portfolioModal"
        >

            <img 
                src="${portfolio.thumbnail}" 
                alt="${portfolio.title}"
            >

            <div class="portfolio-overlay">

                <span>
                    ${portfolio.category}
                </span>

                <h3>
                    ${portfolio.title}
                </h3>

            </div>

        </div>

    `;

});

// =========================
// PORTFOLIO DETAIL
// =========================

const portfolioItems =
document.querySelectorAll('.portfolio-item');

const portfolioCarouselInner =
document.getElementById(
    'portfolioCarouselInner'
);

const portfolioTitle =
document.getElementById(
    'portfolioTitle'
);

const portfolioCategory =
document.getElementById(
    'portfolioCategory'
);

const portfolioDescription =
document.getElementById(
    'portfolioDescription'
);

const portfolioLink =
document.getElementById(
    'portfolioLink'
);

portfolioItems.forEach((item) => {

    item.addEventListener('click', () => {

        const index =
        item.getAttribute('data-index');

        const selectedPortfolio =
        portfolioData[index];

        // RESET CAROUSEL
        portfolioCarouselInner.innerHTML = '';

        // GENERATE SLIDES
        selectedPortfolio.gallery.forEach(
            (image, imageIndex) => {

            portfolioCarouselInner.innerHTML += `

                <div class="
                    carousel-item
                    ${imageIndex === 0 ? 'active' : ''}
                ">

                    <img 
                        src="${image}"
                        class="d-block w-100"
                        alt="${selectedPortfolio.title}"
                    >

                </div>

            `;

        });

        // SET DATA
        portfolioTitle.textContent =
        selectedPortfolio.title;

        portfolioCategory.textContent =
        selectedPortfolio.category;

        portfolioDescription.textContent =
        selectedPortfolio.description;

        portfolioLink.href =
        selectedPortfolio.link;

    });

});

// =========================
// GENERATE TEAM
// =========================

const teamWrapper =
document.getElementById('teamWrapper');

teamData.forEach((team, index) => {

    teamWrapper.innerHTML += `

        <div 
            class="team-item"

            data-aos="fade-up"

            data-aos-delay="${index * 100}"
        >

            <div class="team-shape"></div>

            <div class="team-image">

                <img 
                    src="${team.image}" 
                    alt="${team.name}"
                >

                <!-- Social Media -->
                <div class="team-socials">

                    <a 
                        href="${team.socials.instagram}"
                        class="social-icon"
                    >
                        <i class="fa-brands fa-instagram"></i>
                    </a>

                    <a 
                        href="${team.socials.facebook}"
                        class="social-icon"
                    >
                        <i class="fa-brands fa-facebook-f"></i>
                    </a>

                    <a 
                        href="${team.socials.youtube}"
                        class="social-icon"
                    >
                        <i class="fa-brands fa-youtube"></i>
                    </a>

                </div>

                <!-- Toggle Button -->
                <button class="team-btn">
                    +
                </button>

            </div>

            <div class="team-content">

                <h3>
                    ${team.name}
                </h3>

                <span>
                    ${team.role}
                </span>

            </div>

        </div>

    `;

});

// =========================
// GENERATE TESTIMONIAL
// =========================

const testimonialWrapper =
document.getElementById(
    'testimonialWrapper'
);

const testimonialIndicators =
document.getElementById(
    'testimonialIndicators'
);

// SPLIT PER 3 CARD
const chunkSize = 3;

for(
    let i = 0;
    i < testimonialData.length;
    i += chunkSize
){

    const chunk =
    testimonialData.slice(
        i,
        i + chunkSize
    );

    // CREATE SLIDE
    testimonialWrapper.innerHTML += `

        <div class="
            carousel-item
            ${i === 0 ? 'active' : ''}
        ">

            <div class="testimonial-wrapper">

                ${chunk.map((item) => `

                    <div class="testimonial-card">

                        <div class="testimonial-image">

                            <img 
                                src="${item.image}" 
                                alt="${item.name}"
                            >

                        </div>

                        <p>
                            ${item.review}
                        </p>

                        <h4>
                            — ${item.name}
                        </h4>

                    </div>

                `).join('')}

            </div>

        </div>

    `;

    // INDICATOR
    testimonialIndicators.innerHTML += `

        <button
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide-to="${i / chunkSize}"
            class="${
                i === 0
                ? 'active'
                : ''
            }"
        ></button>

    `;
}

// =========================
// TEAM SOCIAL TOGGLE
// =========================
const teamButtons =
document.querySelectorAll('.team-btn');

teamButtons.forEach((button) => {

    button.addEventListener('click', (e) => {

        e.stopPropagation();

        const teamItem =
        button.closest('.team-item');

        // Toggle class
        teamItem.classList.toggle('active');

        // Toggle text
        button.textContent =
        teamItem.classList.contains('active')
        ? '-'
        : '+';

    });

});

// =========================
// MODAL ELEMENT
// =========================

const modalTitle =
document.getElementById('modalMenuTitle');

const modalPrice =
document.getElementById('modalMenuPrice');

const modalImage =
document.getElementById('modalMenuImage');

const modalDescription =
document.getElementById('modalMenuDescription');


// =========================
// MENU CLICK
// =========================

document.addEventListener('click', (e) => {

    const menuItem = e.target.closest('.menu-item');

    if(!menuItem) return;

    const index = menuItem.dataset.index;

    const selectedMenu = menuData[index];

    modalTitle.textContent =
    selectedMenu.title;

    modalPrice.textContent =
    selectedMenu.price;

    modalImage.src =
    selectedMenu.image;

    modalDescription.textContent =
    selectedMenu.description;

});

AOS.init({

    duration: 600,

    once: true,

    offset: 60,

    duration: 1200,

    easing: 'ease-out',

    once: true,


});

AOS.refresh();