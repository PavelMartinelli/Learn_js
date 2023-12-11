function onClickCell(event) {
    let st = document.getElementById(event.target.id).style
    st.backgroundColor="#ffa200"
}

function drawTable() {
    let table = document.createElement("table")
    table.setAttribute("border", "1")
    table.setAttribute("id", "table")
    table.addEventListener("click", onClickCell, false)
    let row_count = parseInt(document.form1.row_count.value)
    let column_count = parseInt(document.form1.column_count.value)
    for(let i = 0; i < row_count; ++i) {
        let row = table.insertRow(i)
        for(let j = 0; j < column_count; ++j){
            let cell = row.insertCell(j)
            cell.width = "60"
            cell.height = "60"
            cell["id"] = "".concat(i,j)

        }
    }
    document.body.appendChild(table)
}

function color(i, j){
    let el =document.getElementById("".concat(i, j)).style
    el.transition = "background-color 0.5s"
    el.backgroundColor = "#ffa200"
}

function uncolor(i, j){
    let el =document.getElementById("".concat(i, j)).style
    el.transition = "background-color 0.5s"
    el.backgroundColor = "#ffffff"
}

function Make_Color(){
    let row_count = parseInt(document.form1.row_count.value)
    let column_count = parseInt(document.form1.column_count.value)
    let j = 0
    let t1 = setInterval(() =>{
        if(j < column_count){
            color(0, j)
            j++
        }
        else
            clearInterval(t1)
    }, 125)
    let pause1 = setTimeout(() =>{
        let i = 0
        let t2 = setInterval(() =>{
            if(i < row_count){
                color(i, column_count-1)
                i++
            }
            else
                clearInterval(t2)
        }, 125)
    }, 125 * column_count)

    let pause2 = setTimeout(() =>{
        let j = column_count -1
        let t3 = setInterval(() =>{
            if(j => 0){
                color(row_count-1, j)
                j--
            }
            else
                clearInterval(t3)
        }, 125)
    }, 125 * column_count + 125*row_count)

    let pause3 = setTimeout(() =>{
        let i = row_count -1
        let t4 = setInterval(() =>{
            if(i => 0){
                color(i, 0)
                i--
            }
            else
                clearInterval(t4)
        }, 125)
    }, 125 * column_count + 125*row_count + 125*column_count)
}

function Del_Color(){
    let row_count = parseInt(document.form1.row_count.value)
    let column_count = parseInt(document.form1.column_count.value)
    let j = 0
    let t1 = setInterval(() =>{
        if(j < column_count){
            uncolor(0, j)
            j++
        }
        else
            clearInterval(t1)
    }, 125)
    let pause1 = setTimeout(() =>{
        let i = 0
        let t2 = setInterval(() =>{
            if(i < row_count){
                uncolor(i, column_count-1)
                i++
            }
            else
                clearInterval(t2)
        }, 125)
    }, 125 * column_count)

    let pause2 = setTimeout(() =>{
        let j = column_count -1
        let t3 = setInterval(() =>{
            if(j => 0){
                uncolor(row_count-1, j)
                j--
            }
            else
                clearInterval(t3)
        }, 125)
    }, 125 * column_count + 125*row_count)

    let pause3 = setTimeout(() =>{
        let i = row_count -1
        let t4 = setInterval(() =>{
            if(i => 0){
                uncolor(i, 0)
                i--
            }
            else
                clearInterval(t4)
        }, 125)
    }, 125 * column_count + 125*row_count + 125*column_count)
}

function Magic(){
    let pause = setTimeout(() =>{
        Del_Color()
    }, 600)
    Make_Color()
}