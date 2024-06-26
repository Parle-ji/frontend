let crsr = document.querySelector('.crsr');
let card = document.querySelector('.card');


card.addEventListener('mousemove', (e) => {
   
    crsr.style.top = `${e.clientY}px`;
    crsr.style.left = `${e.clientX}px`; 

    // crsr.style.top = e.clientY + 'px';
    // crsr.style.left = e.clientX + 'px';
});