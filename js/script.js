// Navbar Scroll//
const navbar = document.querySelector('header')
const logo_home = document.querySelector('.navbar--logo')
const toggle_nav = document.querySelector('.navbar--toggle')
const navbar_link = document.querySelector('.navbar--link')

toggle_nav.addEventListener('click', () => {
    navbar_link.classList.toggle('hidden')
})

logo_home.addEventListener('click', () => {
    window.location.href = "index.html"
})

window.addEventListener('scroll', (e) => {
    if (e.path[1].scrollY > 10) {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)'
    } else {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
    }
})


// Section 1 //
slides = document.querySelectorAll('.slide')
slidesImg = document.querySelectorAll('.slide-img')
btn_prev = document.querySelector('.btn-prev')
btn_next = document.querySelector('.btn-next')
const arr_slide = [0, 1, 2, 3, 4]
let current_slide = 0


const removeActiveSlide = () => {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}

btn_next.addEventListener('click', () => {
    current_slide++
    if (current_slide > arr_slide.length - 1) {
        current_slide = 0
    }
    removeActiveSlide()
    slides[current_slide].classList.add('active')
    clearInterval(autoSlide)
    autoSlide = setInterval(() => {
        current_slide++
        if (current_slide > arr_slide.length - 1) {
            current_slide = 0
        }
        removeActiveSlide()
        slides[current_slide].classList.add('active')
    }, 5000)
})

btn_prev.addEventListener('click', () => {
    current_slide--
    if (current_slide < 0) {
        current_slide = arr_slide.length - 1
    }
    removeActiveSlide()
    slides[current_slide].classList.add('active')
    clearInterval(autoSlide)
    autoSlide = setInterval(() => {
        current_slide++
        if (current_slide > arr_slide.length - 1) {
            current_slide = 0
        }
        removeActiveSlide()
        slides[current_slide].classList.add('active')
    }, 5000)
})

let autoSlide = setInterval(() => {
    current_slide++
    if (current_slide > arr_slide.length - 1) {
        current_slide = 0
    }
    removeActiveSlide()
    slides[current_slide].classList.add('active')
}, 5000)


// Section 3
const icons_outline = document.querySelectorAll('.section-3--icon')
const icons_fill = document.querySelectorAll('.section-3--icon-fill')
const progress_fill = document.querySelector('.section-3--progress-fill')
const icons = document.querySelectorAll('.section-3--icons')

function repeat_icons() {
    icons_fill.forEach((icon) => {
        icon.style.opacity = '0';
    })
    icons_outline.forEach((icon) => {
        icon.style.opacity = '1';
    })
    icons.forEach((icon) => {
        icon.style.backgroundColor = '#fff'
    })
    progress_fill.style.width = 0;
}

let current_icon = 0
var show;
function icons_show() {
    icons_fill[current_icon].style.opacity = '1';
    icons_outline[current_icon].style.opacity = '0';
    icons[current_icon].style.backgroundColor = '#b08968';
    if (current_icon == 0) {
        progress_fill.style.width = 0 + '%' ;
    } else {
        progress_fill.style.width = (((current_icon / 4) * 100) * 70) / 100 + '%' ;
    }
    current_icon++;
    if (current_icon > icons_fill.length - 1) {
        current_icon = 0;
    }
    show = setTimeout(() => {
        clearTimeout(show)
        icons_show()
    }, 2000)
}

setInterval(() => {
    repeat_icons()
}, 10000)

icons_show()

// Section 4
const hover_img = document.querySelectorAll('.section-4--container')
hover_img.forEach((img) => {
    img.addEventListener('mouseenter', () => {
        img.children[0].style.filter = 'brightness(65%)'
    })
    img.addEventListener('mouseleave',  () => {
        img.children[0].style.filter = 'brightness(50%)'
    })
})


// Section 6
const form = document.querySelector('.section-6--form')
const btn_form = document.querySelector('.section-6--btn')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const inputs = document.querySelectorAll('.section-6--input')
    inputs.forEach(input => {
        input.value = '';
    })
    alert('Đã gửi thành công')
})
