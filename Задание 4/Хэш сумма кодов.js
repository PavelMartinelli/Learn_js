let fs = require('fs');
Text = fs.readFileSync('input.txt', "utf-8");
let j, i, k = 0, ht = 0, hs = 0

line = Text.split("\n")
s = line[0]
t = line[1]

n = s.length
m = t.length

while (k <= m - 1){
	ht +=  t.charCodeAt(k)
	hs +=  s.charCodeAt(k)

	k++
}
i = 1
while (i<=n-m) {
	if (hs === ht) {
		j = 0
		while (s.charAt(i+j-1) === t.charAt(j) && j<m ) {
			j++
		}

		if (j === m ) {
			console.log(i)
		}
	}

	if(i<=n-m){
		hs = hs + s.charCodeAt(i+m - 1) - s.charCodeAt(i - 1)
	}
	i++
}