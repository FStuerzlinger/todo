document.getElementById('name-input-form').onsubmit = function(e) {

  // Cancel the form submit
  e.preventDefault();

  // Fade out the current elements
  document.getElementById('welcome-page').className = "header l";

  console.log(document.getElementById('input-name').value);
  localStorage.setItem("name", document.getElementById('input-name').value);
  // Show the new elements
  setTimeout(() => {
    // Switch the display style
    document.getElementById('header-text').innerHTML = localStorage.name +
      "'s notes";
    document.getElementById('welcome-page').style.display = 'none';
    // Animations not working yet
    document.getElementById('main-page').className = "r";
    document.getElementById('main-page').style.display = 'initial';
  }, 400);
};

// Creates a new Note on the main page
document.getElementById('note-input-form').onsubmit = function(e) {
  // Cancle the form submit
  e.preventDefault();

  // Array to save the notes
  var notes = [];
  notes.push(document.getElementById('input-note').value);
  for (var i = 0; i < notes.length; i++) {

    // Create the row
    var row = document.createElement("div");
    row.className = "row";
    // div for the text content of the note
    var node = document.createElement("div");
    node.className = "note-element";
    node.contentEditable = true;
    node.innerHTML = notes[i];
    // Element for the button
    var control = document.createElement("div");
    control.className = "control-block";
    // add the button to the control block
    var button = document.createElement("button");
    var text = document.createTextNode("X");
    button.appendChild(text);
    control.appendChild(button);

    // add the divs to the row
    row.appendChild(node);
    row.appendChild(control);

    //node.appendChild(textnode);
    document.getElementById("notes").appendChild(row);
  }
  document.getElementById('input-note').value = "";
  // document.getElementById('editable').textContent.trim()
};
