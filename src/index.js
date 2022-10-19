import './style.scss';

const calcBtnNum = document.querySelectorAll('.calc-btn-num');
const calcInput = document.querySelector('.calc-input');
const calcBtnMul = document.querySelector('.calc-btn-mul');
const calcBtnDiv = document.querySelector('.calc-btn-div');
const calcBtnMinus = document.querySelector('.calc-btn-m');
const calcBtnPlus = document.querySelector('.calc-btn-plus');
const calcBtnEr = document.querySelector('.calc-btn-er');
const calcBtnDel = document.querySelector('.calc-btn-del');
const calcBtnEq = document.querySelector('.calc-btn-eq');
const calcBtnMp = document.querySelector('.calc-btn-mp');
const calcBtnMm = document.querySelector('.calc-btn-mm');
const calcBtnMs = document.querySelector('.calc-btn-ms');
const calcBtnMr = document.querySelector('.calc-btn-mr');
const calcBtnMc = document.querySelector('.calc-btn-mc');
const calcBtnBra = document.querySelectorAll('.calc-btn-bra');

calcInput.addEventListener('click', () => {
    calcInput.blur();
})

const check = (str) => {
    let calcInputStr = calcInput.value.split('');
    let cISLS = calcInputStr.at(-1);
    if (cISLS !== str && calcInputStr.length !== 0) {
        calcInput.value += str;
    }
    if (cISLS == '/' || cISLS == '*' || cISLS == '+' || cISLS == '-') {
        cISLS = str;
        calcInputStr = calcInputStr.slice(0, calcInputStr.length - 1);
        calcInput.value = calcInputStr.join('');
        calcInput.value += str;
    }
} 

calcBtnNum.forEach((el) => {
    el.addEventListener('click', () => {
        if (calcInput.value == '0') {
            calcInput.value = '';
        }
        if (calcInput.value.length <= 13) {
            calcInput.value += el.textContent;
        }
    });
});

calcBtnMul.addEventListener('click', () => {
    if (calcInput.value.length <= 13) {
        check('*');
    }
});

calcBtnDiv.addEventListener('click', () => {
    if (calcInput.value.length <= 13) {
        check('/');
    }
});

calcBtnPlus.addEventListener('click', () => {
    if (calcInput.value.length <= 13) {
        check('+');
    }
});

calcBtnMinus.addEventListener('click', () => {
    if (calcInput.value.length <= 13) {
        check('-');
    }
});

calcBtnBra[0].addEventListener('click', () => {
    let calcInputStr = calcInput.value.split('');
    let cISLS = calcInputStr.at(-1);
    if (calcInputStr.length == 1 && calcInputStr.at(-1) == 0) {
        calcInput.value = '';
        calcInput.value += '(';
    }
    if (cISLS == '/' || cISLS == '*' || cISLS == '+' || cISLS == '-') {
        calcInput.value += '(';
    }
});

calcBtnBra[1].addEventListener('click', () => {
    let calcInputStr = calcInput.value.split('');
    let cISLS = calcInputStr.at(-1);
    if (cISLS !== '/' && cISLS !== '*' && cISLS !== '+' && cISLS !== '-' && calcInputStr.length !== 1) {
        let p = false;
        for (let i = 0; i < calcInputStr.length; i++) {
            if (calcInputStr[i] === '(') {
                p = true;
            }
        }
        if (p === true) {
            calcInput.value += ')';
        }
    } else if (cISLS == '/' || cISLS == '*' || cISLS == '+' || cISLS == '-') {
        let p = false;
        for (let i = 0; i < calcInputStr.length; i++) {
            if (calcInputStr[i] === '(') {
                p = true;
            }
        }
        if (p === true) {
            cISLS = ')';
            calcInputStr = calcInputStr.slice(0, calcInputStr.length - 1);
            calcInput.value = calcInputStr.join('');
            calcInput.value += cISLS;
        }
    }
});

calcBtnEr.addEventListener('click', () => {
    calcInput.value = '0';
});

calcBtnDel.addEventListener('click', () => {
    let calcInputStr = calcInput.value.split('');
    calcInputStr = calcInputStr.slice(0, calcInputStr.length - 1);
    calcInput.value = calcInputStr.join('');
    if (calcInputStr.length === 0) {
        calcInput.value = '0';
    }
});

calcBtnEq.addEventListener('click', () => {
    let calcInputStr = calcInput.value;
    let cISLS = calcInputStr.split('').at(-1);
    if (cISLS == '/' || cISLS == '*' || cISLS == '+' || cISLS == '-') {
        calcInputStr = calcInputStr.split('').slice(0, calcInputStr.length - 1);
        calcInputStr = calcInputStr.join('');
        calcInput.value = calcInputStr;
    }
    try {
        if (eval(calcInputStr) !== Infinity) {
            if (`${eval(calcInputStr)}`.length < 14) {
                calcInput.value = eval(calcInputStr);
            } else {
                let a = eval(calcInputStr);
                calcInput.value = `${`${a}`.split('').slice(0, 10).join('')}`;
            }
        } else {
            alert('Erorr :(');
            calcInput.value = 0;
        }
    } catch {
        alert('Erorr :(');
    }
});

// Memory

let memory = '';

calcBtnMs.addEventListener('click', () => {
    document.querySelector('.memory').style.display = 'flex';
    let numbers = `${(calcInput.value).match(/\d{1,}/g)}`.split(',');
    memory = numbers.at(-1);
});

calcBtnMc.addEventListener('click', () => {
    document.querySelector('.memory').style.display = 'none';
    memory = '';
});

calcBtnMr.addEventListener('click', () => {
    calcInput.value += memory;
});

calcBtnMp.addEventListener('click', () => {
    calcInput.value += `+${memory}`;
});

calcBtnMm.addEventListener('click', () => {
    calcInput.value += `-${memory}`;
});