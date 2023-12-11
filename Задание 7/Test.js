let fs = require('fs');
Text = fs.readFileSync('Chto_skazal_pokoinik.txt', "utf-8");
function Brute_Force(s, t){
    let j, i = 0
    let res = ""
    let n = s.length
    let m = t.length
    while (i<=n-m){
        j=0
        while (s.charAt(i+j) === t.charAt(j) && j<m ) {
            j++
        }
        if (j === m) {
            res += (i + 1) + " "
        }
        i++
    }
    console.log(res)
}

function Hash_sum_codes(s, t){
    let j, i, k = 0, ht = 0, hs = 0
    let n = s.length
    let m = t.length
    let res = ""

    while (k <= m - 1){
        ht +=  t.charCodeAt(k)
        hs +=  s.charCodeAt(k)

        k++
    }
    i = 1
    while (i<=n-m) {
        if (hs === ht) {
            j = 0
            while (s.charAt(i+j-1) === t.charAt(j) && j<m ) {
                j++
            }

            if (j === m ) {
                res += i + " "
            }
        }

        if(i<=n-m){
            hs = hs + s.charCodeAt(i+m - 1) - s.charCodeAt(i - 1)
        }
        i++
    }
    console.log(res)
}
function Hash_Ribin_Carp(s, t){
    let j, i = 1, k, ht = 0, hs = 0, st2 = 1
    let n = s.length
    let m = t.length
    let res = ""

    k = m - 1
    while (k >= 0){
        ht +=  t.charCodeAt(k) * st2
        hs +=  s.charCodeAt(k) * st2
        st2 = st2 * 2
        k--
    }

    while (i<=n-m) {
        if ( hs === ht ) {
            j = 0
            while (s.charAt(i+j-1) === t.charAt(j) && j<m ) {
                j++
            }
            if (j === m ) {
                res += i + " "
            }
        }
        if(i<=n-m){
            hs = (2 * hs) - (st2 * s.charCodeAt(i - 1)) + s.charCodeAt(i+m - 1)
        }
        i++
    }
    console.log(res)
}

function Moris_Pratt(s, t){
    let res = ""
    let pi1 = new Array()
    for (let u = 0; u < t.length + 1; u++) {
        pi1.push(0)
    }

    let j = 0
    for (let i = 1; i < t.length + 1; i++) {
        while ((j > 0) && (t.charAt(j) !== t.charAt(i))) {
            j = pi1[j - 1]
        }
        if (t.charAt(j) === t.charAt(i)) {
            j = j + 1
        }
        pi1[i] = j
    }

    let k = 0
    for (let i = 0; i < s.length; i++) {
        while ((k > 0) && (t.charAt(k) !== s.charAt(i))) {
            k = pi1[k - 1]
        }
        if (t.charAt(k) === s.charAt(i)) {
            k = k + 1
        }
        if (k === t.length) {
            res += (i - t.length + 2) + " "
            k = 0
        }
    }
    console.log(res)
}

