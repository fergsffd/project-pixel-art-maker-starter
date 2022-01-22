// Select color input
// Select size input

const maxWidth = 300;
const maxHeight = maxWidth;
const submitGrid = document.getElementById('sizePicker');
const colorChoice = document.getElementById('colorPicker');
const theCanvas = document.getElementById('pixelCanvas');

// When size is submitted by the user, call makeGrid()
submitGrid.addEventListener('submit', makeGrid);

function makeGrid() {
  let msg = "height: " + this.inputHeight.value +
    "\nwidth: " + this.inputWidth.value;
let row = 1;
  for(row; row <= this.inputHeight.value; row++) {
    const newRowElement = document.createElement('tr');
    for(let col = 1; col <= this.inputWidth.value; col++) {
        const newColElement = document.createElement('td');
        newColElement.addEventListener('click',function() {
          alert("click on box");
        });
        theCanvas.appendChild(newColElement);
    }
    theCanvas.appendChild(newRowElement);
  }
  pixelColor = colorChoice.value;
  msg += "\nLooped " + row + " times.";
  msg +="\nColor: " + pixelColor;
  //alert(msg);
}
