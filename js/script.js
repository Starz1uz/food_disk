let open_buttons = document.querySelectorAll('[data-modal]')
let close_buttons = document.querySelectorAll('[data-close]')
let modal = document.querySelector('.modal')

function open_close_modal(arr, open) {
    arr.forEach(button => {
        button.onclick = () => {
            modal.classList[open ? "add" : "remove"]('show', 'fade')
            document.body.style.overflow = open ? "hidden" : "scroll"
        }
    });
}


open_close_modal(open_buttons, true)
open_close_modal(close_buttons, false)

let timer = document.querySelector('.timer')

const minutes = document.querySelector('#minutes')
const seconds = document.querySelector('#seconds')

setInterval(() => {
    seconds.innerHTML--
    if (seconds.innerHTML <= -1) {
        seconds.innerHTML = 59
        minutes.innerHTML--
    }

}, 1000);

const offer__slider = document.querySelectorAll('.offer__slide')
// const second_slide = document.querySelectorAll('.offer__slider')
const prev_next_btn = document.querySelectorAll('[data-group]')
const idx_btn = document.querySelector('#current')
let tnt = 0

show(tnt)
function show(n) {

    //mistake
    if (n >= offer__slider.length){
        tnt = 0
    }

    if (n < 0) {
        tnt = offer__slider.length
    }

    offer__slider.forEach(slide => slide.classList.add('hide'))
    offer__slider[tnt].classList.remove('hide')

}

prev_next_btn.forEach(btn => {
    btn.onclick = () => {
        const act = btn.getAttribute('[data-group]')

        if (act === 'prev') {
            tnt--
            idx_btn.innerHTML = tnt
            show(tnt)
        } else {
            tnt++
            idx_btn.innerHTML = tnt

            show(tnt)
        }
    }
    
})



let Another = document.querySelectorAll('.tabheader__item')

Another.forEach(check => {
    check.onclick = () => {

    }
})