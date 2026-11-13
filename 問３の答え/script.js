let score = 0;
let p = document.createElement('p');
p.textContent = '得点：' + score;
document.body.appendChild(p);

let div = document.createElement('div');
div.style.width = '120px';
div.style.height = '150px';
div.style.backgroundColor = 'red';

div.addEventListener('click', function () {
    score++;
    p.textContent = '得点：' + score;
    div.remove();
});

document.body.appendChild(div);