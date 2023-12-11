const fs = require("fs");

let input = fs.readFileSync("input2.txt", "utf8").toLowerCase();
let chast = fs.readFileSync("chast.txt", "utf8").split('\n');

let input_arr = input.split('\n',)

let complete_chast = new Array();
for(let i = 0; i < chast.length; ++i){
    chast[i] = chast[i].split(' ');
    complete_chast[i] = chast[i][1];
}

function Decode(input, chast) {
    let alphrus='абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
    let input_chast = new Array(alphrus.length).fill(0);

    let cur_len = 0;

    for(let i = 0; i < input.length; ++i){
        if(input[i] <='ё' && input[i] >= 'а'){
            if(input[i] === 'ё'){input_chast[6] += 1;}
            else if(input[i] >= 'ж'){
                input_chast[input.charCodeAt(i) - 1071] += 1;
            }
            else{
                input_chast[input.charCodeAt(i) - 1072] += 1;
            }
            cur_len++;
        }
    }
    for(let i = 0; i < input_chast.length; ++i){
        input_chast[i] = (input_chast[i] / cur_len).toFixed(5);
    }

    let minD = 0;
    for(let i = 0; i < 33; ++i){
        minD += Math.abs(complete_chast[i] - input_chast[i]);
    }

    let push_min = 0;
    let D = 0;
    for(let push_i = 1; push_i < 32; ++push_i){
        for(let i = 0; i < 33; ++i){
            D += Math.abs(complete_chast[(i + push_i) % 33] - input_chast[i]);
            //console.log(complete_chast[(i + push_i) % 34], input_chast[i]);
        }
        if(minD > D){
            minD = D;
            push_min = push_i;
        }
        D = 0;
    }

    let str_nov = '';

    for(let i = 0; i < input.length; ++i){
        if(input[i] <='ё' && input[i] >= 'а'){
            let iter = alphrus.indexOf(input[i]);
            str_nov += alphrus[(iter + push_min) % 33];
        }
        else{
            str_nov += input[i];
        }
    }
    console.log(str_nov, '\n')
}

for(let i = 0; i < input_arr.length; ++i){
    Decode(input_arr[i], complete_chast)
}
