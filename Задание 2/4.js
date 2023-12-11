let s = 0, a = 1, b = 2, c = 3,
    d = 3,e = 1
let cnt = 0, summ = 1
while (Math.abs(a) >=0.001){
    cnt ++
    a = e *((b) / (c * d))
    summ = summ + a


    b = b + 2
    c = c + 2
    d = d * 3
    e = -e
}
console.log("Количество:", cnt)
console.log("Сумма:", summ)