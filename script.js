// Домашнее задание
// Выписать в комментариях. Вам необходимо найти все переменные,
// функции, аргументы и параметры.
// Запишите имена в соответсвующие пункты
// Переменные: years, myDog, guests
// Функции: dogYears, makeTea, secret
// Встроенные функции:
// Аргументы: myDog, 4, guests, 'Earl Grey'
// Параметры: dogname, age, cups, tea

// function dogYears(dogname, age){
//     let years = age * 2;
//     console.log(dogName + ' is ' + years + ' years old');
// }
// let myDog = 'Rex';
// dogYears(myDog, 4);

// function makeTea (cups, tea){
//     console.log('Breawing ' + cups + ' cups of' + tea);
// }
// let guests = 2;
// makeTea(guests, 'Earl Grey');

// function secret(){
//     console.log('The secret of life is 28');
// }
// secret();


// Дана строка 'JS'. Сделайте из нее строку 'js'.

// let txt = 'JS';
// console.log(txt.toLowerCase());


// Дана строка 'я люблю JS!'. Вырежите из нее слово 
// 'люблю' и слово 'javascript' тремя разными способами 
// (через substr, substring, slice).

// let txt = 'я люблю JS!';
// console.log(txt.substr(1, 7));
// console.log(txt.substr(8, 2));
// console.log(txt.substring(1, 8));
// console.log(txt.substring(8, 10));
// console.log(txt.slice(1, 8));
// console.log(txt.slice(8, 10));

// Дана строка 'я люблю JS!'. Найдите позицию 
// подстроки 'люблю'.

// let txt = 'я люблю JS!';
// console.log(txt.indexOf('люблю'));

// Дана переменная txt, в которой хранится какой-либо текст. 
// Реализуйте обрезание длинного текста по следующему 
// принципу: если количество символов этого текста больше 
// заданного в переменной n, то в переменную result запишем 
// первые n символов строки txt и добавим в конец 
// троеточие '...'. В противном случае в переменную 
// result запишем содержимое переменной txt.

// let txt = '';

// const clippingText = function (){
//     let n = 5;
//     if (txt.length > n){
//         let result = txt.substring(0, 5);
//         console.log(result + '...');
//     } else {
//         let result = txt;
//         console.log(result);
//     }
// }
// clippingText();


// Для решения задач данного блока вам понадобятся следующие 
// методы: replace.
// Дана строка 'Я-люблю-JS!'. 
// Замените все  '-' на '!' с помощью глобального 
// поиска и замены.

// let txt = 'Я-люблю-JS!';
// console.log(txt.replace(/-/g, '!'));

// Дана строка 'я люблю JS'. С помощью метода split 
// запишите каждое слово этой строки в отдельный элемент 
// массива.

// let txt = 'я люблю JS';
// console.log(txt.split(' '));

// Дана строка 'привет мир'. С помощью метода split 
// запишите каждый символ этой строки в отдельный элемент 
// массива.

let txt = 'привет мир';
console.log(txt.split(''));