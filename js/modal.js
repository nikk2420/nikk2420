// Get all the buttons that open the modal
var modalBtns = document.getElementsByClassName("openModalBtn");

// Get the modal
var modal = document.querySelector(".modal");

// Get the <span> element that closes the modal
var span = modal.querySelector(".close");

// Loop through all buttons and attach click event listener
for (var i = 0; i < modalBtns.length; i++) {
  modalBtns[i].onclick = function() {
    modal.style.display = "block";
  };
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
