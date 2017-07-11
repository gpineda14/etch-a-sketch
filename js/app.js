var size = 16;
$(document).ready(function() {
  createGrid(size);
  $("td.entry").hover(function() {
    $(this).addClass("hovered");
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
    $(this).addClass("hovered");
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
