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

// calcInput.addEventListener('click', () => {
//     calcInput.blur();
// })

const check = (str) => {
    let calcInputStr = calcInput.value.split('');
    let cISLS = calcInputStr[calcInputStr.length - 1];
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
        calcInput.value += el.textContent;
    });
});

calcBtnMul.addEventListener('click', () => {
    check('*');
});

calcBtnDiv.addEventListener('click', () => {
    check('/');
});

calcBtnPlus.addEventListener('click', () => {
    check('+');
});

calcBtnMinus.addEventListener('click', () => {
    check('-');
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
    try {
        if (eval(calcInputStr) !== Infinity) {
            if (`${eval(calcInputStr)}`.length < 10) {
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
        calcInput.value = 0;
    }
});

