"use strict";

const d = 10, e = 20, f = 20;
let a, b, c;
var g, i, j;

a = 56;
console.log(a, "а первое");
a = "56";
console.log(a, "а второе");
a = d;
a = e;
a = f1(5, e);

// k = 45;
// console.log(k)
function f1(x, y) {
    // Очень сложный на 500 строчек
    return x + y;
}

// декларация, дефиниция, инициализация
// объявляение, продефинировали(тип данных объявили), присвоили значение

// 1. сложение

b = a + d;
console.log("Andrej" + "Podlubnyj")
console.log(56 + 2);

// 2. Вычитание

b = d - f;
// 3. Умножение

a = a * 2;

// 4. delenie

c = a / b;

// 5. modulo

a = b % 4; // нахождение остатка деления (по модулю)

// 6. ** возведение в степень

c = a ** 2;
c = Math.pow(a, 2);

// 7. Присваивания =

g = 56;

// 8. Меньше

a < c;
// 9. больше

a > c;
// Меньше или равно
a <= c;
// больше или равно
a >= c;

// операторы и операнды, унарные операторы,

