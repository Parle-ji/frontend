heart = document.querySelector("[heart]");
card = document.querySelector(".card");

function like() {
  card.addEventListener("dblclick", () => {

    heart.classList.add('block')
    heart.classList.remove('hide');
    
    setTimeout(() => {
      // heart.classList.add('hide');

      heart.classList.remove('block'); // Remove the block class
      heart.classList.add('hide');
    }, 2000);
  });
}


like();

// card.addEventListner("click", () => {
//   card.classList.add('hide')
// });




// div.classList.remove("foo");
// div.classList.add("anotherclass")