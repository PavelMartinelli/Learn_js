let readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let ops = {'(': 0, ')': 0, '+': 1, '-': 1, '*': 2, '/': 2, '^': 3}
console.log("Приоритеты операций: ", ops)


rl.question('Введите строку: ', (arith_exprRaw) => {
    let postf = new Array()
    console.log(" ")

    let arith_expr = ""
    for (let i = 0; i < arith_exprRaw.length; i++) {
        if (arith_exprRaw[i] !== " ") {
            arith_expr = arith_expr + arith_exprRaw[i]
        }
    }

    let stack = new Array();

    let num = ""
    for (let i = 0; i < arith_expr.length; i++) {
        if (arith_expr[i] === " ") {
            continue;
        }
        if (arith_expr[i] === ")") {
            for (let j = stack.length - 1; j > stack.lastIndexOf("("); j--) {
                postf.push(stack[j])
                stack.pop()
            }
            stack.pop()
        } else if (!(arith_expr[i] in ops)) {
            if (!(arith_expr[i + 1] in ops)) {
                num = num + arith_expr[i]
            } else {
                if (num === "") {
                    postf.push(arith_expr[i])
                } else {
                    num = num + arith_expr[i]
                    postf.push(num)
                    num = ""
                }
            }
        } else {
            if (arith_expr[i] !== "(" && ops[arith_expr[i]] <= ops[stack[stack.length - 1]]) {
                while (ops[arith_expr[i]] <= ops[stack[stack.length - 1]]) {
                    postf.push(stack[stack.length - 1])
                    stack.pop()
                }
            }
            stack.push(arith_expr[i])
        }
    }
    if (num !== "") {
        postf.push(num)
    }
    for (let i = stack.length - 1; i > -1; i--) {
        postf.push(stack[i])
    }
    console.log(postf.join(" "))
    console.log(" ")

    let stackEval = new Array();
    num = 1
    while (postf.length !== 0) {
        if (!(postf[0] in ops)) {
            stackEval.push(postf[0])
        } else {
            if (postf[0] !== '^') {
                num = eval(stackEval[stackEval.length - 2] + postf[0] + stackEval[stackEval.length - 1])
            } else {
                for (let i = 0; i <= stackEval[stackEval.length - 1] - 1; i++) {
                    num = num * stackEval[stackEval.length - 2]
                }
            }
            stackEval.length = stackEval.length - 2
            stackEval.push(num)
        }
        postf.shift()
    }
    console.log("Результат вычисления:", arith_exprRaw, "=", stackEval[0])
    rl.close()
})
