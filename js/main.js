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
    document.getElementById('main-page').style.display = 'initial';

    document.getElementById('welcome-page').style.display = 'none';

    // Animations not working yet
    //document.getElementById('header-after').className = "r";
    //document.getElementById('content-after').className = "r";
    //document.getElementById('footer-after').className = "r";
  }, 400);
};

document.getElementById('note-input-form').onsubmit = function(e) {
  // Cancle the form submit
  e.preventDefault();

  // Array to save the notes
  var notes = [];
  notes.push(document.getElementById('input-note').value);
  for (var i = 0; i < notes.length; i++) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(notes[i]);
    node.appendChild(textnode);
    document.getElementById("notes-list").appendChild(node);
  }
  document.getElementById('input-note').value = "";

};
