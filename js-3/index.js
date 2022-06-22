const firstNum = prompt('Введите первое число');
const secondNum = prompt('Введите второе число');
const thirdNum = prompt('Введите третье число');
const fourthNum = prompt('Введите четвертое число');

const mathExample = Math.min(firstNum, secondNum, thirdNum, fourthNum) * Math.max(firstNum, secondNum, thirdNum, fourthNum);

alert(mathExample);