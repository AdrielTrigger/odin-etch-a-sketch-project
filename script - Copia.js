let canvas = document.querySelector('.canvas');
let ref = document.querySelector('.ref');
let i;
let j;

for (i = 1; i <= 16; i++) {
    for (j = 1; j <= 16; j++) {
        dot = document.createElement('div');
        dot.classList.add('unpainted');
        canvas.appendChild(dot);
    }
}

function refresh() {
    alert('function is running');
    let dots = document.querySelectorAll('div.unpainted');
    let z;
    for (z = 0; z <= i * j; z++) {
        dots.classList.remove('painted');
    }
}

ref.addEventListener('click', refresh);

for (let x = 0; x <= i * j; x++) {
    let dots = document.querySelectorAll('div.unpainted');
    dots[x].addEventListener('mouseover', () => {
        dots[x].classList.add('painted');
    });
}