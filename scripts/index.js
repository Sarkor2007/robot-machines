var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        1275: {
            slidesPerView: 3.3,
            spaceBetween: 25,
        },
        1100: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        580: {
            slidesPerView: 1.5,
            spaceBetween: 30,
        }
    },
});

var swiper = new Swiper(".mySwiperTwo", {
    slidesPerView: 1,
    spaceBetween: 25,
    breakpoints: {
        1270: {
            slidesPerView: 4,
            spaceBetween: 25,
        },
        950: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        790: {
            slidesPerView: 2.5,
            spaceBetween: 15,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        480: {
            slidesPerView: 1.5,
            spaceBetween: 15,
        }
    },
});

var swiper = new Swiper(".mySwiperThree", {
    slidesPerView: 1.2,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        1000: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        670: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        460: {
            slidesPerView: 2,
            spaceBetween: 20,
        }
    }
});


const accordionHead = document.querySelectorAll('.questions__item-header');
const accordionBody = document.querySelectorAll('.questions__item-body');
const accordionArrow = document.querySelectorAll('.questions__item-header-img');

for (let i = 0; i < accordionHead.length; i++) {
    accordionHead[i]?.addEventListener('click', () => {
        accordionBody[i].classList.toggle('active');
        accordionArrow[i].classList.toggle('active');
        if (accordionBody[i].classList.contains('active')) {
            accordionBody[i].style.minHeight = accordionBody[i].scrollHeight + 50 + 'px';
        } else {
            accordionBody[i].style.minHeight = '0';
        }
    })
}


const navBtn = document.querySelector('.nav__open');
const navBar = document.querySelector('.nav');
const navOpen = document.querySelector('.nav__open-btn');
const body = document.querySelector('body');
const filter = document.querySelector('.filter');
const navListItem = document.querySelectorAll('.nav__list-link');
const navExit = document.querySelector('.nav__exit-btn');

navBtn?.addEventListener('click', () => {
    navBar.classList.toggle('active');
    filter.classList.toggle('active');
    navOpen.classList.toggle('active');
    body.classList.toggle('active');
})

filter?.addEventListener('click', () => {
    navBar.classList.remove('active');
    filter.classList.remove('active');
    navOpen.classList.remove('active');
    body.classList.remove('active');
});


navExit?.addEventListener('click', () => {
    navBar.classList.remove('active');
    filter.classList.remove('active');
    navOpen.classList.remove('active');
    body.classList.remove('active');
});


navListItem?.forEach(el => {
    el.addEventListener('click', () => {
        navBar.classList.remove('active');
        filter.classList.remove('active');
        navOpen.classList.remove('active');
        body.classList.remove('active');
    })
});


function animateFrom(elem, direction) {
    direction = direction || 1;
    var x = 0,
        y = direction * 100;
    if (elem.classList.contains("gs_reveal_fromLeft")) {
        x = -150;
        y = 0;
    } else if (elem.classList.contains("gs_reveal_fromRight")) {
        x = 150;
        y = 0;
    }
    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";
    gsap.fromTo(elem, { x: x, y: y, autoAlpha: 0 }, {
        duration: 1.2,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: "easeInOut",
        overwrite: "auto"
    });
}

function hide(elem) {
    gsap.set(elem, { autoAlpha: 0 });
}

document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".gs_reveal").forEach(function (elem) {
        hide(elem);

        ScrollTrigger.create({
            trigger: elem,
            onEnter: function () { animateFrom(elem) },
            // onEnterBack: function () { animateFrom(elem, -1) },
            // onLeave: function () { hide(elem) }
        });
    });
});



gsap.registerPlugin(ScrollTrigger);
gsap.to('progress', {
    value: 100,
    ease: 'none',
    scrollTrigger: { scrub: 0.3 }
});


const showAnim = gsap.from('.header', {
    yPercent: -100,
    paused: true,
    duration: 0.2
}).progress(1);

ScrollTrigger.create({
    start: "top top",
    end: 99999,
    onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse()
    }
});


let language = JSON.parse(localStorage.getItem('lang')) || 'uz';
const article = document.querySelectorAll('.about__list-text');
const articleText = document.querySelectorAll('.about__list-text p');
const articleBtn = document.querySelectorAll('.about__list-text span');


async function loadTranslations(el) {
    const response = await fetch(`scripts/lang/${el}.json`);
    let currentLang = await response.json();
    function setLang() {
        for (const key in currentLang.textContent) {
            if (document.getElementById(`${key}`)) {
                document.getElementById(`${key}`).innerHTML = currentLang.textContent[key];
            }
        }
        for (const key in currentLang.placeholder) {
            if (document.getElementById(`${key}`)) {
                document.getElementById(`${key}`).placeholder = currentLang.placeholder[key];
            }
        }
    }
    await setLang()

    for (let i = 0; i < articleText.length; i++) {
        let el = articleText[i]
        if (el.scrollHeight > el.clientHeight) {
            articleBtn[i].classList.add('about__list-btn')
        }
    }
}


let articleResponsive = '72px'

if (window.matchMedia('(max-width: 1270px)').matches && window.matchMedia('(min-width: 501px)').matches) {
    articleResponsive = '60px'
} else if (window.matchMedia('(max-width: 500px)').matches && window.matchMedia('(min-width: 401px)').matches) {
    articleResponsive = '52px'
} else if (window.matchMedia('(max-width: 400px)').matches) {
    articleResponsive = '44px'
}

for (let i = 0; i < articleBtn.length; i++) {
    articleBtn[i]?.addEventListener('click', () => {
        articleText[i].classList.toggle('active');
        if (articleText[i].classList.contains('active')) {
            articleText[i].style.maxHeight = `${articleText[i].scrollHeight}px`;
        } else {
            articleText[i].style.maxHeight = articleResponsive
        }
        articleBtn[i].classList.toggle('active');
        if (articleBtn[i].classList.contains('active')) {
            articleBtn[i].innerHTML = 'меньше'
        } else {
            articleBtn[i].innerHTML = 'ещё'
        }
    })
}

function setWeclomeBg(lang) {
    if (document.querySelector('.welcome-img')) {
        if (lang == 'uz') {
            document.querySelector('.welcome-img').src = 'images/images/welcome-uz.webp';
        } else {
            document.querySelector('.welcome-img').src = 'images/images/welcome.webp';
        }
    }
}


loadTranslations(language);
setWeclomeBg(language)

const lang = document.querySelector('.contact-lang');

lang?.addEventListener('click', () => {
    if (language === 'uz') {
        language = 'ru';
    } else {
        language = 'uz';
    }
    setWeclomeBg(language)
    loadTranslations(language);
    localStorage.setItem('lang', JSON.stringify(language));
})


// for (let j = 0; j < articleText.length; j++) {
//     articleText[j].classList.remove('active');
//     articleBtn[j].classList.remove('active');
//     if (articleText[j].classList.contains('active')) {
//         articleText[j].style.maxHeight = `${articleText[j].scrollHeight}px`;
//     } else {
//         articleText[j].style.maxHeight = '72px'
//     }
// }

