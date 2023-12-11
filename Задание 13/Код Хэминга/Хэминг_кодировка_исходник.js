
function get_encode(){
    let input = document.formal.input_text.value;
    let code=""
    function binLeveled(size_of_alf, num) {
        let bint = num.toString(2)
        let ch = "0";
        let patt = new Array(1 + size_of_alf).join(ch);
        return (patt + bint).slice(-patt.length)
    }

    let alfBinHam = new Array()
    for (let i = 0; i < input.length; i++) {
        let sym = input.charAt(i);
        let bin = input.charCodeAt(i).toString(2)

        let controlBitsIndex = new Array();
        let ind = 1;
        let length = bin.length
        while (length / ind >= 1) {
            controlBitsIndex.push(ind - 1)
            ind = ind * 2
            length = length + 1
        }

        let str = "";
        let step = 0
        for (let j = 0; j < bin.length + controlBitsIndex.length; j++) {
            if (j === controlBitsIndex[step]) {
                str = "*" + str
                step = step + 1
            }
            else {
                str = bin[bin.length - 1 - (j - step)] + str
            }
        }

        let trueBits = new Array()
        for (let j = 0; j < str.length; j++) {
            if (str[j] === "1") {
                trueBits.push(binLeveled(str.length, str.length - j))
            }
        }

        let plus = new Array()
        for (let j = 0; j < str.length; j++) {
            plus.push(0)
        }
        for (let u = 0; u < trueBits.length; u++) {
            for (let j = 0; j < str.length; j++) {
                let l = trueBits[u].charCodeAt(j)
                plus[j] = plus[j] + (l - 48)
            }
        }
        for (let j = 0; j < str.length; j++) {
            plus[j] = plus[j] % 2
        }

        let string = ""; step = plus.length - 1
        for (let j = str.length - 1; j > -1; j--) {
            if (str[j] === "*") {
                let l = "" + plus[step]
                step = step - 1
                string = l + string
            }
            else {
                string = str[j] + string
            }
        }
        alfBinHam[sym] = string
    }

    for (let i in alfBinHam) {
        code+=(alfBinHam[i])
    }
    console.log(code)
    document.formal.code_text.value = code
}
get_encode()
function get_decode(){
    let input = document.formal.input_text.value;
    let code = document.formal.code_text.value;
    let decode=""
    function binLeveled(size_of_alf, num) {
        let bint = num.toString(2)
        let ch = "0";
        let patt = new Array(1 + size_of_alf).join(ch);
        return (patt + bint).slice(-patt.length)
    }

    let alfBinHam = new Array()
    for (let i = 0; i < input.length; i++) {
        let sym = input.charAt(i);
        let bin = input.charCodeAt(i).toString(2)

        let controlBitsIndex = new Array();
        let ind = 1;
        let length = bin.length
        while (length / ind >= 1) {
            controlBitsIndex.push(ind - 1)
            ind = ind * 2
            length = length + 1
        }

        let str = "";
        let step = 0
        for (let j = 0; j < bin.length + controlBitsIndex.length; j++) {
            if (j === controlBitsIndex[step]) {
                str = "*" + str
                step = step + 1
            }
            else {
                str = bin[bin.length - 1 - (j - step)] + str
            }
        }

        let trueBits = new Array()
        for (let j = 0; j < str.length; j++) {
            if (str[j] === "1") {
                trueBits.push(binLeveled(str.length, str.length - j))
            }
        }

        let plus = new Array()
        for (let j = 0; j < str.length; j++) {
            plus.push(0)
        }
        for (let u = 0; u < trueBits.length; u++) {
            for (let j = 0; j < str.length; j++) {
                let l = trueBits[u].charCodeAt(j)
                plus[j] = plus[j] + (l - 48)
            }
        }
        for (let j = 0; j < str.length; j++) {
            plus[j] = plus[j] % 2
        }

        let string = ""; step = plus.length - 1
        for (let j = str.length - 1; j > -1; j--) {
            if (str[j] === "*") {
                let l = "" + plus[step]
                step = step - 1
                string = l + string
            }
            else {
                string = str[j] + string
            }
        }
        alfBinHam[sym] = string
    }

    while (true) {
        if (code === "") {
            break
        }
        let sym = code.substr(0, str.length)
        console.log(sym)
        code = code.substr(str.length)

        let trueBits = new Array()
        for (let j = 0; j < sym.length; j++) {
            if (sym[j] === "1") {
                trueBits.push(binLeveled(sym.length, sym.length - j))
            }
        }

        let plus = new Array()
        for (let j = 0; j < sym.length; j++) {
            plus.push(0)
        }

        for (let u = 0; u < trueBits.length; u++) {
            for (let j = 0; j < sym.length; j++) {
                let l = trueBits[u].charCodeAt(j)
                plus[j] = plus[j] + (l - 48)
            }
        }

        for (let j = 0; j < sym.length; j++) {
            plus[j] = plus[j] % 2
        }

        let ind = 0
        for (let i = 0; i < plus.length; i++) {
            ind = ind + plus[i] * 2 ** (plus.length - i - 1)
        }

        let string = ""; ind = ind - 1
        while (ind >= sym.length) {
            ind = ind - sym.length
        }
        if (ind !== -1) {
            for (let i = 0; i < sym.length; i++) {
                if (i === sym.length - ind - 1) {
                    if (sym[i] === "0") {
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
        for (let i in alfBinHam) {
            if (alfBinHam[i] === string) {
                decode = decode + i
            }
        }
    }

    document.formal.decode_text.value = decode
}