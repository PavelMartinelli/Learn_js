
let readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function Tree(lson, rson, parent, stroca) {
    this.lson = lson;
    this.rson = rson;
    this.parent = parent;
    this.stroca = stroca;
}

function Forest(wes, root) {
    this.wes = wes;
    this.root = root;
}

function encodeString(input, encodingTable) {
    let encodedString = '';

    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        const code = encodingTable[char];
        encodedString += code;
    }

    return encodedString;
}

function decodeString(encodedString, root, T) {
    let decodedString = '';
    let currentNode = root;

    for (let i = 0; i < encodedString.length; i++) {
        const bit = encodedString[i];
        if (bit === '0') {
            currentNode = T[currentNode].lson;
        } else if (bit === '1') {
            currentNode = T[currentNode].rson;
        }

        if (T[currentNode].lson === 0 && T[currentNode].rson === 0) {
            decodedString += T[currentNode].stroca;
            currentNode = root;
        }
    }

    return decodedString;
}


//////////////////////////////////////////////////////////////////
rl.question('Введите строку: ', (input) => {

    const alphabet = {};
    const kol = input.length;

    for (let i = 0; i < kol; i++) {
        if (alphabet[input[i]]) {
            alphabet[input[i]]++;
        } else {
            alphabet[input[i]] = 1;
        }
    }

    var sort_alphabet = Object.keys(alphabet).map(function (key) {
        return [key, alphabet[key]];
    });


    const n = Object.keys(alphabet).length;

    let T = [];
    let F = [];

    let lastusel = n;
    let lasttree = n;

    sort_alphabet.unshift(undefined)

    for (let i = 1; i <= n; i++) {
        T[i] = new Tree(0, 0, 0, sort_alphabet[i][0]);
        F[i] = new Forest(sort_alphabet[i][1] / kol, i);
    }

    while (lasttree > 1) {
        let first, second;

        if (F[1].wes <= F[2].wes) {
            first = 1;
            second = 2;
        } else {
            first = 2;
            second = 1;
        }

        for (let i = 3; i <= lasttree; i++) {
            if (F[i].wes <= F[first].wes) {
                second = first;
                first = i;
            } else if (F[i].wes <= F[second].wes) {
                second = i;
            }
        }

        lastusel++;
        T[lastusel] = new Tree(F[first].root, F[second].root, 0, T[F[first].root].stroca + T[F[second].root].stroca);
        T[F[first].root].parent = lastusel;
        T[F[second].root].parent = lastusel;

        F[first].wes = F[first].wes + F[second].wes;
        F[first].root = lastusel;
        F[second] = F[lasttree];
        lasttree--;
    }

    const encodingTable = {};

    for (let i = 1; i <= n; i++) {
        let k = i;
        let p = k;
        let code = '';

        do {
            p = T[p].parent;
            if (T[p].lson === k) code = '0' + code;
            if (T[p].rson === k) code = '1' + code;
            k = p;
        } while (T[p].parent !== 0);

        const symbol = T[i].stroca;
        encodingTable[symbol] = code;
    }

    //////////////////////////////////////////////////////////
    console.log('Tаблица частот: ', alphabet);

    console.log('Таблица кодирования:', encodingTable);

    const encodedString = encodeString(input, encodingTable);

    console.log('Закодированная строка:', encodedString);

    rl.question('Введите текст: ', (input) => {
        const decodedString = decodeString(input, lastusel, T);
        console.log('Декодированная строка:', decodedString);
        rl.close();
    });
});
//////////////////////////////////////////////////////////////