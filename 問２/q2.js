const box = document.createElement("div");
box.style.width = "120px";
box.style.height = "150px";
box.style.backgroundColor = "red";

box.addEventListener("click", function () {
  box.remove();
});

document.body.appendChild(box);