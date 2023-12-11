let readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Ввод: ', (str) => {

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

    let ent = 0
    for(let a in alphch){
        console.log(a + ' - ' + alphch[a])
        let pi = alphch[a]/str.length
        if (Math.log(k) > 0) // А вдруг на ноль поделим
            ent += -pi*(Math.log(pi)/Math.log(k))
    }

    console.log("Энтропия = ", ent )
    rl.close();
});
