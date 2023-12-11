let fs = require('fs');
Text = fs.readFileSync('input.txt', "utf-8")
line = Text.split("\n")
let s = line[0]
let t = line[1]
s = s + "#"

let alph = new Array()
for(let i = 0; i < t.length; i++)
    alph[t.charAt(i)] = 0

let aut = new Array(t.length + 1)
for (let j = 0; j <= t.length; j++)
    aut[j] = new Array()

for (c in alph)
    aut[0][c] = 0


let prev = 0
for (let j = 0; j < t.length; j++){
    prev = aut[j][t.charAt(j)]
    aut[j][t.charAt(j)] = j + 1
    for (c in alph)
        aut[j + 1][c] = aut[prev][c]
}

let pref = 0
for(let i = 0; i <= s.length; i++){
    if(t.includes(s.charAt(i)))
        pref = aut[pref][s.charAt(i)]
    else
        pref = 0

    if(pref === t.length)
        console.log(i + 2 - pref)
}
