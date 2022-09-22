"use strict";
const container = document.querySelector(".container");
const button = document.querySelector(".btn");

//btn metods
button.addEventListener("click", () => {
  const out = Number(prompt("Enter grid size max 100x100"));

  if (out >= 100) {
    return alert("longer then 100 or invalid input ");
  }
  if (out == "") {
    return alert("longer then 100 or invalid input ");
  }
  console.log(typeof out);
  return makeRows(out, out);
});

function makeRows(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (let c = 0; c < rows * cols; c++) {
    let cell = document.createElement("button");
    // cell.innerText = c + 1;
    container.appendChild(cell).className = "grid-item";
  }
}
