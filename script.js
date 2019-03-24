/*Task-1
Обязательное задание ( 3 балла )
:warning: pure JS
Создайте элемент 'p', при клике на котором появляется картинка размером 100px
При наведении указателя мышки на картинку ее размер должен плавно увеличиваться до 200px
При клике на картинке она должна исчезать*/
var someText = 'Hello JavaScript!';
var par = document.createElement('p');
document.body.appendChild(par).innerHTML = someText;
var image = document.createElement('img');
document.body.appendChild(image).innerHTML = image.src; 
image.src='https://static1.squarespace.com/static/5bfc8dbab40b9d7dd9054f41/t/5c0a9bc74ae237eda46bee75/1544199141715/js-512.png';
image.style = `
  display:none;
  background-color:yellow;
  transition: all 2s;`;
par.onclick = function(event){
  image.style.display = 'block';
  image.style.width = '100px';
};
image.onmouseover = function(event){
  image.style.width = '200px';
};
image.onclick = function(event){
  image.style.display = 'none';
};
//////////////////////////////////////////////////////////////////////////////////////////////
/*Task-2
Дополнительно ( 4 балла )
Создайте коллекцию вложенных друг в друга html-элементов с обработчиками событий click, mouseover, mouseout

var collection = []

function over ( event ) {
    ...
}
function out ( event ) {
    ...
}
function clickHandler ( event ) {
    ...
}

[ "first", "second", "third", "fourth" ].forEach (
    function ( tag, index, arr  ) {
        ...
    }
)
Установите атрибуты стиля width и height такие, чтобы вложенные элементы были меньше размером, чем родитель

Установите значение #ff00ff50 атрибута background-color каждому элементу

Установите значение dotted 1px yellow; атрибута border каждому элементу

При наступлении события mouseover значение атрибута background-color должно меняться на #ffff0050

При наступлении события mouseout атрибуту background-color должно устанавливаться исходное значение

При наступлении события click элемент должен быть удален

При наведении мышки на элемент должна появляться подсказка с его именем ( "first", "second", "third", "fourth" )*/




// in the process.........



/////////////////////////////////////////////////////////////////////////////////////
/*Task-3
Дополнительно ( 5 баллов )
Условия предыдущего задания изменить так:

var collection = []

function enter ( event ) {
    ...
}
function leave ( event ) {
    ...
}
function clickHandler ( event ) {
    ...
}

[ 1, 2, 3, 4, 5, 6, 7 ].forEach (
    ...
)
:warning: при удалении элемента его потомки должны оставаться*/



// in the process.........