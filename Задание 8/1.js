function Gruppa(number, spec, count){
    this.number =number
    this.spec = spec
    this.count = count
    this.add_stud = function add_stud(k){
        this.count += k
        console.log("В группу ", this.number, " добавили ", k, " студентов")
    }
    this.sub_stud = function sub_stud(k){
        this.count -= k
        console.log("Из группы ", this.number, " исключили ", k, " студентов")
    }
}

gr1 = new Gruppa(1, 'ИСиТ', 28)
gr2 = new Gruppa(2, 'ИСиТ', 45)
gr3 = new Gruppa(3, 'ИСиТ', 18)
gr4 = new Gruppa(4, 'ИСиТ', 23)

gr1.add_stud(4)
gr1.sub_stud(2)
gr2.add_stud(4)
gr2.sub_stud(2)
gr3.add_stud(4)
gr3.sub_stud(2)
gr4.add_stud(4)
gr4.sub_stud(2)

console.log("Группа 1 ", gr1.count)
console.log("Группа 2 ", gr2.count)
console.log("Группа 3 ", gr3.count)
console.log("Группа 4 ", gr4.count)

