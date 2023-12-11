function pos (first,last) {
	this.first = first;
	this.last = last;
}

let readline = require('readline'); 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}); 

let s1="";
let s2="";
let dict = new Array();
let posDict = new Array();
rl.question('Ввод:', (answer) => {
	rl.close();
    let output = answer; //действия с введенным выражением
	let all_nums = 0, all_raz = 0;
	for (let i = 0; i !== output.length; ++i) {
		if (!dict[output[i]]) {
			dict[output[i]] = 1;
			posDict[output[i]] = new pos(i+1,-1);
		}
		else ++dict[output[i]];
		
		
		if (i%2=== 0) {
			s2+=output[i];
		}
		else {
			s1+=output[i];
		}
	}
	for (let i=output.length-1; i>=0; --i) {
		if (posDict[output[i]].last === -1 )
            posDict[output[i]].last = i+1;
	}
	console.log(posDict);
	console.log("S1 " + s1 + " " + s1.length);
	console.log("S2 " + s2 + " " + s2.length);
});