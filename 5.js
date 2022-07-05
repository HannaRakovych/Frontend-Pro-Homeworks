let arrHeight = +prompt('Please, enter a height of the array');
let arrLength = +prompt('Please, enter a length of the array');
let massive = [];

for (let i = 0; i < arrHeight; i++){
massive[i] = [];
for (let j = 0; j < arrLength; j++){
massive[i][j] = Math.round(Math.random(i) * 100);
}}
console.log(massive.join(' * '));

let randUserNum = +prompt('Please, enter any number');
console.log(randUserNum);

let massive1D = massive.flat();
console.log(massive1D);

let filtered = massive1D.filter(elements => elements % randUserNum === 0 && elements !== randUserNum);
console.log(filtered);
console.log(filtered.length);