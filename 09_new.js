// function Cat(color, name) {
//     this.color = color
//     this.name = name
// }
// const cat = new Cat('black', 'КОТ')
// console.log(cat);


// ES 5
// function Cat(color, name) {
//     this.color = color
//     this.name = name
// }
// function myNew(constructor, ...args) {
//     const obj = {}
//     Object.setPrototypeOf(obj, constructor.prototype)
//     return constructor.apply(obj, args) || obj
// }
// const cat = myNew(Cat, 'black', 'КОТ')
// console.log(cat);


// function Cat(color, name) {
//     this.color = color
//     this.name = name
// }
// const cat = Cat()
// console.log(cat);


function Cat(color, name) {
    this.color = color
    this.name = name
}
const cat = Cat()
console.log(cat);