//CREATING GRID
const grid = document.querySelector('.grid');

for(i = 0; i < 256; i++) {
    const i = document.createElement('grid');
    grid.append(i);
}
function changecolor() {
    this.style.backgroundColor = "black";
}

document.querySelectorAll('grid').forEach(item => {
    item.addEventListener('mouseover', changecolor)
})