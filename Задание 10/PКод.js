let readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Ввод текста для кодирования: ', (str) => {
    let code = "";
    let set_str = new Set(str)
    let size = Math.ceil(Math.log(set_str.size)/Math.log(2))
    let k = 0

    let alphch=new Array();
    for(let i=0;i<str.length;i++) { //кодирование двоичными числами
        if (alphch[str.charAt(i)])
            continue
        alphch[str.charAt(i)] = k.toString(2).trim()
        k++
    }

    for(let i=0;i<str.length;i++){ //дописывание незначащих нулей
        while(alphch[str.charAt(i)].length < size){
            alphch[str.charAt(i)] = '0' + alphch[str.charAt(i)]
        }
    }

    for(let a in alphch){ //вывод кодов для символов
        console.log(a + ' - ' + alphch[a])
    }

    for(let i=0;i<str.length;i++){ //кодирование исходной строки
        code += alphch[str.charAt(i)]
    }

    console.log(code)
    console.log("--------------------------------------------------")

    rl.question('Ввод закодированого текста: ', (str2) => { //запрос закодированой строки
        let decode = ""
        let i = -size

        c: while(i< str2.length) { //декодирование введеной закодированой строки
            i += size
            for (let j = 0; j < str.length; j++) {
                if (str2.substring(i, i + size) === alphch[str.charAt(j)]) {
                    decode += str.charAt(j)
                    continue c;
                }
            }
        }
        console.log(decode)
        rl.close();
    });
});
