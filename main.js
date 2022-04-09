//CREATING GRID
const grid = document.querySelector('.grid');

for(i = 0; i < 256; i++) {
    const i = document.createElement('grid');
    grid.append(i);
}

//MOUSEOVER COLORCHANGE
function changecolor() {
    this.style.backgroundColor = "black";
}
document.querySelectorAll('grid').forEach(item => {
    item.addEventListener('mouseover', changecolor)
})

//RESET FUNCTION
function reset(){
    document.querySelectorAll('grid').forEach(item => {
    item.style.backgroundColor = "white";
    })
}


const body = document.querySelector('body');
const resetBtn = document.createElement('button');
resetBtn.textContent = 'reset';
resetBtn.addEventListener('click', reset)
body.append(resetBtn);