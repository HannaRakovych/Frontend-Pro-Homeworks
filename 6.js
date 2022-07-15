// Task #6

const maleNames = {
    'А': ['Александр', 'Андрей'],
    'Б': ['Борис', 'Богдан'],
    'В': ['Владимир', 'Виктор'],
    'Г': ['Григорий', 'Глеб'],
    'Д': ['Денис', 'Даниил'],
    'К': ['Константин', 'Кирилл'],
    'М': ['Максим', 'Марк']
}
const femaleNames = {
    'А': ['Адриана', 'Алиса'],
    'Б': ['Богдана', 'Божена'],
    'В': ['Вера', 'Вероника'],
    'Г': ['Габриэлла', 'Галина'],
    'Д': ['Диана', 'Даниэла'],
    'К': ['Карина', 'Ксения'],
    'М': ['Мелания', 'Мия']
}

const maleSurnames = {
    'А': ['Абанов', 'Абалов'],
    'Б': ['Баазов', 'Бабайкин'],
    'В': ['Вавикин', 'Вагов'],
    'Г': ['Габидов', 'Габриилов'],
    'Д': ['Давидов', 'Дабаев'],
    'К': ['Кабакин', 'Кабанеев'],
    'М': ['Мавин', 'Мавшин']
}

const femaleSurnames = {
    'А': ['Абанова', 'Абалова'],
    'Б': ['Баазова', 'Бабайкина'],
    'В': ['Вавикина', 'Вагова'],
    'Г': ['Габидова', 'Габриилова'],
    'Д': ['Давидова', 'Дабаева'],
    'К': ['Кабакина', 'Кабанеева'],
    'М': ['Мавина', 'Мавшина']
}

let getGender = prompt("Пожалуйста, укажите свой пол");
    console.log(getGender);

let getSymbolForName = prompt("Пожалуйста, выберите букву из предложенного списка на которую будет начинаться имя! Список букв:'А', 'Б', 'В','Г','Д','К','М'. ");
    console.log(symbolForName);

let getSymbolForSurname = prompt("Пожалуйста, выберите букву из предложенного списка на которую будет начинаться фамилия! Список букв:'А', 'Б', 'В','Г','Д','К','М'. ");
    console.log(getSymbolForSurname);

function validate(value) {
    let v = /ˆ[а-я]$/i;
    if (v.test(value)) {
        return true;
    } else {
        return false;
    }
}

let objSearchName = {};
function searchName(gender, symbolForName) {
    if(gender == 'male' || gender == 'мужской'){
        objSearchName = maleNames;
    } else if(gender == 'female' || gender == 'женский'){
        objSearchName = femaleNames;
    }

    let resultName = '';
    for(let i in objSearchName) {
        if(symbolForName.toUpperCase() == i) {
            let n = Math.floor(Math.random() * objSearchName[i].length);
            console.log(n);
            resultName = objSearchName[i][n];
            console.log(resultName);
        }
    } return resultName;
}

let objSearchSurname = {};
function searchSurname(gender, symbolForSurname) {
    
    if(gender == 'male' || gender == 'мужской'){
        objSearchSurname = maleSurnames;
    } else if(gender == 'female' || gender == 'женский'){
        objSearchSurname = femaleSurnames;
    }

    let resultSurname = '';
    for(let i in objSearchSurname) {
        if(symbolForSurname.toUpperCase() == i) {
            let m = Math.floor(Math.random() * objSearchSurname[i].length);
            console.log(m);
            resultName = objSearchSurname[i][m];
            console.log(resultSurname);
        }
    } return resultSurname;
}

searchName(getGender, getSymbolForName);
searchSurname(getGender, getSymbolForSurname);