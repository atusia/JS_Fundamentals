// DATA TYPES

// 1. Numbers
// Тип даних «number» - це будь яке число від "-2 в 53 степені + 1" до "2 в 53 степені - 1"(2 в 53 степені - це 16-значне число).

// Regular numbers:
let n = 123; // integer
let n = 23.45; // floating point numbers

console.log(1e9); // 1000000000 - 1 billion, literally: 1 and 9 zeroes
console.log(7.3e9); // 7300000000 - 7 billion 300 millions

let ms = 0.000001;
let ms = 1e-6; // six zeroes to the left from 1

123..toString(); // '123' - If we want to call a method directly on a number, then we need to place two dots .. after it.
// Also could write (123456).toString().

// Rounding - працює лише з десятими
Math.floor(3.1); // 3
Math.floor(3.6); // 3 - Rounds down
Math.floor(-3.6); // -4

Math.ceil(2.1); // 3
Math.ceil(2.7); // 3 - Rounds up
Math.ceil(-2.1); // -2

Math.round(4.8); // 5
Math.round(4.2); // 4 - Rounds to the nearest integer
Math.round(-4.4); // -4

Math.trunc(5.3); // 5
Math.trunc(5.9); // 5 - Removes anything after the decimal point without rounding
Math.trunc(-5.4); // -5

// якщо соті і тисячні, тоді
let num = 1.23456;
console.log(Math.floor(num * 100) / 100); // 1.23456 -> 123.456 -> 123 -> 1.23

// або другий спосіб:
let num1 = 12.34;
console.log(num1.toFixed(1)); // "12.3" - rounds the number to n digits after the point and returns a string
//This rounds up or down to the nearest value, similar to Math.round

let sum = 0.1 + 0.2; // 0.30000000000000004
sum.toFixed(2); // '0.30' для того, щоб виправити неточність обчислень в бінарній системі
console.log(+sum.toFixed(2)); // 0.3

// Special numeric values:
console.log(1 / 0); // Infinity
console.log(-1 / 0); // -Infinity
console.log("not a number" / 2); // NaN - це результат неправильної чи невизначеної арифметичної дії, означає розрахункову помилку.

console.log(isNaN(NaN)); // true
console.log(isNaN("str")); // true
console.log(isNaN(16)); // false

// isFinite(value) converts its argument to a number and returns true if it’s a regular number, not NaN/Infinity/-Infinity
console.log(isFinite("15")); // true
console.log(isFinite("str")); // false, because a special value: NaN
console.log(isFinite(Infinity));// false
//Sometimes isFinite is used to validate whether a string value is a regular number:
let num2 = +prompt("Enter a number", ''); // will be true unless you enter Infinity, -Infinity or not a number
console.log(isFinite(num2));

//   SameValue
Object.is(NaN, NaN); // true;
Object.is(0, -0); // false;
Object.is(a, b); // is the same as a === b

console.log(+'100px'); // NaN
console.log(Number('100px')); // NaN
// function parseInt returns an integer, whilst parseFloat will return a floating-point number
console.log(parseInt('100px')); // 100
console.log(parseInt('12.5em')); // 12
console.log(parseFloat('12.5em')); // 12.5
console.log(parseInt('a123')); // NaN, the first symbol stops the process


Math.random(); // Returns a random number from 0 to 1 (not including 1)
Math.max(3, 5, -10, 0, 1); // 5
Math.min(3, 5, -10, 0, 1); // -10
Math.pow(2, 10); // 2 in power 10 = 1024, Returns n raised the given power Math.pow(n, power)


//Tasks:

// 1) Create a script that prompts the visitor to enter two numbers and then shows their sum.
let a = +prompt("The first number?", ""); // в промпт передається стрінга, тому потрібно плюсик, щоб перетворити в число
let b = +prompt("The second number?", ""); // без перетворення , просто сконкантинує рядки
console.log(a + b);

