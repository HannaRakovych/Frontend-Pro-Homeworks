const userAge = prompt('Пожалуйста, укажите свой возраст');
const form1 = 'год';
const form2 = 'года';
const form3 = 'лет';

if (userAge === 1, 21, 31, 41, 51, 61, 71, 81, 91, 101) {
    alert('Вам ' + userAge + ' ' + form1);

} else if ((userAge >= 2) && (userAge <= 4)) {
    alert('Вам ' + userAge + ' ' + form2);

} else if ((userAge >= 5) && (userAge <= 20)) {
    alert('Вам ' + userAge + ' ' + form3);

} else if ((userAge >= 22) && (userAge <= 24)) {
    alert('Вам ' + userAge + ' ' + form2);

} else if ((userAge >= 25) && (userAge <= 30)) {
    alert('Вам ' + userAge + ' ' + form3);

} else if ((userAge >= 32) && (userAge <= 34)) {
    alert('Вам ' + userAge + ' ' + form2);

} else if ((userAge >= 35) && (userAge <= 40)) {
    alert('Вам ' + userAge + ' ' + form3);

} else if ((userAge >= 42) && (userAge <= 44)) {
    alert('Вам ' + userAge + ' ' + form2);

} else if ((userAge >= 45) && (userAge <= 50)) {
    alert('Вам ' + userAge + ' ' + form3);

} else if ((userAge >= 52) && (userAge <= 54)) {
    alert('Вам ' + userAge + ' ' + form2);

} else if ((userAge >= 55) && (userAge <= 60)) {
    alert('Вам ' + userAge + ' ' + form3);

} else if ((userAge >= 62) && (userAge <= 64)) {
    alert('Вам ' + userAge + ' ' + form2);

} else if ((userAge >= 65) && (userAge <= 70)) {
    alert('Вам ' + userAge + ' ' + form3);

}  else if ((userAge >= 72) && (userAge <= 74)) {
    alert('Вам ' + userAge + ' ' + form2);

} else if ((userAge >= 75) && (userAge <= 80)) {
    alert('Вам ' + userAge + ' ' + form3);

} else if ((userAge >= 82) && (userAge <= 84)) {
    alert('Вам ' + userAge + ' ' + form2);

} else if ((userAge >= 85) && (userAge <= 90)) {
    alert('Вам ' + userAge + ' ' + form3);

} else if ((userAge >= 92) && (userAge <= 94)) {
    alert('Вам ' + userAge + ' ' + form2);

} else if ((userAge >= 95) && (userAge <= 100)) {
    alert('Вам ' + userAge + ' ' + form3);

} else if (userAge === ''|| userAge === null) {
    alert('Отменено');
} else {
    alert('Попробуйте еще раз!');
}

// В интернете я нашла гораздо более лаконичное решение:

// let age = +prompt('Введите Ваш возраст');
// let needForm;
// let form1 = "год", form2 = "года", form3 = "лет";
// let n = Math.trunc(Math.abs(age)) % 100,
//     n1 = n % 10;
 
//     if (n > 4 && n < 21) needForm = form3;
//     else if (n1 === 1) needForm = form1;
//     else if (n1 > 1 && n1 < 5) needForm = form2;
//     else needForm = form3;
//     alert('Вам ' + age + ' ' + needForm);


// Но мой мозг смог сгенерировать только то решение, которое выше :(