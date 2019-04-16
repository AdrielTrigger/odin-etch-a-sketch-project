let canvas = document.querySelector('.canvas');
let ref = document.querySelector('.ref');
let res = document.querySelector('.resize');
let i;
let j;

for (i = 0; i <= 16; i++) {
    for (j = 0; j <= 16; j++) {
        dot = document.createElement('div');
        dot.classList.add('unpainted');
        canvas.appendChild(dot);
    }
}

function refresh() {
    dots = document.getElementsByClassName('unpainted');
    for (let z = 0; z <= i * j; z++) {
        dots[z].classList.remove('painted');
    }
}

ref.addEventListener('click', refresh);

function resizing() {
    dots = document.getElementsByClassName('unpainted');
    for (let q = i * j; q >= 0; q--) {
        canvas.removerChild(dots[q]);
    }
    let side = prompt('Set number of squares per side:', 0);
    canvas.style.gridTemplate = 'repeat(' + side + ', 1fr) / (' + side + ', 1fr)';
}

res.addEventListener('click', resizing);

for (let x = 0; x <= i * j; x++) {
    dots = document.getElementsByClassName('unpainted');
    dots[x].addEventListener('mouseover', () => {
        dots[x].classList.add('painted');
    });
}