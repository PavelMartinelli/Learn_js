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
            cell.width = "50"
            cell.height = "50"
            cell["id"] = "".concat(i, j)
        }
    }
    document.body.appendChild(elem)
}

function color(i, j) {
    st1 = document.getElementById("".concat(i, j)).style
    st1.transition = "background-color 0.5s"
    st1.backgroundColor = "#a0f"
}
function uncolor(i, j) {
    st2 = document.getElementById("".concat(i, j)).style
    st2.transition = "background-color 0.5s"
    st2.backgroundColor = "#fff"
}

function coloring() {
    var poteau = parseInt(document.formal.columns.value)
    var nombre = parseInt(document.formal.rows.value)
    var j = 0
    var index1 = setInterval(function() {
        if (j < poteau) {
            color(0, j)
            j = j + 1
        }
        else {
            clearInterval(index1)
        }
    }, 125)
    let timerId1 = setTimeout(function run() {
        var i = 0
        var index2 = setInterval(function() {
            if (i < nombre) {
                color(i, poteau - 1)
                i = i + 1
            }
        else {
            clearInterval(index2)
        }
        }, 125)
    }, 125 * poteau)
    
    let timerId2 = setTimeout(function run() {
        var j1 = poteau - 1
        var index3 = setInterval(function() {
            if (j1 > 0) {
                color(nombre - 1, j1)
                j1 = j1 - 1
            }
            else {
                clearInterval(index3)
            }
        }, 125)
    }, 125 * poteau + 125 * nombre)
    let timerId3 = setTimeout(function run() {
        var i1 = nombre - 1
        var index4 = setInterval(function() {
            if (i1 > 0) {
                color(i1, 0)
                i1 = i1 - 1
            }
            else {
                clearInterval(index4)
            }
        }, 125)
    }, 125 * poteau + 125 * nombre + 125 * poteau)
}
function uncoloring() {
    var poteau = parseInt(document.formal.columns.value)
    var nombre = parseInt(document.formal.rows.value)
    let timerId = setTimeout(function run() {
        var j2 = 0
        var index5 = setInterval(function() {
            if (j2 < poteau) {
                uncolor(0, j2)
                j2 = j2 + 1
            }
            else {
                clearInterval(index5)
            }
        }, 125)
        var i2 = 0
        var index6 = setInterval(function() {
            if (i2 < nombre) {
                uncolor(i2, poteau - 1)
                i2 = i2 + 1
            }
            else {
                clearInterval(index6)
            }
        }, 125)
        var j3 = poteau - 1
        var index7 = setInterval(function() {
            if (j3 > 0) {
                uncolor(nombre - 1, j3)
                j3 = j3 - 1
            }
            else {
                clearInterval(index7)
            }
        }, 125)
        var i3 = nombre - 1
        var index8 = setInterval(function() {
            if (i3 > 0) {
                uncolor(i3, 0)
                i3 = i3 - 1
            }
            else {
                clearInterval(index8)
            }
        }, 125)
    }, Math.max(poteau, nombre) * 125)
}