let fs = require('fs');
Text = fs.readFileSync('code.txt', "utf-8");

let i = 0
let k = 1
let number = "0123456789"
let k_str
let res = ""

while (i < Text.length){
	k_str = ""
	while(number.includes(Text.charAt(i))){
		k_str = k_str + Text.charAt(i)
		i++
	}
	if (k_str.length > 0){
		k = parseInt(k_str)
	}

	for(let j =1; j<=k; j++){
		res = res + Text.charAt(i)
	}
	i++
	k=1
}


fs.writeFileSync('decode.txt', res );
