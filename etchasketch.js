// container to hold all them div's
const container = document.createElement('div');
container.setAttribute('id',"grid-container");
document.body.appendChild(container);

container.style.textAlign = "center";
container.style.padding = "10px";

function grid(row, columns){

    for(let j=0; j< row;j++){
      // for every time this runs it will run the inner loop first.
      for(let i=0; i<columns;i++){
        var div = document.createElement('div');
        div.setAttribute('class',"content");
        container.appendChild(div);

        div.style.border = "1px solid salmon";
        div.style.padding = "10px";
        div.style.width = "1%";
        div.style.boxSizing = "border-box";
        div.style.display = 'inline-block';
        div.style.margin = "-5px 0px 0px auto";
      }
      var br = document.createElement('br');
      container.appendChild(br);
    }
    // this piece of code select evething with a class name "content"
    // assgins the nodelist to a variable
    var contents = document.querySelectorAll('.content');
    // this assigns an Evenetlister For Each, item in the nodelist.
    contents.forEach((content) =>{
      content.addEventListener('mouseenter',(e) => {
        e.target.style.background = "rgb("+e.offsetX+", 200, "+e.clientY+")";
        console.log(e.target.style.background);
      });
    });


}
 grid(16,16);

 function gridClear(e){
   let existingPixels = document.querySelectorAll('.content')
   existingPixels.forEach((content) => {
   container.removeChild(content);
   });
   var newSize = prompt("Enter Grid Size?");
   return grid(newSize,newSize);
 }
