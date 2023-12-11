let fs = require('fs');
Text = fs.readFileSync('input.txt', "utf-8")
line = Text.split("\n")
let s = line[0]
let t = line[1]
let ts = t +'&' + s


let pi=new Array()
pi[0]=0
let k=0
for(let i= 1; i < t.length + 1; i++) {
    while((k>0) && (t.charAt(k)!==t.charAt(i)))
        k=pi[k-1];
    if (t.charAt(k) === t.charAt(i))
        k++
    pi[i]=k
}

let j = 0
for(let i = t.length + 1; i < ts.length; i++){
    while ((j > 0) && (ts.charAt(j) !== ts.charAt(i)))
        j = pi[j-1];
    if (ts.charAt(j) === ts.charAt(i))
        j++
    if (j === t.length)
        console.log(i - 2*t.length + 1)
}



