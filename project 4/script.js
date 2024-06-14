let shareBtn = document.querySelector("#shareBtn");
let fadedBg = document.querySelector(".faded-bg");
let shareProfile = document.querySelector(".share-profile");
let close = document.querySelector(".close");

shareBtn.addEventListener("click", () => {
  fadedBg.style = " display:block;";
  shareProfile.style = " display:block;";
});

fadedBg.addEventListener("click", () => {
  fadedBg.style = "display:none; ";
  shareProfile.style = " display:none;";
});

close.addEventListener("click", () => {
  fadedBg.style = "display:none; ";
  shareProfile.style = " display:none;";
});
