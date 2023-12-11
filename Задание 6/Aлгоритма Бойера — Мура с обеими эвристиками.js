let fs = require('fs');
Text = fs.readFileSync('input.txt', "utf-8")
line = Text.split("\n")
s = line[0]
t = line[1]

let n = s.length
let m = t.length
let maxZ_idx = 0, maxZ = 0

let suffshift = new Array()
let z = new Array()
for(let j = 0; j<=m; j++){
    z[j] = 0
    suffshift[j] = m
}

for(let j = 1; j < m; j++){
    if (j <= maxZ)
        z[j] = Math.min(maxZ-j+1, z[j - maxZ_idx])
    while (j +z[j] < m && t.charAt(m-1-z[j]) === t.charAt(m - 1 -(j + z[j])))
        z[j]++
    if (j + z[j] - 1 > maxZ){
        maxZ_idx = j
        maxZ = j + z[j] - 1;
    }
}

for(let j = m -1;j>0; j--)
    suffshift[m - z[j]] = j

for(let j = 1; j <= m-1;j++){
    if((j +z[j]) === m){
        for(let r = 0; r <= j; r++){
            if(suffshift[r] ===m)
                suffshift[r] = j
        }
    }
}
let N= new Array()
for(let j=0;j<t.length-1;j++)
    N[t.charAt(j)]=j+1

let j, i = 0, bound = 0
let sf ="";
while (i<=n-m) {
    j=m-1;
    sf="";
    while (j>= bound && s[i+j] === t[j]) {
        j--;
        sf=s[i+j + 1] + sf;
    }
    if (sf.length>= 1)
        console.log(sf);
    if (j < bound) {
        console.log(i + 1);
        bound = m - suffshift[0];
        i += suffshift[0]
    }
    else {
        bound = 0
        if (!(N[s[i + j]]))
            i =  Math.max(i + suffshift[j+1], (i + j + 1))
        else
            i = Math.max(i + suffshift[j+1], (i + j + 1) - N[s[i + j]])
    }
}
