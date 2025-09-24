const teachers = ["Nathan", "Ed", "Fabio", "Phil", "Carlo", "Lewis", "Luca"]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers (provate a trovare i metodi e poi provate ad implementare la soluzione con il ciclo for)

const reversedTeachers = teachers.toReversed();
console.log(reversedTeachers);

//Soluzione con ciclo "for"

const reversedTeachers2 = [];

for (let i = teachers.length - 1; i >= 0; i--) {
    reversedTeachers2.push(teachers[i]);
}
console.log(reversedTeachers2);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri

const longNames = [];

for (let i = 0; i < teachers.length; i++) {
    const curTeacher = teachers[i];     //usare "current"!!
    if (curTeacher.length >= 5) {
        longNames.push(curTeacher);
    }
}
console.log(longNames);

// 3. Rimuovi 'Ed' dall'array teachers (fatelo con un metodo e poi provate a farlo anche con il ciclo for)

const removeTeacher = teachers.indexOf("Ed");

if (removeTeacher !== -1) {
    teachers.splice(removeTeacher, 1);
}

console.log(teachers);

//Soluzione con ciclo "for"

const removeTeacher2 = []

for (let i = 0; i < teachers.length; i++) {
    if (teachers !== "Ed") {
        removeTeacher2.push(teachers[i]);
    }
}

console.log(removeTeacher2);