let userName = prompt('Пожалуйста, введите свой логин');

if (userName === 'Admin') {
    let password = prompt('Введите пароль');
    if (password === 'qWeRty123') {
        alert('Доступ предоставлен');
    } else if (password === '' || password === null) {
        alert('Отмена');
    } else {
        alert('Неправильный пароль');
    }
    
} else if (userName === '' || userName === null) {
    alert('Отменено');
} else {
    alert('Такой логин незарегестрирован')
}