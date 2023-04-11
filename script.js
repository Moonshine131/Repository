// Задача №1

// function buttonClick(){
//     let elem = document.getElementById('elem');
//     elem.innerHTML = 'Ку-ку! А я <b>жирный!</b>'
// }

// Задача №2

// function buttonClick(){
//     let elem = document.getElementById('elem');
//     console.log(elem);
//     elem.outerHTML = '<h3>Абзац превратился в h3!</h3>';
// }

// Задача №3

// function buttonClick(){
//     let elem = document.getElementById('elem');
//     elem.outerHTML = '<h3>' + elem.innerHTML + '</h3>';
// }

// Задача №4

// function buttonClick(){
//     let input1 = Number(document.getElementById('input1').value);
//     let input2 = Number(document.getElementById('input2').value);
//     let sum = document.getElementById('sum');
//     sum.innerHTML = input1 + input2;
//     if (sum.innerHTML >= 0 || sum.innerHTML <= 0){
//         sum.innerHTML = input1 + input2
//     } else {
//         alert('Введите числа!')
//     }
// }

// Задача №5

function buttonClick() {
    let elems = document.getElementsByTagName('p');
    for(let i = 0; i < elems.length; i++){
        elems[i].innerHTML =  i        
    }
}


