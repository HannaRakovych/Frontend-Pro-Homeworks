let currentPosition = (3, 2);

const nextMoveHorizontal = prompt('Сделайте свой ход по горизонтали!');
const nextMoveVertical = prompt('Сделайте свой ход по вертикали!')

if (nextMoveHorizontal === '4' && nextMoveVertical === '4') {
    alert('true')
} else if (nextMoveHorizontal === '2' && nextMoveVertical === '4') {
    alert('true')
} else if (nextMoveHorizontal === '5' && nextMoveVertical === '3') {
    alert('true')
} else if (nextMoveHorizontal === '1' && nextMoveVertical === '3') {
    alert('true')
} else {
    alert(false)
}