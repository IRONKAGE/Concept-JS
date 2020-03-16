// const person = {
//     surname: 'Старк',
//     knows: function(what, name) {
//         console.log(`Ти ${what} знаєш, ${name} ${this.surname}`)
//     }
// }

// const john = { surname: 'Сноу'}

// person.knows('все', 'Бран')
// person.knows.call(john, 'нічого не', 'Джон')
// person.knows.apply(john, ['нічого не', 'Джон'])
// person.knows.call(john, ...['нічого не', 'Джон'])
// person.knows.bind(john, 'нічого не', 'Джон')()
// const bound = person.knows.bind(john, 'нічого не', 'Джон')
// bound()



// =======
// function Person(name, age) {
//     this.name = name
//     this.age = age
//     console.log(this)
// }

// const yuliia = new Person('Yuliia', 20)



// ======= Явний
// function logThis() {
//     console.log(this);
// }
// const obj = { num: 42 }
// logThis.apply(obj);
// logThis.call(obj);
// logThis.bind(obj)();



// ======= Не явний
// const animal = {
//     legs: 4,
//     logThis: function() {
//         console.log(this);
//     }
// }
// animal.logThis()



// =======
function Cat(color) {
    this.color = color
    console.log('This', this);
    ;( () => console.log('Arrow this', this) )()
}

new Cat('red')