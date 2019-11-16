let container = document.querySelector('#grid-container');

createGrid(16);

function createGrid(num) {
  for (let i = 0; i < num * num; i++) {
    let cell = document.createElement('div');
    cell.setAttribute('id', i);
    cell.classList.add('cell');
    cell.setAttribute('onmouseover', 'setBlackBg()');
    container.appendChild(cell);

  }
}

function changeGridSize() {
  let returnPrompt = prompt('How big would you like the grid to be? Please enter a number between 5 and 75.');
  let newGridSize = parseInt(returnPrompt);
  if (Number.isInteger(newGridSize) && newGridSize >= 5 && newGridSize <= 75) {
    deleteGrid();
    container.style.setProperty('grid-template-columns', "repeat(" + newGridSize + ", 1fr)");
    container.style.setProperty('grid-template-rows', "repeat(" + newGridSize + ", 1fr)");
    createGrid(newGridSize);
  } else {
    alert('Please enter a number between 5 and 75.');
  }  
}

function deleteGrid() {
  while (container.firstElementChild) {
    container.removeChild(container.firstElementChild);
  }
}

function clearGrid() {
  deleteGrid();
  container.style.setProperty('grid-template-columns', 'repeat(16, 1fr)');
    container.style.setProperty('grid-template-rows', 'repeat(16, 1fr)');
  createGrid(16);
}

function setBlackBg() {
  let gridCells = document.querySelectorAll('.cell');
  gridCells.forEach(cell => cell.setAttribute('onmouseover', 'makeBlackBg()'));
}

function makeBlackBg() {
  document.getElementById(event.target.id).setAttribute('style', 'background-color: black');
}

function setRandom() {
  let gridCells = document.querySelectorAll('.cell');
  gridCells.forEach(cell => cell.setAttribute('onmouseover', 'makeRandom()'));
}

function makeRandom() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let randomColor = `rgb(${x},${y},${z})`;
  console.log(randomColor);
  document.getElementById(event.target.id).style.background = randomColor;
}







        