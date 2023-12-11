let fs = require('fs');
Text = fs.readFileSync('input.txt', "utf-8")
line = Text.split("\n")
let s = line[0]
let t = line[1]


let pi1 = new Array()

pi1[0] = 0


let j = 0
for (let i = 1; i < t.length ; i++) {
    while ((j > 0) && (t.charAt(j) !== t.charAt(i))) {
        j = pi1[j - 1]
    }
    if (t.charAt(j) === t.charAt(i)) {
        j = j + 1
    }
    pi1[i] = j
}

let k = 0
for (let i = 0; i < s.length; i++) {
    while ((k > 0) && (t.charAt(k) !== s.charAt(i))) {
        k = pi1[k - 1]
    }
    if (t.charAt(k) === s.charAt(i)) {
        k = k + 1
    }
    if (k === t.length) {
        console.log(i - t.length + 2)
        k = 0
    }
}
