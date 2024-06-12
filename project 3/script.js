
console.log('aapan tej samharo aape')

let btnOne = document.querySelector('#plus');
let btnMinus = document.querySelector('#minus');
let result = document.querySelector('.result');
result.textContent = 0;

btnOne.style.cssText = 'color:red; border-right: 1px solid black; padding:1rem auto; border-radius:5px;';

btnMinus.style.cssText = 'color:red; border-left: 1px solid black; padding:1rem auto; border-radius:5px;';

result.style.cssText = 'color:red; text-align:center; font-size:2rem; margin-bottom:2rem';

// btnMinus.style.backgrounColor = 'black;'

function plus(){
    result.textContent = parseInt( result.textContent) + 1;
    if(parseInt(result.textContent) > 10){
        result.textContent = 0;
    }
}
function minus(){
    result.textContent = parseInt(result.textContent) - 1;
    if(parseInt(result.textContent) < -10){
        result.textContent = 0;
    }
}
btnOne.addEventListener('click',plus);
btnMinus.addEventListener('click', minus)






