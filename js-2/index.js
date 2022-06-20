const userAge = prompt('Пожалуйста, укажите свой возраст');

console.log(userAge, 'user age');

if (userAge === 1) {
    alert('Вам ' + userAge + ' год.')
} else if ((userAge >= 2) && (userAge <= 4)) {
    alert('Вам ' + userAge + ' года.')
} else if ((userAge >= 5) && (userAge <= 20)) {
    alert('Вам ' + userAge + ' лет.')
}