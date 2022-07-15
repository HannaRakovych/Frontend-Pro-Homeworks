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
    console.log(getSymbolForName);

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

function getData(objSearch, symbol) {
    for(let i in objSearch) {
        if(symbol.toUpperCase() == i) {
            let k = Math.floor(Math.random() * objSearch[i].length);
            console.log(k);
            result = objSearch[i][k];
            console.log(result);
        }
    } return result;    
}

let objSearchName = {};
let objSearchSurname = {};
function searchNameAndSurname(gender, symbolForName, symbolForSurname) {
    
    if(gender == 'male' || gender == 'мужской'){
        objSearchName = maleNames; 
        objSearchSurname = maleSurnames;
    } else if(gender == 'female' || gender == 'женский'){
        objSearchName = femaleNames;
        objSearchSurname = femaleSurnames;
    } 


let resultName = getData(objSearchName, symbolForName); 
let resultSurname = getData(objSearchSurname, symbolForSurname);

console.log(resultName + ' ' + resultSurname);
}

searchNameAndSurname(getGender, getSymbolForName, getSymbolForSurname);