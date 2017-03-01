window.onload = function() {
  if (localStorage.name == null) {

  } else {
    document.getElementById('header-text').innerHTML = localStorage.name +
      "'s notes";
    document.getElementById('welcome-page').style.display = 'none';
    // Animations not working yet
    document.getElementById('main-page').className = "r";
    document.getElementById('main-page').style.display = 'initial';
    refreshView();
  }
}

// Check if name is already defined
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
    var notes = [];
    //localStorage only supports strings
    if (localStorage.getItem("notes") !== null) {
      notes = JSON.parse(localStorage.getItem("notes"));
    }
    refreshView();
  }, 400);
};

// Creates a new Note on the main page
document.getElementById('note-input-form').onsubmit = function(e) {
  // Cancle the form submit
  e.preventDefault();
  var notes = [];
  //localStorage only supports stings
  if (localStorage.getItem("notes") !== null) {
    notes = JSON.parse(localStorage.getItem("notes"));
  }
  notes.push(document.getElementById('input-note').value);
  localStorage.setItem("notes", JSON.stringify(notes));

  refreshView();
  document.getElementById('input-note').value = "";

};

function deleteNoteClick(id) {
  var notes = [];
  notes = JSON.parse(localStorage.getItem("notes"));
  notes.splice(id, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  refreshView();
}

function getIdOfElement(element) {
  var underscoreIndex = element.id.indexOf('_');
  return element.id.substring(underscoreIndex + 1);
}

// Replace the div with an input type text and an form
function onClickNoteElement() {
  // get the Id of the element
  // Create form and input
  // catch submit of form
}

function refreshView() {
  var notes = [];
  notes = JSON.parse(localStorage.getItem("notes"));
  document.getElementById('notes').innerHTML = "";
  for (var i = 0; i < notes.length; i++) {
    console.log(i);
    var row = document.createElement("div");
    row.setAttribute("id", "row_" + i);
    row.className = "row";
    // div for the text content of the note
    var node = document.createElement("div");
    node.setAttribute("id", "textnoteelement_" + i);
    node.className = "note-element";
    node.contentEditable = true;
    node.innerHTML = notes[i];
    // Element for the button
    var control = document.createElement("div");
    control.className = "control-block";
    // add the button to the control block
    var button = document.createElement("button");
    var text = document.createTextNode("X");
    button.setAttribute("id", "deletebutton_" + i);
    button.onclick = function temp() {
      deleteNoteClick(getIdOfElement(this));
    }

    button.appendChild(text);
    control.appendChild(button);
    // add the divs to the row
    row.appendChild(node);
    row.appendChild(control);

    //node.appendChild(textnode);
    document.getElementById("notes").appendChild(row);
  }
}
