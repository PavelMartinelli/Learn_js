let fs = require('fs');
Text = fs.readFileSync('input.txt', "utf-8")
line = Text.split("\n")
s = line[0]
t = line[1]
let ts = t +'&' + s


let z = new Array()
for (let u = 0; u < ts.length; u++)
    z.push(0)

let left = 0, right = 0
for(let j = 1; j < ts.length; j++){
    if (j <= right && right - j + 1 <= z[j-left]) {
        if (right - j + 1 <= z[j - left])
            z[j] = right - j + 1
        else
            z[j] = z[j - left]
    }
    while ((j + z[j] < ts.length) && (ts.charAt(z[j]) === ts.charAt(j + z[j]))) {
        z[j] = z[j] + 1
    }
    if ((j + z[j] - 1) > right) {
        left = j;
        right = j + z[j] - 1;
    }
}
for (let x = 0; x < ts.length; x++) {
    if (z[x + t.length + 1] === t.length) {
        console.log(x + 1)
    }
}