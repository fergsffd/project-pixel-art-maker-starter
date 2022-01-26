const submitGrid = document.getElementById('sizePicker');
const colorChoice = document.getElementById('colorPicker');
const theCanvas = document.getElementById('pixelCanvas');

submitGrid.addEventListener('submit', function(event) {
                            makeGrid();
                            event.preventDefault();
                            }); // Need this to get form not to reset?

// ====================================================
function cellColorChange(myCell) {
  let selectColor = "background-color:" + colorChoice.value;
  myCell.setAttribute('style',selectColor);
}

// ====================================================
function makeGrid() {
  theCanvas.textContent = ""; // reset canvas
  for (let row = 1; row <= this.inputHeight.value; row++) {
      const newRowElement = document.createElement('tr');
      for (let col = 0; col < this.inputWidth.value; col++) {
          newRowElement.insertCell(col);
          theCanvas.appendChild(newRowElement);
      }  // col loop
  }  // row loop

  const td = theCanvas.querySelectorAll('td'); // load cells with color
    td.forEach(function(item) {                // change function
        item.addEventListener('click',function() {
          cellColorChange(item);
        });
      });
}
