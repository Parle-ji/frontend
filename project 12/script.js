alert('Aapna tej samharo aape...');
let boxes = document.querySelectorAll('.box');
console.log(boxes);


boxes.forEach((box) => {
    // box.addEventListener("click", (s)=>{
    //     if(box.innerHTML. == 'red')
    //        { box.style.backgroundColor = '#e64230'}

    // })

    box.addEventListener('click', () => {
        if (box.innerHTML == 'red') {
            box.style.backgroundColor = "#e64230";
            box.style.color = 'black'
        }
        if (box.innerHTML == 'hotpink') {
            box.style.backgroundColor = "hotpink";
            box.style.color = 'black'
        }
        if (box.innerHTML == 'yellow') {
            box.style.backgroundColor = "yellow";
            box.style.color = 'black'
        }
        if (box.innerHTML == 'lightgreen') {
            box.style.backgroundColor = 'lightgreen';
            box.style.color = 'black'
        }
        if (box.innerHTML == 'aqua') {
            box.style.backgroundColor = "aqua";
            box.style.color = 'black'
        }
        if (box.innerHTML == 'orange') {
            box.style.backgroundColor = "orange";
            box.style.color = 'black'
        }

        setTimeout(() => {
            box.style.backgroundColor = 'black';
            box.style.color = 'white'
        }, 4000)

    })
})



// box.addEventListener('click', ()=>{
//     if(box.innerHTML == 'red'){
//         box.style.backgroundColor= "#e64230";
//     }
// })

