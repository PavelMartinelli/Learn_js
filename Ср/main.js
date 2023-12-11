//////////////////////////////////////////////////////////////////
let readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
////////////////////////////////////////////////////////////
rl.question('Введите строку: ', (str) => {
    let k = 0
    let alphch=new Array();
    for(let i=0;i<str.length;i++) {
        if (alphch[str.charAt(i)])
            alphch[str.charAt(i)]++
        else {
            k++
            alphch[str.charAt(i)] = 1
        }
    }
    console.log(alphch)

    let sort_alphabet = Object.keys(alphch).map(function (key){
        return[key, alphch[key]]
    });

    for(let i = 0; i < sort_alphabet.length; i++) {
        let poz = [];
        for (let j = 0; j < str.length; j++) {
            if (sort_alphabet[i][0] === str[j])
                poz += j
        }
        console.log(sort_alphabet[i][0] + " - " + (Number(poz[0]) + 1) + ", " + (Number(poz[poz.length - 1]) + 1))
    }

    let s1 ="", s2 = ""
    for(let j = 0; j < str.length; j++){
        if(j%2 ===0)
            s2+= str[j]
        else
            s1 += str[j]
    }
    console.log("S1: ", s1, " ", s1.length);
    console.log("S2: ", s2, " ", s2.length);

});