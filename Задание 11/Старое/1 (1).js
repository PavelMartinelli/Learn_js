const prompt = require("prompt-sync")({ sigint: true })
console.log("Введите текст: ")
let input = prompt()

function Tree(left, right, parent, str) {
    this.left = left
    this.right = right
    this.parent = parent
    this.str = str
}

function Forest(weight, root) {
    this.weight = weight
    this.root = root
}

let alf = new Array(); var counter = 0
for (var i = 0; i < input.length; i++) {
    if (input[i] in alf) {
        alf[input[i]] = alf[input[i]] + 1
    }
    else {
        alf[input[i]] = 1
        counter = counter + 1
    }
}

let table = new Array(); let timber = new Array()
var index = 0
console.log(" ")
console.log("Таблица частот: ")
for (i in alf) {
    alf[i] = alf[i]/input.length
    console.log(i, ": ", alf[i])
    table[index] = new Tree(0, 0, 0, i)
    timber[index] = new Forest(alf[i], index)
    index = index + 1
}
console.log(" ")

var lastknot = counter - 1; var lasttree = counter - 1;
while (lasttree > 0) {
    if (timber[0].weight <= timber[1].weight) {
        var first = 0; var second = 1
    }
    else {
        var first = 1; var second = 0
    }
    for (var i = 2; i <= lasttree; i++) {
        if (timber[i].weight <= timber[first].weight) {
            second = first
            first = i
        }
        else if (timber[i].weight <= timber[second].weight) {
            second = i
        }
    }
    lastknot = lastknot + 1
    table[lastknot] = new Tree(timber[first].root, timber[second].root, 0,
                               table[timber[first].root].str + table[timber[second].root].str)
    table[timber[first].root].parent = lastknot
    table[timber[second].root].parent = lastknot
    
    timber[first].weight = timber[first].weight + timber[second].weight
    timber[first].root = lastknot
    timber[second] = timber[lasttree]
    lasttree = lasttree - 1
}
console.log(" ")

console.log("Кодировка символов: ")
let alfCode = new Array()
for (var i = 0; i < counter; i++) {
    var k = i; var p = k; var string = ""
    while (table[p].parent != 0) {
        p = table[p].parent
        if (table[p].left == k) {
            string = "0" + string
        }
        if (table[p].right == k) {
            string = "1" + string
        }
        k = p
    }
    alfCode[table[i].str] = string
    console.log(table[i].str + " - " + string)
}
console.log(" ")

console.log("Закодированный текст: ")
var result = ""
for (var i = 0; i < input.length; i++){
    result = result + alfCode[input[i]]
}
console.log(result)
console.log(" ")

console.log("Введите код: ")
let encoded_input = prompt(); var decoded_input = ""
while (true) {
    if (encoded_input == "") {
        break
    }
    for (i in alfCode) {
        var sym = encoded_input.substring(0, alfCode[i].length)
        if (sym == alfCode[i]) {
            decoded_input = decoded_input + i
            encoded_input = encoded_input.slice(alfCode[i].length)
        }
    }
}
console.log(decoded_input)