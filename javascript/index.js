var age = 17;
//arithmatic operation

//Addition
var sum = 1 + age;

//Subtraction
var min = age - 1;

//multiplication
var times = age * 5;

//division
var div = age / 17;

//eksponen
var eks = age ** 2; // eks = 289 

//modulus
var a = age % 17;



//assignment operator
let a = 5;

//add assignment operator (+=)
a += 2;

//subtraction assignment operator (+=)
a -= 2;

// Penugasan Kali (*=):
a *= 2; // a = 10

//Penugasan Bagi (/=):
let a = 5;
a /= 2; // a = 2.5

//Penugasan Modulus (%=)
let a = 5;
a %= 2; // a = 1

//Penugasan Eksponen (=)**
let a = 5;
a **= 2; // a = 25



//Operator Perbandingan

//Sama dengan (==)
let a = 5 == "5"; // true

//Identik/Sama persis (===):
let a = 5 === "5"; // false

//Tidak sama dengan (!=):
let a = 5 != "5"; // false

//Tidak identik (!==):
let a = 5 !== "5"; // true

//Lebih besar dari (>):
let a = 5 > 2; // true

//Lebih kecil dari (<):
let a = 5 < 2; // false

//Lebih besar atau sama dengan (>=):
let a = 5 >= 5; // true

//Lebih kecil atau sama dengan (<=):
let a = 5 <= 5; // true



//Operator Logika

//AND (&&):
let a = true && false; // false

//OR (||)
let orOperation = (true || false); // true

//NOT (!)




//Operasi Bitwise

//AND (&)
let bitwiseAnd = (5 & 1); // 1 (0101 & 0001 = 0001)

//OR (|)
let bitwiseOr = (5 | 1); // 5 (0101 | 0001 = 0101)

//XOR (^)
let bitwiseXor = (5 ^ 1); // 4 (0101 ^ 0001 = 0100)

//NOT (~)
let bitwiseNot = (~5); // -6

//Shift kiri (<<)
let leftShift = (5 << 1); // 10 (0101 << 1 = 1010)

//Shift kanan (>>)
let rightShift = (5 >> 1); // 2 (0101 >> 1 = 0010)




//Operasi String
//Penggabungan (+)
let greeting = 'Hello' + ' ' + 'World!'; // 'Hello World!'

//Penggabungan dengan penugasan (+=):
let message = 'Hello';
message += ' World!'; // 'Hello World!'





//Operasi Ternary
//Kondisi ternary (condition ? expr1 : expr2)
let age = 18;
let canVote = (age >= 18) ? 'Yes' : 'No'; // 'Yes'




// Operasi Lainnya
//Typeof: Mengembalikan tipe dari operand.
let type = typeof 42; // 'number'
let typeString = typeof 'Hello'; // 'string'

//Delete: Menghapus properti dari objek.
let obj = { name: 'Alice', age: 25 };
delete obj.age;
console.log(obj); // { name: 'Alice' }

//In: Memeriksa apakah properti ada dalam objek.
//ditambahkan
//let obj = { name: 'Alice', age: 25 };
let exists = 'name' in obj; // true
let notExists = 'gender' in obj; // false

//Instanceof: Memeriksa apakah objek adalah instance dari kelas atau konstruktor tertentu.
let date = new Date();
let isInstanceOf = date instanceof Date; // true


