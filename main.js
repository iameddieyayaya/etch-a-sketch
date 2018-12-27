let monoOn = true;

const gridContainer = document.createElement('div');
gridContainer.setAttribute('class',"grid-container");
document.body.appendChild(gridContainer);

gridContainer.style.display = "inline-grid";
gridContainer.style.padding = "10px";
gridContainer.style.width = "960px";
gridContainer.style.height = "820px";
gridContainer.style.margin = "3px 0px 0px 20%";
gridContainer.style.border = "2px solid black";


createGrid(32);
eListener();
eButtons();
eColor();

//creates and append div to the DOM
function createGrid(squares){
  const grid = document.querySelector('.grid-container')
  const gridStyle = grid.style;
  grid.style.backgroundColor = "red";
  gridStyle.gridTemplateColumns = "repeat("+squares+", auto)";
  gridStyle.gridTemplateRows = "repeat("+squares+", auto)";

  let total = squares*squares;
  for(let i=0;i<total;i++){
    const div = document.createElement('div');
    div.classList.add('item');
    div.style.backgroundColor = "white";
    div.style.border = "2px solid black";

    grid.appendChild(div);
  }
}


function eListener(){
  var items = document.querySelectorAll('.item');
  // this assigns an Evenetlister For Each, item in the nodelist.
  items.forEach((item) =>{
    item.addEventListener('mouseenter', changeItemColor);
    });
}

function newGrid(){
  let dim = prompt("Enter new grid size?");
  if (dim == null) {
      dim = 16;
    }
  else
  removeItemListeners();
  resetGrid();
  removeGrid();
  createGrid(dim);
  eListener();
}

function removeItemListeners(){
  var items = document.querySelectorAll('.item');
  // this assigns an Evenetlister For Each, item in the nodelist.
  items.forEach((item) =>{
    item.removeEventListener('mouseenter', changeItemColor);
    });
}

function resetGrid(){
  var items = document.querySelectorAll('.item');
  // this assigns an Evenetlister For Each, item in the nodelist.
  items.forEach((item) =>{
      item.style.backgroundColor = "white";
    });
}

function removeGrid(){
  const grid = document.querySelector('.grid-container');
  while(grid.hasChildNodes()){
    grid.removeChild(grid.firstChild);
  }
}

function eButtons(){
  const clearBtn = document.querySelector('.clear');
  clearBtn.addEventListener('click', resetGrid);

  const gridBtn = document.querySelector('.grid');
  gridBtn.addEventListener('click', newGrid);

  var button = document.querySelector('.test').addEventListener('click', noWhite);


}

function changeItemColor(e){

  let color;
  let items = document.querySelectorAll('.item');
  let green = randomize(255);
  let blue  = randomize(e.clientX);
  let red  = randomize(e.clientY);


  if(monoOn){
    e.target.style.backgroundColor = "gray";
  }
  else if (!monoOn){
    e.target.style.backgroundColor = "rgb("+red+","+green+","+blue+")";
  }
 else
   e.target.style.backgroundColor = "pink";



}

function eColor(){
  var colorbtn = document.querySelector('.color').addEventListener('click', (e) => {
    monoOn = !monoOn;
  });
}

function randomize(num){
    return Math.floor(Math.random()*num);
}


function noWhite(){
  var items = document.querySelectorAll('.item');
  // this assigns an Evenetlister For Each, item in the nodelist.
  items.forEach((item) =>{
      item.style.background = "none";

    });

    const grid = document.querySelector('.grid-container')
    grid.style.backgroundColor = 'transparent';


}





console.log(document.body);
