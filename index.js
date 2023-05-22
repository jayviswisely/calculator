let screen = document.querySelector('.screen')
let buttons = document.querySelectorAll('.button')
let clear = document.querySelector('.clear')
let equal = document.querySelector('.equal')

let operators = ['+', '-', '*', '/']

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let value = e.target.dataset.num;

        if (value === '.') {

            if (screen.value.includes('.')) {
              return;
            }

            if (operators.includes(screen.value.slice(-1))) {
              screen.value += '0';
            }
        }

        if (operators.includes(value)) {
            if (screen.value === '' || operators.includes(screen.value.slice(-1))) {
              return;
            }
        }

        if (operators.includes(value) && operators.includes(screen.value.slice(-1))){
            return;
        }

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