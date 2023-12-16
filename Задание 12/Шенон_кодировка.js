
let readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function Tree(left, right, parent, weight, start, end) {
    this.left = left
    this.right = right
    this.parent = parent
    this.weight = weight
    this.start = start
    this.end = end
}

rl.question("Input: ", (input) => {

    function BuildTree(knot) {
        if (table[knot].end !== table[knot].start) {
            let mid = 0;
            let i = table[knot].start
            while (((mid + alf[alphabet[i]]) < (table[knot].weight / 2)) && (i < table[knot].end)) {
                mid = mid + alf[alphabet[i]]
                i = i + 1
            }
            if (i > table[knot].start) {
                i = i - 1
            }
            else {
                mid = mid + alf[alphabet[i]]
            }
            table[knot].left = lastknot + 1
            table[knot].right = lastknot + 2
            table[lastknot + 1] = new Tree(0, 0, knot, mid, table[knot].start, i)
            table[lastknot + 2] = new Tree(0, 0, knot, table[knot].weight - mid, i + 1, table[knot].end)
            lastknot = lastknot + 2
            BuildTree(table[knot].left)
            BuildTree(table[knot].right)
        }
    }

    function OutputTree(knot, strstick) {
        if (table[knot].end !== table[knot].start) {
            console.log(strstick + alphabet.substring(table[knot].start, table[knot].end + 1), ' - ', table[knot].weight)
            OutputTree(table[knot].left, " " + strstick)
            OutputTree(table[knot].right, " " + strstick)
        }
        else {
            console.log(strstick + alphabet[table[knot].start], ' - ', table[knot].weight)
        }
    }


    let alf = new Array();
    let alphabet = "";
    let counter = 0
    for (let i = 0; i < input.length; i++) {
        if (input[i] in alf) {
            alf[input[i]] = alf[input[i]] + 1
        } else {
            alphabet = alphabet + input[i]
            alf[input[i]] = 1
            counter = counter + 1
        }
    }

    let table = new Array()
    let index = 0;
    let weight = 0;
    console.log(" ")
    console.log("Таблица частот: ")
    for (i in alf) {
        weight = weight + alf[i]
        index = index + 1
        console.log(i, ": ", alf[i] / input.length)

    }
    table[0] = new Tree(1, 2, -1, weight, 0, counter - 1)
    console.log(" ")

    console.log("Дерево: ")
    let lastknot = 0
    BuildTree(0)
    OutputTree(0, "-")
    console.log(" ")

    console.log("Кодировка символов: ")
    let alfCode = new Array()
    for (let i = 0; i < table.length; i++) {
        if (table[i].start - table[i].end !== 0) {
            continue
        }
        let k = i;
        let p = k;
        let string = ""
        while (table[p].parent !== -1) {
            p = table[p].parent
            if (table[p].left === k) {
                string = "0" + string
            }
            if (table[p].right === k) {
                string = "1" + string
            }
            k = p
        }
        alfCode[alphabet[table[i].start]] = string
        console.log(alphabet[table[i].start] + " - " + string)
    }
    console.log(" ")

    console.log("Закодированный текст: ")
    let result = ""
    for (let i = 0; i < input.length; i++) {
        result = result + alfCode[input[i]]
    }
    console.log(result)
    console.log(" ")

    rl.question("Input: ", (encoded_input) => {
        let decoded_input = "";
        let leaf = 0
        for (let i = 0; i < encoded_input.length; i++) {
            if (table[leaf].start - table[leaf].end === 0) {
                decoded_input = decoded_input + alphabet[table[leaf].start]
                leaf = 0
            }
            if (encoded_input[i] === "0") {
                leaf = table[leaf].left
            } else {
                leaf = table[leaf].right
            }
        }
        if (table[leaf].start - table[leaf].end === 0) {
            decoded_input = decoded_input + alphabet[table[leaf].start]
            leaf = 0
        }
        console.log(decoded_input)
        rl.close()
    });
});