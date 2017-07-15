var size = 16;
var color;
var colors = ["green", "maroon", "yellow", "orange", "purple", "blue"];
$(document).ready(function() {
  createGrid(size);
  $("td.entry").hover(function() {
    $(this).css({"background-color":"black"});
  });
});

function createGrid(size) {
  var currSize = size;
  for (i = 0; i < currSize; i++) {
    var row = "<tr class='row'></tr>";
    $(row).appendTo(".pad");
  }
  for (j = 0; j < currSize; j++) {
    var entry = "<td class='entry'></td>";
    $(entry).appendTo('.row');
  }
  sizeEntries();
}

function newGrid() {
  $("td.entry").removeClass("hovered");
  $(".pad").empty();
  setGridSize();
  createGrid(size);
  $("td.entry").hover(function() {
    $(this).css({"background-color": "black"});
  });
}

function setGridSize() {
  size = prompt("Enter size of grid:", "16");
  if (size == null || size == "") {
    size = 16;
  }
}

function sizeEntries(size) {
  var height = 720 / size;
  var width = 720 / size;
  $("td.entry").css({"height": height, "width": width});
}

function changeColor() {
  var index = Math.floor(Math.random() * 6);
  color = colors[index];
  $("td.entry").hover(function() {
    $(this).css({"background-color": color});
  });
}
