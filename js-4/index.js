let x = prompt('Начальное положение Вашего коня на шахматной доске по вертикали!');
let y = prompt('Начальное положение Вашего коня на шахматной доске по горизонтали!');

let nextMoveX = prompt('Сделайте свой ход по вертикали!');
let nextMoveY = prompt('Сделайте свой ход по горизонтали!');

console.log(x, 'Начальное положение по оси x');
console.log(y, 'Начальное положение по оси y');
console.log(nextMoveX, 'Ход по оси x');
console.log(nextMoveY, 'Ход по оси y');


if (nextMoveX  == Number(x) + 1 && nextMoveY == Number(y) + 2) {
    alert(true);
} else if (nextMoveX  == Number(x) + 2 && nextMoveY == Number(y) + 1) {
    alert(true);
} else if (nextMoveX  == Number(x) + 1 && nextMoveY == Number(y) - 2) {
    alert(true);
} else if (nextMoveX  == Number(x) + 2 && nextMoveY == Number(y) - 1) {
    alert(true);
} else if (nextMoveX  == Number(x) - 1 && nextMoveY == Number(y) + 2) {
    alert(true);
} else if (nextMoveX  == Number(x) - 2 && nextMoveY == Number(y) + 1) {
    alert(true);
} else if (nextMoveX  == Number(x) - 1 && nextMoveY == Number(y) - 2) {
    alert(true);
} else if (nextMoveX  == Number(x) + 2 && nextMoveY == Number(y) - 1) {
    alert(true);
}  else if (nextMoveX < 1 && nextMoveX > 8) {
    alert(false);
} else if (nextMoveY < 1 && nextMoveY > 8) {
    alert(false);
}  else {
    alert(false);
}
