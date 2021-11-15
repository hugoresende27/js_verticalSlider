const slider = document.querySelector('.slider-main')
const sliDir = document.querySelector('.dir-slide')
const sliEsq = document.querySelector('.esq-slide')
const btnUp = document.querySelector('.up-btn')
const btnDown = document.querySelector('.down-btn')
const slidesLength = sliDir.querySelectorAll('div').length/*VAI SELECCIONAR TODAS AS DIVS EM sliDir */

console.log(slidesLength)

let slideAtivoIndex = 0

sliEsq.style.top=`-${(slidesLength-1) * 100}vh`/*PARA OBTER O ULTIMO INDEX */

btnUp.addEventListener('click', () => mudaSlide('up'))
btnDown.addEventListener('click', () => mudaSlide('down'))

const mudaSlide = (dir) => {
    const sliHeight = slider.clientHeight
    console.log(sliHeight)
    if (dir === 'up') {
        slideAtivoIndex++
        if(slideAtivoIndex > slidesLength -1 ){
            slideAtivoIndex = 0
        }
    } else if (dir == 'down') {
        slideAtivoIndex--
        if(slideAtivoIndex < 0 ){
            slideAtivoIndex = slidesLength -1
        }
    }

    sliDir.style.transform = `translateY(-${slideAtivoIndex * sliHeight}px )`
    sliEsq.style.transform = `translateY(${slideAtivoIndex * sliHeight}px )`
}