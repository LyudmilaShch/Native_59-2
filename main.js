const students = [
    {
        id: 1,
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        id: 2,
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        id: 3,
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        id: 4,
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

//получить массив имен
//["Bob", "Alex", "Nick", "John"]

//1. Взять каждый элемент исходного массива
//2. Получить из него новое значение
//3. Поместить значение в новый массив

/*const getNames = (arr) => {
    const result = []
    const getNewValue = (el) => el.name
    for (let i = 0; i < arr.length; i++) {
        const newValue = getNewValue(arr[i])
        result[i] = newValue
    }
    return result
}

console.log(getNames(students))*/


//сформировать строку
//["Bob, 22 yo, 89 scores", ... ]

//1. Взять каждый элемент исходного массива
//2. Получить из него новое значение
//3. Поместить значение в новый массив

/*const getData = (arr) => {
    const result = []
    const getNewValue = (el) => `${el.name}, ${el.age} yo, ${el.scores} scores.`
    for (let i = 0; i < arr.length; i++) {
        const newValue = getNewValue(arr[i])
        result[i] = newValue
    }
    return result
}

console.log(getData(students))*/


const easyMap = (arr, fn) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        const newValue = fn(arr[i])
        result[i] = newValue
    }
    return result
}

console.log(easyMap(students, (el) => el.name))
console.log(easyMap(students, (el) => `${el.name}, ${el.age} yo, ${el.scores} scores.`))
console.log(easyMap(students, (el) => el.scores))

console.log(students.map((el) => el.name))
console.log(students.map((el) => `${el.name}, ${el.age} yo, ${el.scores} scores.`))
console.log(students.map((el) => el.scores))

const easyFilter = (arr, fn) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i])) {
            result.push(arr[i])
        }
    }
    return result
}

console.log(easyFilter(students, (el) => el.scores > 90))
console.log(students.filter((el) => el.scores > 90))

const easyFind = (arr, fn) => {
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i])) {
            return arr[i]
        }
    }
}
console.log(easyFind(students, (el) => el.name === "Alex"))
console.log(students.find(el => el.name === "Alex")) //Find выводит первое найденное значение

console.log(easyFind(students, (el) => el.scores > 90))
console.log(students.find(el => el.scores > 90))

//["Bob", "Alex", "Nick", "John"] => "Bob,Alex,Nick,John"
const easyJoin = (arr, separator = ",") => { //используется как значение по умолчанию
    let result = ""
    //let sep = separator ? separator : ","
    for (let i = 0; i < arr.length; i++) {
        if (i < arr.length -1) {
            result = result + arr[i] + separator
        } else
        result += arr[i]
    }
    return result
}
console.log(easyJoin(["Bob", "Alex", "Nick", "John"]))
console.log(easyJoin(["Bob", "Alex", "Nick", "John"], " "))
console.log(["Bob", "Alex", "Nick", "John"].join())
console.log(["Bob", "Alex", "Nick", "John"].join(" "))

//расписать метод. Например, push