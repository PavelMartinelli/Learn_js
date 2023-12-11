let readline = require('readline'); // подключение интерфейса ввода вывода
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function tree(l_son, r_son, parent, stroca){ // Деревья
    this.l_son = l_son
    this.r_son = r_son
    this.parent = parent
    this.stroca = stroca
}
let T = new Array()
function  forest(wes, root){ // Динамическое сращевание деревьев с запоминанием их веса
    this.wes = wes;
    this.root = root;
}
let F = new Array()

rl.question('Ввод текста для кодирования: ', (str) => {
    let code = "";
    let set_str = new Set(str)
    let n = set_str.size
    // количество появлений символа в строке
    let alphch=new Array();
    for(let i=0;i<str.length;i++) {
        if (alphch[str.charAt(i)])
            alphch[str.charAt(i)]++
        else
            alphch[str.charAt(i)] = 1
    }

    // Частота символа
    for(let a in alphch)
        alphch[a] = alphch[a] / str.length

    console.log("-----------------------------------------------")
    console.log("Таблица частост символов:")
    for(let a in alphch)
        console.log(a, ' - ', alphch[a])
    console.log("-------------------------------")


    for(let i = 0; i < n; ++i){
        T[i] = new tree(0,0,0, Array.from(set_str)[i])
        F[i] = new forest(alphch[str.charAt(i)], i)
    }
    let last_node = n
    let last_tree = n
    let first = 0, second = 0
    while (last_tree > 0){
        // присваивает переменным first,
        // second индексы массива F,
        // соответствующие деревьям с наименьшими весами.
        //---------------------------------------------------
        //инициализация переменных first,
        // second рассматриваются первые два дерева
        if (F[1].wes <= F[2].wes) {
            first = 1
            second = 2
        }
        else {
            first = 2
            second = 1
        }

        for(let i = 3; i < last_tree; ++i) {

            if (F[i].wes < F[first].wes) {
                second = first
                first = i
            } else if (F[i].wes < F[second].wes)
                second = i
        }
        // создаем новый узел
        T[last_node] = new tree(F[first].root, F[second].root, 0,
            T[F[first].root].stroca+T[F[second].root].stroca)
        T[F[first].root].parent = last_node
        T[F[second].root].parent = last_node


        //Замена в дереве F, массив F уменьшается на одну запись
        F[first].wes = F[first].wes + F[second].wes
        F[first].root = last_node

        last_tree--
        F[second] = F[last_tree - 1]
        //F.splice(second, 1, F[la])
        console.log(T)
        last_node++
    }

    //определение кода каждого символа в дереве Хаффмана
    for(let i = 1; i < n; ++i) {
        let k = i, p = k
        let s =""
        p = T[p].parent
        if (T[p].l_son === k)
            s = '0' + s
        if(T[p].r_son === k)
            s = '1' + s
        k=p
        //console.log(T[p].parent)
        //while (T[p].parent !== 0)
            //console.log(set_str[i], T[i].stroca, s)

    }



    console.log(code)
    console.log("--------------------------------------------------")

    rl.question('Ввод закодированого текста: ', (str2) => { //запрос закодированой строки
        let decode = ""

        console.log(decode)
        rl.close();
    });
});
