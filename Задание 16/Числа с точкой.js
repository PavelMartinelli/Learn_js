const fs = require("fs")
let inputRaw = fs.readFileSync("input.txt", "utf8")

function binLeveled(len, bin_num) {
    let ch = "0";
    let patt = new Array(1 + len).join(ch);
    return (patt + bin_num).slice(-patt.length)
}

function floatToIEEE(f) {
    let buf = new ArrayBuffer(4);
    (new Float32Array(buf))[0] = f;
    return binLeveled(32, parseInt((new Uint32Array(buf))[0]).toString(2));
}

function IEEEToFloat(f) {
    let sign = f[0];
    let order = f.substr(1, 8)
    order = parseInt(order, 2) - 127
    let mant = f.substr(9, 23)
    let ord = 1;
    let res = 1;
    let step = 0.5
    if (order > 0) {
        for (let i = 0; i < order; i++) {
            ord = ord * 2
        }
    }
    else {
        for (let i = 0; i > order; i--) {
            ord = ord / 2
        }
    }
    for (let i = 0; i < 23; i++) {
        res = res + (mant[i] * step)
        step = step / 2
    }
    res = res * ord
    if (sign === "1") {
        res = -res
    }
    return res
}

function summIEEE(f1, f2) {
    const arrF1 = new Float32Array([f1])
    const arrF2 = new Float32Array([f2])

    const result = arrF1[0] + arrF2[0]

    const resultArray = new Float32Array([result])
    const resultBuffer = resultArray.buffer
    const resultBytes = new Uint8Array(resultBuffer)

    let resultString = ""
    for (let i = 0; i < resultBytes.length; i++) {
        resultString = resultBytes[i].toString(2).padStart(8, '0') + resultString
    }

    return resultString
}

function subsIEEE(f1, f2) {
    const arrF1 = new Float32Array([f1])
    const arrF2 = new Float32Array([f2])

    const result = arrF1[0] - arrF2[0]

    const resultArray = new Float32Array([result])
    const resultBuffer = resultArray.buffer
    const resultBytes = new Uint8Array(resultBuffer)

    let resultString = ""
    for (let i = 0; i < resultBytes.length; i++) {
        resultString = resultBytes[i].toString(2).padStart(8, '0') + resultString
    }

    return resultString
}

let ops = "";
let ind = 0
for (let i = 0; i < inputRaw.length; i++) {
    if (inputRaw[i] !== " ") {
        if (inputRaw[i] === "+" || inputRaw[i] === "-") {
            ops = inputRaw[i]
            ind = i
        }
    }
}

let numbs = new Array();
let num = ""
for (let i = 0; i < inputRaw.length; i++) {
    if (i === ind) {
        numbs.push(num)
        num = ""
    }
    else {
        num = num + inputRaw[i]
    }
}
numbs.push(num)
let normal_numbs = new Array()

for (let i = 0; i < 2; i++) {
    normal_numbs[i] = floatToIEEE(numbs[i])
    fs.appendFileSync("out.txt", (numbs[i] + " = " + normal_numbs[i] + "\n"))
}

if (ops === "+") {
    normal_numbs[2] = summIEEE(numbs[0], numbs[1])
}
else {
    normal_numbs[2] = subsIEEE(numbs[0], numbs[1])
}
fs.appendFileSync("out.txt", (normal_numbs[2] + " = " + IEEEToFloat(normal_numbs[2])), "utf8")

console.log(ops)