function onClickCell(event) {
    st = document.getElementById(event.target.id).style
    st.backgroundColor="#0f0"
}

function drawTable() {
    var poteau = parseInt(document.formal.columns.value)
    var nombre = parseInt(document.formal.rows.value)
    var elem = document.createElement("table")
    elem.setAttribute("border", "1")
    elem.setAttribute("id", "tab")
    elem.addEventListener("click", onClickCell, false)
    for (var i = 0; i < nombre; i++) {
        var row = elem.insertRow(i)
        for (var j = 0; j < poteau; j++) {
            var cell = row.insertCell(j)
            cell.width = "100"
            cell.height = "100"
            cell["id"] = "".concat(i + 1, j + 1)
        }
    }
    document.body.appendChild(elem)
}

function coloring(i, j) {
    st = document.getElementById("".concat(i + 1, j + 1)).style
    st.backgroundColor = "#a0f"
}

function coloringFull() {
    var poteau = parseInt(document.formal.columns.value)
    var nombre = parseInt(document.formal.rows.value)
    for (var i = 0; i < nombre; i++) {
        var colorsCol = false
        if (i == 0 || i == nombre - 1) {
            colorsCol = true
        }
        for (var j = 0; j < poteau; j++) {
            var colorsRow = false
            if (j == 0 || j == poteau - 1) {
                colorsRow = true
            }
            if (colorsCol == true || colorsRow == true) {
                st = document.getElementById("".concat(i + 1, j + 1)).style
                st.backgroundColor="#a0f"
            }
        }
    }
}