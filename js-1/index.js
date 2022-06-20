const userName = prompt('Пожалуйста, введите своё имя');
const userPassword = prompt('Пожалуйста, введите пароль');

console.log(userName, 'name');
console.log(userPassword, 'password');

if ((userName === 'admin') && (userPassword === 'qWeRty123')) {
    alert('Доступ надано')
}