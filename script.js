'use strict';
//Домашнее задание
// Создайте объект city1 (var city1 = {}), укажите у него свойства name 
// (название города, строка) со значением «ГородN» и population 
// (населенность города, число) со значением 10 млн.

// let city1 = {};
// city1.name = 'ГородN';
// city1.population = 10000000;

// Создайте объект city2 через нотацию {name: "ГородM", population: 1e6}.

// let city2 = {
//     name: 'ГородM',
//     population: 1e6
// }

// Создайте у объектов city1 и city2 методы getName(), которые вернут 
// соответствующие названия городов.

// let city1 = {};
// city1.name = 'ГородN';
// city1.population = 10000000;
// city1.getName = function () {
//     return city1.name
// };

// let city2 = {
//     name: 'ГородM',
//     population: 1e6,
//     getName () {
//         return this.name
//     }
// };
//     city1.getName();
//     city2.getName();
//     console.log(city1.getName());
//     console.log(city2.getName());

// Создайте методы exportStr() у каждого из объектов. Этот метод должен 
// возвращать информацию о городе в формате 
// «name=ГородN\npopulation=10000000\n». Для второго города будет строка 
// со своими значениями. Примечание: можно обращаться к каждому свойству 
// через цикл for/in, но методы объекта возвращать не нужно.

// let city1 = {};
// city1.name = 'ГородN';
// city1.population = 10000000;
// city1.getName = function () {
//     return city1.name
// };

// city1.exportStr = function (){
//     let result = '';
//     for(let key in city1){
//         if (typeof city1[key] != 'function')
//         result += ` ${key}  =  ${city2[key]}`;     
//     }
//     return result
//     };
    
// let city2 = {
//     name: 'ГородM',
//     population: 1e6,
//     getName () {
//         return this.name
//     },
//     exportStr () {
//         let result = '';
//         for(let key in city2){
//             if (typeof city2[key] != 'function')
//         result += ` ${key}  =  ${city2[key]}`;
//     }
//     return result
//     }
// };

//     console.log(city1.getName());
//     console.log(city2.getName());

//     console.log(city1.exportStr());
//     console.log(city2.exportStr());

// Создайте глобальную функцию getObj(), которая возвращает this. 
// А у каждого из объектов city1 или city2 метод getCity, который 
// ссылается на getObj. Проверьте работу метода. Примечание: к объекту 
// вызова можно обратиться через this..

function getObj() {
    return this
};

let city1 = {};
city1.name = 'ГородN';
city1.population = 10000000;
city1.getCity = getObj;
city1.getName = function () {
    return city1.name
};

city1.exportStr = function (){
    let result = '';
        for(let key in city1){
            if (typeof city1[key] != 'function')
            result += ` ${key}  =  ${city2[key]}`;     
        }
        return result
    };
    
let city2 = {
    name: 'ГородM',
    population: 1e6,
    getCity: getObj,
    getName () {
        return city2.name
    },
    exportStr () {
        let result = '';
        for(let key in city2){
            if (typeof city2[key] != 'function')
        result += ` ${key}  =  ${city2[key]}`;
    }
    return result
    }
};

console.log(city1.getName());
console.log(city2.getName());

console.log(city1.exportStr());
console.log(city2.exportStr());

console.log(city1.getCity());
console.log(city2.getCity());

// Создайте массив d1 с числовыми величинами 45,78,10,3.  
// Добавьте в массив d1 еще одно число ( d1[7] = 100). 
// Выведите в консоль весь массив и его элементы с индексами 6 и 7.

let d1 = [45, 78, 10, 3];
d1[7] = 100;
console.log(d1);
console.log(d1[6]);
console.log(d1[7]);


// Создайте массив d2 с числовыми величинами 45,78,10,3. 
// Посчитайте в переменную sum2 сумму чисел в нем, при помощи цикла for.

let d2 = [45, 78, 10, 3];
let sum2 = 0;
for(let i = 0; i < d2.length; i++){
    sum2 = sum2 + d2[i]
}
console.log(sum2);

// Создайте массив d3 с числовыми величинами 45,78,10,3. 
// Добавьте в массив d3 еще одно число (например, d[7] = 100) 
// Посчитайте в переменную sum3 сумму чисел в нем, при помощи цикла for/in.

let d3 = [45, 78, 10, 3];
d3[7] = 100;
let sum3 = 0;
for(let i in d3){
    sum3 = sum3 + d3[i];
    i++
}
console.log(sum3);

// Создайте массив d4 с числовыми величинами 45,78,10,3. 
// Напишите функцию сортировки my(a,b), которая при вызове d4.sort(my) 
// отсортирует элементы массива по убыванию чисел. Вызовите d4.sort(my)

let d4 = [45,78,10,3];
function my(a, b){
    return b - a
}
console.log (d4.sort(my))