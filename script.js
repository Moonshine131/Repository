'use strict';
//Домашнее задание

//Привяжите всем инпутам следующее событие - по потери фокуса каждый 
//инпут выводит свое value в абзац с id="test"

// let elems = document.getElementsByTagName('input');
// let par = document.getElementById('test');
// for(let i = 0; i < elems.length; i++){
//     elems[i].addEventListener('blur', func);
// };

// function func(){
//     par.innerHTML = this.value;
// };


// Для всех инпутов сделайте так, чтобы они выводили свой value алертом 
//при нажатии на любой из них, но только по первому нажатию. Повторное 
//нажатие на инпут не должно вызывать реакции.

// let elems = document.getElementsByTagName('input');
//     for(let i = 0; i < elems.length; i++){
//         elems[i].addEventListener('click', func)
// }
// function func(){
//     this.innerHTML = alert(this.value);
//     this.removeEventListener('click', func); 
// }

// Даны абзацы с числами. По нажатию на абзац в нем должен появится 
//квадрат числа, которое он содержит.

// let par = document.getElementsByTagName('p');
// for(let i = 0; i < par.length; i++){
//     par[i].addEventListener('click', func);
// }
// function func(){
//     this.innerHTML = this.innerHTML ** 2;
// }

// Даны инпуты. Сделайте так, чтобы все инпуты по потери фокуса проверяли 
//свое содержимое на правильное количество символов. Сколько символов 
//должно быть в инпуте, указывается в атрибуте data-length. Если вбито 
//правильное количество, то граница инпута становится зеленой, если 
//неправильное - красной.

let elems = document.querySelectorAll('input');
for(let i = 0; i < elems.length; i++){
    elems[i].addEventListener('blur', func)
}

function func(){
    let trueLength = this.dataset.length;
    let inputValue = this.value.length;
    if(trueLength == inputValue){
        this.style.borderColor = 'green';
    } else {
        this.style.borderColor = 'red';
    }
}