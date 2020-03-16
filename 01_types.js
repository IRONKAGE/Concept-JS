// 1️⃣ null, 2️⃣ undefined, 3️⃣ boolean, 4️⃣ number, 5️⃣ string, 6️⃣ object, 7️⃣ symbol

// console.log(typeof(0))

// console.log(typeof 0)
// console.log(typeof true)
// console.log(typeof 'JavaScript') // "", '', ``
// console.log(typeof undefined)
// console.log(typeof {}) //Date, Math
// console.log(typeof Symbol('JS'))
// console.log(typeof null)
// console.log(typeof function() {})
// console.log(typeof NaN)


// console.log(typeof (1/0))
// console.log(1 / 0)
// console.log(typeof (undefined * 0))
// console.log(undefined * 1)





// Приведення типів
// let language = 'JavaScript'
// if (language) {
//     console.log('Найкраща мова це: ', language);
// }

// 1️⃣'', 2️⃣0, 3️⃣null, 4️⃣undefined, 5️⃣NaN, 6️⃣false
// console.log(Boolean(''));
// console.log(Boolean('Hello'));
// console.log(Boolean(' '));
// console.log(Boolean('0'));
// console.log(Boolean(0));
// console.log(Boolean(null));
// console.log(Boolean([]));
// console.log(Boolean({}));
// console.log(Boolean('function(){}'));
// console.log(Boolean('() => {}'));





// Рядки та Числа
// console.log(1 + '2'); // String 12
// console.log('' + 1 + 0); //String 10
// console.log('' - 1 + 0); //Number -1
// console.log('3' * '8'); //Number 24
// console.log(4 + 10 + 'px'); //String 14px
// console.log('px' + 5 + 10); //String px510
// console.log('42' - 40); //Number 2
// console.log('42px' - 2); //NaN
// console.log(null + 2); //Number 2
// console.log(undefined + 54) // NaN





// 1️⃣== vs 2️⃣===
// console.log(2 == '2');
// console.log(2 === '2');

// console.log(undefined == null);
// console.log(undefined === null);

// console.log('0' == false);
// console.log('0' == 0);
// console.log(0 == 0);

// =====
console.log(false == '');
console.log(false == []);
console.log(false == {});

console.log('' == 0);
console.log('' == []);
console.log('' == {});

console.log(0 == []);
console.log(0 == {});
console.log(0 == null);