function Auto(s, t){
    let res=""
    s = s + "#"
    let alph = new Array()
    for(let i = 0; i < t.length; i++)
        alph[t.charAt(i)] = 0

    let aut = new Array(t.length + 1)
    for (let j = 0; j <= t.length; j++)
        aut[j] = new Array()

    for (c in alph)
        aut[0][c] = 0


    let prev = 0
    for (let j = 0; j < t.length; j++){
        prev = aut[j][t.charAt(j)]
        aut[j][t.charAt(j)] = j + 1
        for (c in alph)
            aut[j + 1][c] = aut[prev][c]
    }

    let pref = 0
    for(let i = 0; i <= s.length; i++){
        if(t.includes(s.charAt(i)))
            pref = aut[pref][s.charAt(i)]
        else
            pref = 0

        if(pref === t.length)
            res += (i + 2 - pref) + " "
    }
    console.log(res)
}
function Boiar_Mur_Horspul(s, t){
    let res = ""
    let j, i = 0
    let n = s.length
    let m = t.length

    let N = new Array()
    for(let k = 0; k < m-1; k++)
        N[t.charAt(k)] = k + 1


    while (i<=n-m){
        j=0
        while (s.charAt(i+j) === t.charAt(j) && j<m ) {
            j++
        }
        if (j === m) {
            res += (i + 1) + " "
        }
        if (!(N[s[i + m - 1]]))
            i += m
        else
            i += (m - N[s[i + m - 1]])
    }
    console.log(res)
}
function Boiar_Mur(s, t){
    let  res = ""
    let n = s.length
    let m = t.length

    let suffshift = new Array()
    let z = new Array()
    let maxZ_idx = 0, maxZ = 0
    for(let j = 0; j<=m; j++){
        z[j] = 0
        suffshift[j] = m
    }

    for(let j = 1; j < m; j++){
        if (j <= maxZ)
            z[j] = Math.min(maxZ-j+1, z[j - maxZ_idx])
        while (j +z[j] < m && t.charAt(m-1-z[j]) === t.charAt(m - 1 -(j + z[j])))
            z[j]++
        if (j + z[j] - 1 > maxZ){
            maxZ_idx = j
            maxZ = j + z[j] - 1;
        }
    }

    for(let j = m -1;j>0; j--)
        suffshift[m - z[j]] = j

    for(let j = 1; j <= m-1;j++){
        if((j +z[j]) === m){
            for(let r = 0; r <= j; r++){
                if(suffshift[r] ===m)
                    suffshift[r] = j
            }
        }
    }
    let N= new Array()
    for(let j=0;j<t.length-1;j++)
        N[t.charAt(j)]=j+1

    let j, i = 0, bound = 0
    while (i<=n-m) {
        j=m-1;

        while (j>= bound && s[i+j] === t[j]) {
            j--;
        }

        if (j < bound) {
            res += (i + 1) + " ";
            bound = m - suffshift[0];
            i += suffshift[0]
        }
        else {
            bound = 0
            if (!(N[s[i + j]]))
                i =  Math.max(i + suffshift[j+1], (i + j + 1))
            else
                i = Math.max(i + suffshift[j+1], (i + j + 1) - N[s[i + j]])
        }
    }
    console.log(res)
}


//--------------------------------------------------------------------

console.log("Грубая сила:")
console.log("----------------------------------------")
let start = new Date()
Brute_Force(Text,"енгаген")
Brute_Force(Text,"автомобиль")
Brute_Force(Text,"сто сорок восемь от семи, тысяча двест")
let finish = new  Date()
let d = finish - start
console.log(d)
console.log("----------------------------------------")

console.log("Хеш сумма кодов:")
console.log("----------------------------------------")
start = new Date()
Hash_sum_codes(Text,"енгаген")
Hash_sum_codes(Text,"автомобиль")
Hash_sum_codes(Text,"сто сорок восемь от семи, тысяча двест")
finish = new  Date()
d = finish - start
console.log(d)
console.log("----------------------------------------")

console.log("Хеш Рибина Карпа:")
console.log("----------------------------------------")
start = new Date()
Hash_Ribin_Carp(Text,"енгаген")
Hash_Ribin_Carp(Text,"автомобиль")
Hash_Ribin_Carp(Text,"сто сорок восемь от семи, тысяча двест")
finish = new  Date()
d = finish - start
console.log(d)
console.log("----------------------------------------")

console.log("Функция Мориса-Пратта:")
console.log("----------------------------------------")
start = new Date()
Moris_Pratt(Text,"енгаген")
Moris_Pratt(Text,"автомобиль")
Moris_Pratt(Text,"сто сорок восемь от семи, тысяча двест")
finish = new  Date()
d = finish - start
console.log(d)
console.log("----------------------------------------")

console.log("Автомат:")
console.log("----------------------------------------")
start = new Date()
Auto(Text,"енгаген")
Auto(Text,"автомобиль")
Auto(Text,"сто сорок восемь от семи, тысяча двест")
finish = new  Date()
d = finish - start
console.log(d)
console.log("----------------------------------------")

console.log("Aлгоритм Бойера — Мура — Хорспула:")
console.log("----------------------------------------")
start = new Date()
Boiar_Mur_Horspul(Text,"енгаген")
Boiar_Mur_Horspul(Text,"автомобиль")
Boiar_Mur_Horspul(Text,"сто сорок восемь от семи, тысяча двест")
finish = new  Date()
d = finish - start
console.log(d)
console.log("----------------------------------------")

console.log("Aлгоритм  Бойера — Мура с обеими эвристиками")
console.log("----------------------------------------")
start = new Date()
Boiar_Mur(Text,"енгаген")
Boiar_Mur(Text,"автомобиль")
Boiar_Mur(Text,"сто сорок восемь от семи, тысяча двест")
finish = new  Date()
d = finish - start
console.log(d)
console.log("----------------------------------------")