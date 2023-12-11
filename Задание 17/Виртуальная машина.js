const fs = require('fs')
const readlineSync = require('readline-sync')

let commands = fs.readFileSync('NOK.txt', 'utf-8').split(/[ \n]+/)
commands.push('exit')

let memory = []
let ip = 0

while (commands[ip] !== 'exit') {
    switch (commands[ip]) {
        case 'input':
            memory[parseInt(commands[ip+1])] = parseInt(readlineSync.question('Input: '))
            ip += 2
            break

        case 'mov':
            memory[parseInt(commands[ip+1])] = parseInt(commands[ip+2])
            ip += 3
            break

        case 'add':
            memory[parseInt(commands[ip+3])] = memory[parseInt(commands[ip+1])] + memory[parseInt(commands[ip+2])]
            ip += 4
            break

        case 'sub':
            memory[parseInt(commands[ip+3])] = memory[parseInt(commands[ip+1])] - memory[parseInt(commands[ip+2])]
            ip += 4
            break

        case 'mult':
            memory[parseInt(commands[ip+3])] = memory[parseInt(commands[ip+1])] * memory[parseInt(commands[ip+2])]
            ip += 4
            break

        case 'div':
            memory[parseInt(commands[ip+3])] = Math.floor(memory[parseInt(commands[ip+1])] / memory[parseInt(commands[ip+2])])
            ip += 4
            break

        case 'ifeq':
            if (memory[parseInt(commands[ip+1])] === memory[parseInt(commands[ip+2])])
                ip = parseInt(commands[ip+3])
            else
                ip += 4
            break

        case 'ifneq':
            if (memory[parseInt(commands[ip+1])] !== memory[parseInt(commands[ip+2])])
                ip = parseInt(commands[ip+3])
            else
                ip += 4
            break

        case 'setip':
            ip = parseInt(commands[ip+1])
            break

        case 'output':
            console.log(memory[parseInt(commands[ip+1])])
            ip += 2
            break

        default:
            ip++
            break
    }
}