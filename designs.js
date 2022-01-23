// Select color input
// Select size input

const maxWidth = 300;
const maxHeight = maxWidth;
const submitGrid = document.getElementById('sizePicker');
const colorChoice = document.getElementById('colorPicker');
const theCanvas = document.getElementById('pixelCanvas');

// When size is submitted by the user, call makeGrid()
submitGrid.addEventListener('submit', function(event) {
                            makeGrid();
                            event.preventDefault(); }
                           ); // Need this to get form not to reset?

function cellColorChange() {
  let pixelColor = colorChoice.value;

  alert("clicked on box");
}

function makeGrid() {

  let msg = "height: " + this.inputHeight.value +
    "\nwidth: " + this.inputWidth.value;

  for(let row = 1; row <= 30 /*this.inputHeight.value*/; row++) {
    const newRowElement = document.createElement('tr');
    for(let col = 0; col < 30 /*this.inputHeight.value*/; col++) {
        newRowElement.insertCell(col);
        theCanvas.appendChild(newRowElement);
    }  // col loop
  }  // row loop

  let td = theCanvas.querySelectorAll('td');
  //alert("td length= " + td.length);
  td.forEach(function(tdItem) {
    tdItem.addEventListener('click',cellColorChange);
  });


}
