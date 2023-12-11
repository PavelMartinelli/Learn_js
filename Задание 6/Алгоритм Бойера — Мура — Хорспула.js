let fs = require('fs');
Text = fs.readFileSync('input.txt', "utf-8");
let j, i = 0

line = Text.split("\n")
let s = line[0]
let t = line[1]

let n = s.length
let m = t.length

let N = new Array()
for(let k = 0; k < m-1; k++)
    N[t.charAt(k)] = k + 1


while (i<=n-m){
    j=0
    while (s.charAt(i+j) === t.charAt(j) && j<m ) {
        j++
    }
    if (j === m) {
        console.log(i + 1)
    }
    if (!(N[s[i + m - 1]]))
        i += m
    else
        i += (m - N[s[i + m - 1]])
}
