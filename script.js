const number_1 = document.querySelector('#number_1');
const number_2 = document.querySelector('#number_2');
const result = document.querySelector('#result');

const buttonSum = document.querySelector('#sum');
const buttonSub = document.querySelector('#subtraction');
const buttonMult = document.querySelector('#multiplication');
const buttonDiv = document.querySelector('#division');

buttonSum.addEventListener("click", (event) => {

    let num_1 = Number(number_1.value);
    let num_2 = Number(number_2.value);
    let sum = num_1 + num_2;

    result.value = sum;

});

buttonSub.addEventListener("click", (event) => {

    let num_1 = Number(number_1.value);
    let num_2 = Number(number_2.value);
    let sum = num_1 - num_2;

    result.value = sum;

});

buttonMult.addEventListener("click", (event) => {

    let num_1 = Number(number_1.value);
    let num_2 = Number(number_2.value);
    let sum = num_1 * num_2;

    result.value = sum;

});

buttonDiv.addEventListener("click", (event) => {

    let num_1 = Number(number_1.value);
    let num_2 = Number(number_2.value);
    let sum = num_1 / num_2;

    result.value = sum;

});