// 2) According to the documentation Math.round and toFixed both round to the nearest number: 0..4 lead down while 5..9 lead up.
// 6.35.toFixed(1) - why is 6.35 rounded to 6.3, not 6.4?
6.35.toFixed(20); // '6.34999999999999964473'
// How to round 6.35 the right way?
console.log(Math.round(6.35 * 10) / 10); // 6.35 -> 63.5 -> 64(rounded) -> 6.4

// 3) Create a function readNumber which prompts for a number until the visitor enters a valid numeric value.
// The resulting value must be returned as a number.
// The visitor can also stop the process by entering an empty line or pressing “CANCEL”.
// In that case, the function should return null.
let readNumber = () => {
    let num;

    do {
        num = prompt("Enter number", 0);
    } while (!isFinite(num));
    if (num === null || num === "") return null;

    return +num;
};
console.log(`Read: ${readNumber()}`);

// 4) Write the function Random(min, max) to generate a random floating-point number from min to max (not including max).
function Random(min, max) {
    return min + Math.random() * (max - min);
}

console.log(Random(1, 5));
console.log(Random(1, 5));
console.log(Random(1, 5));


// 2. BigInt
// цей тип даних доданий в мову з метою дати можливість працювати з цілими числами будь якої довжини, наприклад в криптографії
// чи при використанні мітки часу «timestamp» з мікросекундами. Підтримується лише в Firefox і Chrome.

// символ "n" в кінці означає, що це BigInt
const biggestInt = 1234567890123456789012345678901234567890n;
console.log(typeof bigestInt); // bigInt

//A bigint is created by appending n to the end of an integer literal
// or by calling the function BigInt that creates bigints from strings, numbers etc.
const sameBigint = BigInt("1234567890123456789012345678901234567890");
const bigintFromNumber = BigInt(10); // same as 10n

console.log(1n + 2n); // 3n
console.log(5n / 2n); // 2n  - returns the result rounded towards zero
console.log(1n + 2); // Error: Cannot mix BigInt and other types

let bigint = 1n;
let number = 2;
// number to bigint
console.log(bigint + BigInt(number)); // 3n
// bigint to number
console.log(Number(bigint) + number); // 3

console.log(2n > 1n); // true
console.log(2n > 1); // true

console.log(1 == 1n); // true
console.log(1 === 1n); // false

// When inside if or other boolean operations, bigints behave like numbers
// Boolean operators, such as ||, && and others also work with bigints similar to numbers:
if (0n) { // falsy value
    // never executes
}
console.log(1n || 2); // 1 (1n is considered truthy)
console.log(0n || 2); // 2 (0n is considered falsy)

// 3. String
// Strings in JavaScript are encoded using UTF-16

console.log("привіт"); //привіт
console.log('привіт'); //привіт

const str = 'світ';
console.log(`привіт ${str}`); // привіт світ
console.log(`результат: ${2 + 3}`); // результат: 5

// newline character
let guestList = "Guests:\n * John\n * Pete\n * Mary";
console.log(guestList);
//  Guests:
//  * John
//  * Pete
//  * Mary
let str2 = `Hello
World`;
console.log(str2);
// Hello
// World // backticks переносить слова без додаткових символів, при подвійних і одинарних лапках треба додавати \n

console.log('I\'m the Walrus!'); // I'm the Walrus!
console.log(`The backslash: \\`); // The backslash: \

// length is a numeric property, not a function. There is no need to add parenthesis after it.
console.log(`My\n`.length); // 3
console.log(`hello world`.length); // 11


let str1 = `Hello`;
// the first character
console.log(str1[0]); // H  //новий спосіб
console.log(str1.charAt(0)); // H //старий спосіб
// the last character
console.log(str1[str1.length - 1]); // o
// The only difference between them is that if no character is found,
// [] returns undefined, and charAt returns an empty string
let str3 = `Hello`;
console.log(str3[1000]); // undefined
console.log(str3.charAt(1000)); // '' (an empty string)

for (const char of str3) {
    console.log(char);
}
// H
// e
// l
// l
// o

