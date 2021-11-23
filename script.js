const containerDiv = document.querySelector(".container");
const setGridSizeBtn = document.querySelector("#set-grid");
const resetGrideBtn = document.querySelector("#reset-grid");
let squareDiv;
let setDivSize = 16;
for (let i = 1; i <= 256; i += 1) {
  squareDiv = document.createElement("div");
  squareDiv.className = "square-div";
  containerDiv.appendChild(squareDiv);
}
let allSquareDiv = document.querySelectorAll(".square-div");

allSquareDiv.forEach((div) => {
  div.addEventListener("mouseenter", () => {
    div.classList.add("square-div-hover");
  });
});
setGridSizeBtn.addEventListener("click", () => {
  containerDiv.innerHTML = "";
  setDivSize = parseInt(
    prompt("square divs size? (Pick a number between 4 and 100)", "")
  );
  if (!setDivSize || setDivSize < 4 || setDivSize > 100) {
    window.alert("Please pick a number between 4 and 100!");
  }

  for (let i = 1; i <= setDivSize * setDivSize; i += 1) {
    squareDiv = document.createElement("div");
    squareDiv.className = "square-div";
    // squareDiv.innerHTML = i;
    squareDiv.style.width = `${((1 / setDivSize) * 100).toString()}%`;
    squareDiv.style.height = `${((1 / setDivSize) * 100).toString()}%`;
    containerDiv.appendChild(squareDiv);
  }
  let allSquareDiv = document.querySelectorAll(".square-div");

  allSquareDiv.forEach((div) => {
    div.addEventListener("mouseenter", () => {
      div.classList.add("square-div-hover");
    });
  });
});

resetGrideBtn.addEventListener("click", (setDivSize) => {
  window.location.reload();
});
