let fs = require('fs');
Text = fs.readFileSync('input.txt', "utf-8");
let j, i = 0

line = Text.split("\n")
s = line[0]
t = line[1]

n = s.length
m = t.length

while (i<=n-m){
    j=0
    while (s.charAt(i+j) === t.charAt(j) && j<m ) {
        j++
    }
    if (j === m) {
        console.log(i + 1)
    }
    i++
}
