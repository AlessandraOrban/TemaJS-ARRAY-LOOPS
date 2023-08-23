// 1. Tipăriți toate numerele pare de la 0 la 10

function numerePare (n,m) {
  if (n%2==0) {
   for (let i=n; i<=m; i=i+2) {
        console.log(`Numerele pare de la ${n} pana la ${m} sunt : ${i}`);
   }
  }
  else {
    for (let i=n+1; i<=m; i=i+2) {
      console.log(`Numerele pare de la ${n} pana la ${m} sunt : ${i}`);
    }
  }
 }

console.log(numerePare (0,100));
console.log(numerePare (9,20));
console.log("--------------------------------------------------------");

// 2. Calculați suma numerelor dintr-un șir de numere
const array1 = [10, 25, 2, 450, 56, 86];

let suma = 0;
for (let i=0; i<array1.length; i++) {
  suma = array1[i] + suma;
}
console.log(array1);
console.log("Suma sirului este :", suma);
console.log("--------------------------------------------------------");

// 3. Creați o funcție care inversează un șir de numere
const array2 = [10, 25, 20, 450, 56, 86];
const array3 = [203, -12, 23.44, -98];

function sirInversat (array) {
for (let i=0; i<array.length-1; i++) {
  var reverseArray = array.reverse();
 }
  console.log("Sirul inversat este :", reverseArray);
}

sirInversat(array2);
sirInversat(array3);
console.log("--------------------------------------------------------");

// 4. Returnează numărul de vocale dintr-un șir de caractere (string)
const text = "String de test";
const vocale = ["a", "e", "i", "o", "u"]

function numarulDeVocale(string) {
    let count = 0;

    for (let letter of string.toLowerCase()) {
        if (vocale.includes(letter)) {
            count++;
        }
    }
  console.log(`Numarul de vocale din sirul "${string}" este: ${count}`);
}

numarulDeVocale(text);