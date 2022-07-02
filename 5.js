let numVert = +prompt('Please, enter a height of the array');
let numHor = +prompt('Please, enter a length of the array');
let massive = [];

for (let i = 0; i < numVert; i++){
massive[i] = [];
for (let j = 0; j < numHor; j++){
massive[i][j] = Math.round(Math.random(i) * 100);
}}
console.log(massive);

let randUserNum = +prompt('Please, enter any number');
console.log(randUserNum);

let filtered = massive.filter(el => el % randUserNum === 0);
console.log(filtered);