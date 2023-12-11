Add_String = function (obj){
    for(c in obj){
        if (typeof obj[c] === "string")
            obj[c] = obj[c] + " Это строка"
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
}

Add_String(menu)

console.log(menu.title)