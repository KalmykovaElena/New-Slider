const slides = document.querySelectorAll('.slider__slide')
const dots = document.querySelectorAll('.dot')
const prevBtn = document.querySelector('#btn-prev')
const nextBtn = document.querySelector('#btn-next')
let index = 0

nextBtn.addEventListener('click', nextSlide)
prevBtn.addEventListener('click', prevSlide)
dots.forEach((el,i)=>{
    el.addEventListener('click',()=>{
        removeActive()
        index=i
        addActive()
    })
})
function nextSlide() {
    removeActive()

    if (index == slides.length - 1) index = 0
    else index++
    addActive()
}

function prevSlide() {
    removeActive()
    if (index ==0 ) index = slides.length - 1
    else index--
    addActive()
}
function removeActive(){
    slides.forEach(e => {
        e.classList.remove('active')
    })
    dots.forEach(e => {
        e.classList.remove('active')
    })
}
function addActive(){
    slides[index].classList.add('active')
    dots[index].classList.add('active')
}