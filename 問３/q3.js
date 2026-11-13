let score = 0;
const scoreDisplay = document.createElement("p");
scoreDisplay.textContent = "得点：" + score;
document.body.appendChild(scoreDisplay);
const box = document.createElement("div");
box.style.width = "120px";
box.style.height = "150px";
box.style.backgroundColor = "red";

box.addEventListener("click", function () {
  score++; 
  scoreDisplay.textContent = "得点：" + score; 
  box.remove();
});

document.body.appendChild(box);