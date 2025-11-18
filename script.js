let nurik = [2, 4, 9, 52, 45, 67, 14, 78];
console.log(nurik, "tog` sonlar");

let juftlar = [];


for (let i = 0; i < nurik.length; i++) {
    if (nurik[i] % 2 === 0) {
        juftlar.push(nurik[i]);
    }
}

console.log(juftlar, "juft sonlar");
