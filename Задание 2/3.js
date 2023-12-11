let n = Math.floor(Math.random() * (101 - 1)) + 1

let nstr = 1, i = 1, s = ""


while(i <= n){

    for (let j =1; j <=nstr; j++){
        s = s + i + " "
        i++
    }

    console.log(s)
    s = ""
    nstr++
}