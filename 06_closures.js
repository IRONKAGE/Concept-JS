// function sayHelloTo(name) {
//     const message = 'Hello ' + name

//     return function() {
//         console.log(message);
//     }
// }

// const helloToYuliia = sayHelloTo('Yuliia')
// const helloToOleh = sayHelloTo('Oleh')
// console.log(helloToYuliia);
// // console.log(helloToYuliia()); // або 
// helloToYuliia()
// helloToOleh()





// function createFrameworkManager() {
//     const fw = ['Angular', 'React']

//     return {
//         print: function() {
//             console.log(fw.join(' '))
//         },
//         add: function(framework) {
//             fw.push(framework)
//         }
//     }
// }

// const manager = createFrameworkManager()
// // console.log(manager);
// // console.log(fw);
// manager.print()
// manager.add('VueJS')
// manager.print()





// setTimeout
// const fib = [1, 2, 3, 5, 8, 13]
// for (var i = 0; i < fib.length; i++) {
//     setTimeout(function() {
//         console.log(`fib[${i}] = ${fib[i]}`)
//     }, 1500)
// }


// const fib = [1, 2, 3, 5, 8, 13]
// for (let i = 0; i < fib.length; i++) {
//     setTimeout(function() {
//         console.log(`fib[${i}] = ${fib[i]}`)
//     }, 1500)
// }


const fib = [1, 2, 3, 5, 8, 13]
for (var i = 0; i < fib.length; i++) {
    ( function(j) {
        setTimeout(function() {
            console.log(`fib[${j}] = ${fib[j]}`)
        }, 1500)
    })(i)
}