// Strings can’t be changed in JavaScript. It is impossible to change a character.
// They are immutable!
let str4 = 'Hi';
str4[0] = 'h'; // 'h'
console.log(str4[0]); // H - is not changed

str4 = 'h' + str4[1]; // replace the whole string
console.log(str4); // hi

`InterFASE`.toUpperCase(); // 'INTERFASE'
`InterFASE`.toLowerCase(); // 'interfase'
`InterFASE`[0].toLowerCase(); // 'i'

let str5 = 'Widget with id';
str5.indexOf('Widget'); // 0, because 'Widget' is found at the beginning
str5.indexOf('widget'); // -1, not found, the search is case-sensitive
str5.indexOf("id"); // 1, "id" is found at the position 1 (..idget with id)
str5.indexOf('id', 2); // 12 - передаємо в аргумет 2, що означає вибрати той, який другий раз зустрічається в рядку
// Якщо потрібно знайти символ всюди в рядку, то проганяємо через цикл
let str7 = "As sly as a fox, as strong as an ox";
let target = "as";
let pos = -1;
while ((pos = str7.indexOf(target, pos + 1)) !== -1) {
    console.log(pos);
}
// 7
// 17
// 27
`stringtmtmtnjnt`.lastIndexOf(`t`, 5);

let str8 = "Widget with id";
if (str8.indexOf("Widget") !== -1) {
    console.log("We found it"); // works now!
}

// ~n equals -(n+1)
// So, the test if ( ~str.indexOf("...") ) is truthy only if the result of indexOf is not -1. -(-1+1) = 0
// People use it to shorten indexOf checks:
let str9 = "Widget";
if (~str.indexOf("Widget")) {
    console.log('Found it!'); // works - це старий код, зараз використовують .includes
}

"Widget with id".includes("Widget"); // true
"Hello".includes("Bye"); // false

"Widget".includes("id"); // true
"Widget".includes("id", 3); // false, from position 3 there is no "id"

"Widget".startsWith("Wid"); // true, "Widget" starts with "Wid"
"Widget".endsWith("get"); // true, "Widget" ends with "get"

let str10 = "stringify";
str10.slice(0, 5); // 'strin', the substring from 0 to 5 (not including 5)
str10.slice(0, 1); // 's', from 0 to 1, but not including 1, so only character at 0
str10.slice(2); // 'ringify', from the 2nd position till the end
str10.slice(-4, -1); // 'gif'  // start at the 4th position from the right, end at the 1st from the right

str10.substring(2, 6); // "ring"
str10.substring(6, 2); // "ring"  // Negative arguments are (unlike slice) not supported, they are treated as 0.
// ...but not for slice:
str10.slice(2, 6); // "ring" (the same)
str10.slice(6, 2); // "" (an empty string)

str10.substr(2, 4); // 'ring', from the 2nd position get 4 characters
str10.substr(-4, 2); // 'gi', from the 4th position from the end get 2 characters

'   As sly as a fox, as strong as an ox    '.trim(); //'As sly as a fox, as strong as an ox' - забирає пробіли спереду і зізаду стрічки
'hello'.repeat(5); // 'hellohellohellohellohello'

//A lowercase letter is always greater than the uppercase:
'a' > 'Z'; // true
// Letters with diacritical marks are “out of order”:
'Österreich' > 'Zealand'; // true


// Tasks

// 1) Write a function ucFirst(str) that returns the string str with the uppercased first character
let ucFirst = str => {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
};
console.log(ucFirst("john"));
console.log(ucFirst('margaret'));

// 2) rite a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false
let checkSpam = str => {
    let newStr = str.toLowerCase();
    return newStr.includes('viagra') || newStr.includes('xxx')
};
console.log(checkSpam('buy ViAgRA now')); // true
console.log(checkSpam('free xxxxx')); // true
console.log(checkSpam("innocent rabbit")); // false

// 3)


// 4. Boolean (logical type)
// The boolean type has only two values: true and false

let isGreater = 4 > 1;
console.log(isGreater); // true

// 5. Null



