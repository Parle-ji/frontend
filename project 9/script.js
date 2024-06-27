let elems = document.querySelectorAll('.elem');

elems.forEach((elem) => {
    let img = elem.querySelector('img'); // Har .elem ke andar ek image access karna
    elem.addEventListener('mousemove', (e) => {
        console.log(e);
        if (img) { 
            img.style.position = 'absolute'; 
            img.style.top = e.offsetY + 'px';
            img.style.left = e.offsetX + 'px'; 
          
        }
    });
});


// let elems = document.querySelectorAll('.elem');

// elems.forEach((elem) => {
//     let img = elem.querySelector('img'); // Har .elem ke andar ek image access karna
//     elem.addEventListener('mousemove', (e) => {
//         console.log(e);
//         if (img) { // Check if image exists
//             img.style.position = 'absolute'; // Ensure the image position is absolute
//             img.style.top = e.clientY + 'px';
//             img.style.left = e.clientX + 'px';
//         }
//     });
// });
