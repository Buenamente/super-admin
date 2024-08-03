// Get the modals
var modal = document.getElementById('myModal');
var modal1 = document.getElementById('myModal1');

// Get the buttons that open the modals
var btn = document.getElementById("editButton");
var btn2 = document.getElementById("editButton2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close")[1];

// When the user clicks the button, open the corresponding modal
btn.onclick = function() {
    modal.style.display = "block";
}

btn2.onclick = function() {
    modal1.style.display = "block";
}

// Handle form submission for both forms
var form = document.getElementById("modalForm");
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    // Here you can handle form data submission
    console.log("Form submitted");
});

var form1 = document.getElementById("modalForm1");
form1.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    // Here you can handle form data submission
    console.log("Form submitted");
});

// Handle delete button click
var deleteBtn = document.querySelector(".delete-btn");
deleteBtn.addEventListener("click", function() {
    // Here you can handle delete button action
    console.log("Delete button clicked");
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

span1.onclick = function() {
    modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    } else if (event.target == modal1) {
        modal1.style.display = "none";
    }
}
