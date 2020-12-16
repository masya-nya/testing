//--------------------------------------База------------------------------------------

// Задача №1 -------------------------------------------------------------------------

/*
const firtsName = prompt('Введите a:')
const lastName = prompt('Введите b:')
const age = prompt('Введите свой возраст':)

const multi = (a, b) => a * b

alert(multi(a, b))
*/

// Задача №2 -------------------------------------------------------------------------

/*
const firtsName = prompt('Введите своё имя:').trim()
const lastName = prompt('Введите свою фамилию:').trim()
const age = prompt('Введите свой возраст:').trim()

if (firtsName === null || lastName === null || age === null || firtsName === '' || lastName === '' || age === '') {
    alert('Данные введены некоректно. Повторите снова')
    window.location.reload()
} else {
    alert('Привет, ' + firtsName + ' ' + lastName + ' с возрастом ' + age)
}
*/

// Задача №3 -------------------------------------------------------------------------

/*
const pol = prompt('Введите ваш пол (F/M)')

if (pol === 'F' || pol === 'f' || pol === 'm' || pol === 'M') {
    if (pol === 'F' || pol === 'f') {
        alert('Ваш пол женский!')
    } else {
        alert('Ваш пол мужской!')
    }
} else {
    alert('Данные введены неверно. Попробуйте снова!')
    document.location.reload()
}
*/

// Задача №4 -------------------------------------------------------------------------

/*
const num = prompt('Введите номер текущего дня')

const weekday = {
    1: 'Понедельник',
    2: 'Вторник',
    3: 'Среда',
    4: 'Четверг',
    5: 'Пятница',
    6: 'Суббота',
    7: 'Воскресенье'
}

if (num > 0 && num < 8) {
    if (Number.isInteger(+num)) {
        alert('Сегодня ' + weekday[`${num}`])
    } else {
        alert('Данные введены неверно. Попробуйте снова!')
        document.location.reload()
    }
} else {
    alert('Данные введены неверно. Попробуйте снова!')
    document.location.reload()
}
*/

// Задача №5 -------------------------------------------------------------------------

/*
const str = prompt('Введите преложения: ')

const arrayMaker = (str) => {
    str = str.split('.')
    str.pop()
    for (let index in str) {
        str[index] = str[index].trim().replace(' ', ', ')
    }
    str = str.join('. ') + '.'
    console.log(str)
}

arrayMaker(str)
*/

// Задача №6 -------------------------------------------------------------------------

/*
const name = prompt('Введите имя: ')
const data = new Date()
const hours = data.getHours()

if (hours >= 0 && hours <= 5) {
    alert(`Доброй ночи, ${name}`)
} else if (hours >= 6 && hours <= 11) {
    alert(`Доброе утра, ${name}`)
} else if (hours >= 12 && hours <= 17) {
    alert(`Доброго дня, ${name}`)
} else {
    alert(`Доброго вечера, ${name}`)
}
*/

// Задача №7-------------------------------------------------------------------------

/*
const num = 100

for (let i = 1; i <= num; ++i) {
    if (i >= 1 && i <= 17) {
        console.log(`${i} - ребёнок`)
    } else if (i >= 18 && i <= 30) {
        console.log(`${i} - молодой`)
    } else if (i >= 30 && i <= 55) {
        console.log(`${i} - зрелый`)
    } else if (i >= 55) {
        console.log(`${i} - старый`)
    }
}
*/

// Задача №8-------------------------------------------------------------------------

/*
const name = prompt('Введите своё имя: ')
const age = prompt('Введите свой возраст: ')
const pol = prompt('Введите свой пол(М/Ж): ')

const func2 = (i, pol) => {
    if (i >= 1 && i <= 17) {
        return 'ребёнок'
    } else if (i >= 18 && i <= 30) {
        if (pol == 'М' || pol == 'м') {
            return 'молодой'
        } else if (pol == 'Ж' || pol == 'ж') {
            return 'молодая'
        }
    } else if (i >= 30 && i <= 55) {
        if (pol == 'М' || pol == 'м') {
            return 'зрелый'
        } else if (pol == 'Ж' || pol == 'ж') {
            return 'зрелая'
        }
    } else if (i >= 55) {
        if (pol == 'М' || pol == 'м') {
            return 'старый'
        } else if (pol == 'Ж' || pol == 'ж') {
            return 'старая'
        }
    }
}

const func = (name, age, pol) => {
    const svejest = func2(age, pol)
    if (pol == 'М' || pol == 'м') {
        alert(`${name} имеет возраст ${age} и он ${svejest}.`)
    } else if (pol == 'Ж' || pol == 'ж') {
        alert(`${name} имеет возраст ${age} и она ${svejest}.`)
    }
}

func(name, age, pol)
*/

//--------------------------------------Массивы------------------------------------------

