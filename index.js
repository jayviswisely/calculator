let screen = document.querySelector('.screen')
let buttons = document.querySelectorAll('.button')
let clear = document.querySelector('.clear')
let equal = document.querySelector('.equal')

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let value = e.target.dataset.num
        screen.value += value
    })
})

equal.addEventListener('click', (e) => {
    if(screen.value === '') {
        screen.value = '';
    } else {
        let answer = eval(screen.value);
        screen.value = answer;
    }
})

clear.addEventListener('click', (e) => {
    screen.value = '';
})