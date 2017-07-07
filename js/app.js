var size = 16;
for (i = 0; i < size; i++) {
  var row = document.createElement("tr");
  row.style.class = "row";
  row.innerHTML = "row";
  document.getElementById("pad").appendChild(row);
  for (j = 0; j < size; j++) {
    var column = document.createElement("td");
    column.innerHTML = "column";
    document.getElemenyById("row").appendChild(column);
  }
}
