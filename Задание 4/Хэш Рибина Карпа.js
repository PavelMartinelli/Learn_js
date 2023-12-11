let fs = require('fs');
Text = fs.readFileSync('input.txt', "utf-8");
let j, i = 1, k = 0, ht = 0, hs = 0, st2 = 1

line = Text.split("\n")
s = line[0]
t = line[1]

n = s.length
m = t.length

k = m - 1
while (k >= 0){
	ht +=  t.charCodeAt(k) * st2
	hs +=  s.charCodeAt(k) * st2
	st2 = st2 * 2
	k--
}

while (i<=n-m) {
	if ( hs === ht ) {
		j = 0
		while (s.charAt(i+j-1) === t.charAt(j) && j<m ) {
			j++
		}
		if (j === m ) {
			console.log(i)
		}
	}
	if(i<=n-m){
		hs = (2 * hs) - (st2 * s.charCodeAt(i - 1)) + s.charCodeAt(i+m - 1)
	}
	i++
}

