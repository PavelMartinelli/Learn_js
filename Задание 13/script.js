function encodeText() {
    let input = document.form1.t1.value;

    let input_code_2 = "";
    for (let i = 0; i < input.length; i++) {
        input_code_2 += "0" + input[i].charCodeAt(0).toString(2);
    }

    input_code_2 = "0" + "0" + input_code_2.slice(0, 1) + "0" + input_code_2.slice(1, 4) + "0" + input_code_2.slice(4, 11) + "0" + input_code_2.slice(11);

    let Arr = [];
    for (let i = 0; i < input_code_2.length; i++) {
        Arr.push(Number(input_code_2[i]));
    }

    let x_1 = 0;
    let x_2 = 0;
    let x_4 = 0;
    let x_8 = 0;
    let x_16 = 0;


    for (let i = 0; i < Arr.length; i += 2) {
        x_1 += Arr[i]
    }

    for (let i = 1; i < Arr.length; i += 4) {
        x_2 += Arr.slice(i, i + 2).reduce(function (a, b) {
            return a + b;
        }, 0);
    }

    for (let i = 3; i < Arr.length; i += 8) {
        x_4 += Arr.slice(i, i + 4).reduce(function (a, b) {
            return a + b;
        }, 0);
    }

    for (let i = 7; i < Arr.length; i += 16) {
        x_8 += Arr.slice(i, i + 8).reduce(function (a, b) {
            return a + b;
        }, 0);
    }

    for (let i = 15; i < Arr.length; i += 32) {
        x_16 += Arr.slice(i, i + 16).reduce(function (a, b) {
            return a + b;
        }, 0);
    }

    let q = [x_1 % 2, x_2 % 2, x_4 % 2, x_8 % 2, x_16 % 2];

    Arr[0] = q[0];
    Arr[1] = q[1];
    Arr[3] = q[2];
    Arr[7] = q[3];
    Arr[15] = q[4];

    document.form1.t2.value = Arr.join('')

}
function decodeText() {
    let input = document.form1.t2.value;
    let str = document.form1.t1.value
    let Arr = [];

    for (let i = 0; i < input.length; i++) {
        Arr.push(Number(input[i]));
    }
    let Ain=Arr.slice();

    Arr[0] = 0;
    Arr[1] = 0;
    Arr[3] = 0;
    Arr[7] = 0;
    Arr[15] = 0;

    let x_1 = 0;
    let x_2 = 0;
    let x_4 = 0;
    let x_8 = 0;
    let x_16 = 0;

    for (let i = 0; i < Arr.length; i += 2) {
        x_1 += Arr[i];
    }

    for (let i = 1; i < Arr.length; i += 4) {
        x_2 += Arr.slice(i, i + 2).reduce(function (a, b) {
            return a + b;
        }, 0);
    }

    for (let i = 3; i < Arr.length; i += 8) {
        x_4 += Arr.slice(i, i + 4).reduce(function (a, b) {
            return a + b;
        }, 0);
    }

    for (let i = 7; i < Arr.length; i += 16) {
        x_8 += Arr.slice(i, i + 8).reduce(function (a, b) {
            return a + b;
        }, 0);
    }

    for (let i = 15; i < Arr.length; i += 32) {
        x_16 += Arr.slice(i, i + 16).reduce(function (a, b) {
            return a + b;
        }, 0);
    }

    let x = [x_1 % 2, x_2 % 2, x_4 % 2, x_8 % 2, x_16 % 2];
    let y = [];

    for (let i = 0; i < x.length; i++) {
        if (x[i] !== Ain[Math.pow(2, i) - 1]) {
            y.push(Math.pow(2, i));
        }
    }

    let errorPosition = y.reduce(function (a, b) {
        return a + b;
    }, 0);

    // Correct error
    Arr[errorPosition - 1] = 1 - Arr[errorPosition - 1];

    // Remove control bits
    let correctedMessage = Arr.filter((_, index) => !isPowerOfTwo(index + 1)).join('');

    if(errorPosition === 0)
        document.form1.t3.value = binaryToString(correctedMessage)
    else if(errorPosition > 0 && errorPosition< 8)
        document.form1.t3.value = binaryToString(correctedMessage) +(str[0]);
    else if(errorPosition >= 8 && errorPosition <= 16)
        document.form1.t3.value = binaryToString(correctedMessage) +(str[1]);
    else if(errorPosition> 16 && errorPosition < 24)
        document.form1.t3.value = binaryToString(correctedMessage) +(str[2]);





}

function isPowerOfTwo(num) {
    return (num & (num - 1)) === 0 && num !== 0;
}

function binaryToString(binary) {
    let text = '';
    for (let i = 0; i < binary.length; i += 8) {
        let byte = binary.slice(i, i + 8);
        text += String.fromCharCode(parseInt(byte, 2));
    }
    return text;
}
