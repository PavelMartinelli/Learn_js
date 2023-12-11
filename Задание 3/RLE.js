let fs = require('fs');
Text = fs.readFileSync('input.txt', "utf-8");

let i = 0
let n = 1
let s = ""

while (i < Text.length){
	while(Text.charAt(i) === Text.charAt(i+n))
		n++
	if (n<3){
		s = s + Text.charAt(i)
	}
	else{
		s = s + n + Text.charAt(i)
	}
	i+=n
	n = 1
}


fs.writeFileSync('code.txt', s );
