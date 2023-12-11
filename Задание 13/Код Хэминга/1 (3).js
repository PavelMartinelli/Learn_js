const prompt = require("prompt-sync")({ sigint: true })
console.log("Введите текст: ")
let input = prompt()
console.log(" ")

function binLeveled(size_of_alf, num) {
    var bint = num.toString(2)
    var ch = "0"; var patt = new Array(1 + size_of_alf).join(ch);
    return (patt + bint).slice(-patt.length)
}

let alfBinHam = new Array()
for (var i = 0; i < input.length; i++) {
    var sym = input.charAt(i); var bin = input.charCodeAt(i).toString(2)
    
    let controlBitsIndex = new Array(); var ind = 1; var length = bin.length
    while (length / ind >= 1) {
        controlBitsIndex.push(ind - 1)
        ind = ind * 2
        length = length + 1
    }
    
    var str = ""; var step = 0
    for (var j = 0; j < bin.length + controlBitsIndex.length; j++) {
        if (j == controlBitsIndex[step]) {
            str = "*" + str
            step = step + 1
        }
        else {
            str = bin[bin.length - 1 - (j - step)] + str
        }
    }
    
    let trueBits = new Array()
    for (var j = 0; j < str.length; j++) {
        if (str[j] == "1") {
            trueBits.push(binLeveled(str.length, str.length - j))
        }
    }
    
    let plus = new Array()
    for (var j = 0; j < str.length; j++) {
        plus.push(0)
    }
    for (var u = 0; u < trueBits.length; u++) {
        for (var j = 0; j < str.length; j++) {
            var l = trueBits[u].charCodeAt(j)
            plus[j] = plus[j] + (l - 48)
        }
    }
    for (var j = 0; j < str.length; j++) {
        plus[j] = plus[j] % 2
    }
    
    var string = ""; step = plus.length - 1
    for (var j = str.length - 1; j > -1; j--) {
        if (str[j] == "*") {
            var l = "" + plus[step]
            step = step - 1
            string = l + string
        }
        else {
            string = str[j] + string
        }
    }
    alfBinHam[sym] = string
}

console.log("Кодировка символов: ")
for (i in alfBinHam) {
    console.log(alfBinHam[i])
}
console.log(" ")

console.log("Введите закодированный текст: ")
let encoded_input = prompt(); var decoded_input = ""
while (true) {
    if (encoded_input == "") {
        break
    }
    var sym = encoded_input.substr(0, str.length)
    console.log(sym)
    encoded_input = encoded_input.substr(str.length)
    
    let trueBits = new Array()
    for (var j = 0; j < sym.length; j++) {
        if (sym[j] == "1") {
            trueBits.push(binLeveled(sym.length, sym.length - j))
        }
    }
    
    let plus = new Array()
    for (var j = 0; j < sym.length; j++) {
        plus.push(0)
    }
    
    for (var u = 0; u < trueBits.length; u++) {
        for (var j = 0; j < sym.length; j++) {
            var l = trueBits[u].charCodeAt(j)
            plus[j] = plus[j] + (l - 48)
        }
    }
    
    for (var j = 0; j < sym.length; j++) {
        plus[j] = plus[j] % 2
    }
    
    var ind = 0
    for (var i = 0; i < plus.length; i++) {
        ind = ind + plus[i] * 2 ** (plus.length - i - 1)
    }
    
    var string = ""; ind = ind - 1
    while (ind >= sym.length) {
        ind = ind - sym.length
    }
    if (ind != -1) {
        for (var i = 0; i < sym.length; i++) {
            if (i == sym.length - ind - 1) {
                if (sym[i] == "0") {
                    string = string + "1"
                }
                else {
                    string = string + "0"
                }
            }
            else {
                string = string + sym[i]
            }
        }
    }
    else {
        string = sym
    }
    for (i in alfBinHam) {
        if (alfBinHam[i] == string) {
            decoded_input = decoded_input + i
        }
    }
}
console.log(decoded_input)