//Step 1: Create webpage with a 16x16 grid of squares divs

// container to hold all them div's
const container = document.createElement('div');
container.setAttribute('id',"container");
document.body.appendChild(container);

container.style.padding = "10px";
container.style.border = "1px solid green";


var row = 6;
var columns = 6;


  for(j=0; j< row;j++){
    // for every time this runs it will run the inner loop first.
    for(i=0; i<columns;i++){
      var div = document.createElement('div');
      div.setAttribute('class',"content");
      container.appendChild(div);

      div.innerHTML = "row #" + i;

      // div.style.color = 'blue';
      div.style.border = "1px solid salmon";
      div.style.padding = "20px";
      div.style.display = "grid";
      div.style.display = 'inline-block';

    }
    var br = document.createElement('br');
    container.appendChild(br);
  }

const something = document.getElementsByClassName("content");
// something.style.color = "blue";

console.log(something);

// function myFunction() {
//   var x = document.getElementsByClassName("content");
//   var i;
//   for (i = 0; i < x.length; i++) {
//     x[i].style.color = "pink";
//   }
// }
// myFunction();

console.log(container)
console.log(document.body)

// content.style.color = "blue";
// console.log(content);
// div.style.display = "inline-Block";
// div.style.backgroundColor = "red";