// Задача №1-----------------------------------------------------------------------------
/*
Сделай функцию, которая принимает массив любых целых чисел, которая возращает истинну,
если все элементы четные, если бы хотя бы один элемент не четный, то false.
*/

/*
const massiv = [2, 4, 66, 8888]

const metka = false

const func = (array, metka) => {
    for (item in array) {
        if (array[item] % 2 === 0) {
            metka = true
        } else {
            metka = false
            break
        }
    }
    return metka
}

console.log(func(massiv, metka))

*/

// Задача №2-----------------------------------------------------------------------------
/*
Сделай функцию, которая принимает массив любых целых чисел, которая возращает новый массив,
где все элементы кратны пяти. ([1,2,5,12,15,21] вернет [5,15])
*/

/*
const massiv = [2, 5, 55, 8888, 123, 125, 42353, 435, 345236]

const func = (array) => {
    const array2 = []
    for (item in array) {
        if (array[item] % 5 === 0) {
            array2[array2.length] = array[item]
        } else {
            continue
        }
    }
    return array2
}

console.log(func(massiv))
*/

// Задача №3-----------------------------------------------------------------------------
/*
Написать функцию, которая принимает массив чисел, например [1,2,3,4,5] и функция возращает
среднее арифметическое, (округлить результат до десятых)
*/

/*
const massiv = [1.43, 2.345, 3.345, 4, 5, 6, 7, 8]

const func = (array) => {
    let sum = 0
    for (index in array) {
        sum += array[index]
    }
    sum = sum / array.length
    return sum.toFixed(1)
}

console.log(func(massiv))
*/

// Задача №4-----------------------------------------------------------------------------
/*
Написать функцию, которая принимает массив чисел, например [1,2,3,4,5], и переносит первый элемент
массива в конец (например можно засунуть первый элемент в конец, затем удалить первый элемент),
попробуй несколькими способами сделать, если догадаешься
*/

/*
const massiv = [1, 2, 3, 4, 5, 6, 7, 8]

const func = (array) => {
    const firstItem = array[0]
    array.push(firstItem)
    array.shift()
    console.log(array)
}

const func2 = (array) => {
    const firstItem = array[0]
    array[array.length] = firstItem
    array.shift()
    console.log(array)
}

func(massiv)
func2(massiv)
*/

// Задача №5-----------------------------------------------------------------------------
/*
Написать функцию, которая принимает массив сотрудников, каждый сотрудник имеет
имя и возраст ([{name: 'Иван', age: 23},...]) и возвращает массив, где каждый
элемент представляет из себя строку "Имя: Иван, возраст: 23".
*/

/*
const staff = [
    { name: 'Максим', age: 21 },
    { name: 'Евгений', age: 34 },
    { name: 'Алла', age: 18 },
    { name: 'Елена', age: 45 },
    { name: 'Аркадий', age: 31 },
]

const information = (array) => {
    const info = []
    for (index in array) {
        info[info.length] = `Имя: ${array[index].name}, возраст: ${array[index].age}`
    }
    return info
}

console.log(information(staff))
*/

//--------------------------------------Объекты------------------------------------------

// Задача №1-----------------------------------------------------------------------------
/*
У нас есть объект, в котором хранятся зарплаты нашей команды:
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
Если объект salaries пуст, то результат должен быть 0.
*/

/*
let selaries = {
    Maxim: 100,
    Evgeniy: 160,
    Andrey: 130,
    Artem: 110
}

let sum = 0

for (index in selaries) {
    console.log(selaries[index])
    sum += selaries[index]
}
console.log(sum)
*/

// Задача №2-----------------------------------------------------------------------------
/*
Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

Например:
// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
*/
/*
let menu = {
    width: 200,
    height: 300,
    title: "My menu",
    isProgrammer: true,
    fontSize: 14
}

const func = (menu) => {
    for (key in menu) {
        if (typeof menu[key] === 'number') {
            menu[key] = menu[key] * 2
            console.log(menu[key])
        } else {
            continue
        }
    }
    console.log(menu)
}

func(menu)
*/

// Задача №3-----------------------------------------------------------------------------
/*
Написать объект ladder - объект, который позволяет подниматься и спускаться. Пример работы должен быть таким:
*/

let ladder = {
    step: 0,
    up: function () {
        ladder.step++
    },
    down: function () {
        ladder.step--
    },
    showSteps: function () {
        alert(ladder.step)
    }
}

const up = document.querySelector('#up')
const down = document.querySelector('#down')
const show = document.querySelector('#show')
up.onclick = ladder.up
down.onclick = ladder.down
show.onclick = ladder.showSteps


// КОНСТРУКТОР
/*
const num = 5

const myApp = {}

myApp.events = {
    isProgrammer: true,
    func: function (number) {
        return number *= 2
    }
}

const person = function (name) {
    console.log(`Меня зовут ${name}`)
}
const person1 = new person('Максим')
const person2 = new person('Женя')
*/

