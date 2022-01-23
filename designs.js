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
  alert("clicked on box");
}

function makeGrid() {

  let msg = "height: " + this.inputHeight.value +
    "\nwidth: " + this.inputWidth.value;
  let row = 1;

  for(row; row <= 30 /*this.inputHeight.value*/; row++) {
    const newRowElement = document.createElement('tr');
    //theCanvas.appendChild(newRowElement);
    for(let col = 0; col < 30 /*this.inputHeight.value*/; col++) {
        newRowElement.insertCell(col);
        newRowElement.rows[row].cells[col].innerText = 'z';
        //newRowElement.getElementsByClassName('td').addEventListener('click',cellColorChange);
        //theCanvas.getElementsByClassName('td').innerText = 'x';

        theCanvas.appendChild(newRowElement);
        const newCell = theCanvas.getElementsByTagName('td');
        newCell.textContent ='x';
        //theCanvas.insertAdjacentHTML('beforeend',newRowElement);
        //theCanvas.getElementsByClassName('td').innerText = 'x';

    }


  }

  pixelColor = colorChoice.value;
  msg += "\nLooped " + row + " times.";
  msg +="\nColor: " + pixelColor;
  //alert(msg);

}
