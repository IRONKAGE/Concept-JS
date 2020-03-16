// __proto__ - ES6
// Object.getPrototypeOf() - ES5
// function Cat(name, color){
//     this.name = name
//     this.color = color
// }

// Cat.prototype.voice = function() {
//     console.log(`Кіт ${this.name} сказав мяв`);
// }

// const cat = new Cat('Васька', 'Білий')
// console.log(Cat.prototype)
// console.log(cat);
// console.log(cat.__proto__);
// console.log(cat.__proto__ === Cat.prototype);
// console.log(cat.constructor);
// cat.voice()


// ===============
// function Person() {}
// Person.prototype.legs = 2
// Person.prototype.skin = 'white'

// const person = new Person()
// person.name = 'Oleh'

// console.log('skin' in person);
// console.log(person.legs);
// console.log(person.eyes);
// console.log(person.name);
// console.log(Person);
// console.log(person);
// console.log(person.hasOwnProperty('name'));
// console.log(person.hasOwnProperty('skin'));



// Object.create()
// const proto = {year: 2020}
// const myYear = Object.create(proto) // також можна передавати властивості Object.create(proto, {})
// console.log(myYear.year)
// console.log(myYear.hasOwnProperty('year'));
// console.log(myYear.__proto__ === proto);

// const proto = {year: 2020}
// const myYear = Object.create(proto)
// console.log(myYear.year)
// proto.year = 2200
// console.log(myYear.year)

// const proto = {year: 2020}
// const myYear = Object.create(proto)
// console.log(myYear.year)
// proto.year = {year: 999}
// console.log(myYear.year)

// Пофіксили
var proto = {year: 2020}
const myYear = Object.create(proto)
console.log(myYear.year)
proto = {year: 999}
console.log(myYear.year)