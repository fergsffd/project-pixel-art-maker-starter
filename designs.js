const submitGrid = document.getElementById('sizePicker');
const colorChoice = document.getElementById('colorPicker');
const theCanvas = document.getElementById('pixelCanvas');

// grid values are validated my the HTML <input> element
submitGrid.addEventListener('submit', function(event) {
                            makeGrid(submitGrid.inputWidth.value,
                                     submitGrid.inputHeight.value);
                            event.preventDefault();
                            }); // Need this to get form not to reset?

/**
  * @desc sets backgorud color of cell
  * @param object $myCell - HTML element to modify
*/
function cellColorChange(myCell) {
  let selectColor = "background-color:" + colorChoice.value;
  myCell.setAttribute('style',selectColor);
}

/**
  * @desc create a grid of squares. Resets the grid whenever called.
  * @param int $width - width of desired grid
  * @param int $height - height of desired grid
*/
// Probably a good idea to pass parameters to function and not use globals.
function makeGrid(width, height) {
  theCanvas.textContent = ""; // reset canvas
  for (let row = 1; row < width; row++) {
      const newRowElement = document.createElement('tr');
      for (let col = 0; col <= height; col++) {
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
