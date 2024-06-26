btn = document.querySelector("button");
updateText = document.querySelector("[update-text]");

// // btn.addEventListener('click', () => {
// //     updateText.innerText = 'jai ho';
// //   });

// btn.addEventListener("click", () => {
//   if (updateText === "stranger") {
//     updateText.textContent = `you'r friend now`;
//     btn.textContent = "remove";
//   }
// });

btn.addEventListener("click", () => {
  if (btn.textContent === "add friend") {
    btn.textContent = "remove friend";
    updateText.textContent = "friend added";
  } else {
    btn.textContent = "add friend";
    updateText.textContent = "stranger";
  }
});
