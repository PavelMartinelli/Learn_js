let readline = require('readline'); // подключение интерфейса ввода вывода
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Ввод текста для кодирования и ключ: ', (input) => {
    input = input.split(' ');

    let key = input[1] / 1;
    let line = input[0].toLowerCase();

    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    console.log(line)

    let iterator = 0;
    let code = "";
    for (let i = 0; i <= line.length - 1; ++i) {
        code += alphabet[(alphabet.indexOf(line[i]) + key) % alphabet.length];
    }
    console.log(code);
    rl.close()
});

