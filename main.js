console.log("------------------- ex 1 ----------------------------");

// 1. Napisati program koji, koristeći promenljive a i b, koje sadrže dužine stranica pravougaonika, izračunava njegov obim i 
// površinu.

let a = 8;
let b = 3;

O = 2 * (a + b);
P = a * b;

console.log("Obim: " + O + " Povrsina: " + P);



console.log("------------------- ex 2 ----------------------------");

// 2. Napisati program koji računa kvadrat neke prozivoljne promenljive

let someValue = 5;
console.log(someValue * someValue);



console.log("------------------- ex 3 ----------------------------");

// 3. Napisati program koji kreira 2 promenljive a i b i dodeljuje im vrednost 2 broja. Ako je zbir ovih vbrojeva veći od 10, ispisati ga, u 
// suprotnom ispisati njihovu razliku

a = 52;
b = 5;

sum = a + b;
difference = a - b;

if (sum > 10) {
    console.log(sum);
} else {
    console.log(difference);
}



console.log("------------------- ex 4 ----------------------------");

// 4.  Napisati program koji sabira prvih 10 prirodnih brojava.

let sumOfNaturalNumber = 0;

for (let i = 0; i <= 10;  i++) {
    sumOfNaturalNumber = sumOfNaturalNumber + i;
}

console.log(sumOfNaturalNumber);



console.log("------------------- ex 5 ----------------------------");

// 5. Ispisati elemente proizvoljnog niza brojeva, duplirane.
let arr = [2, 3, 1, 4];
newArray = [];

arr.reduce(function (res, current) {
    newArray = res.concat([current, current]);
    return newArray;
}, []);

console.log(newArray);



console.log("------------------- ex 6 ----------------------------");

// 6. Napisati program koji računa srednju vrednost elemenata proizvoljnog niza brojeva

let sumOfElements = 0;
let someArray = [1, 3, 7, 6, 87];

for(let i = 0; i < someArray.length; i++ ){
    sumOfElements += parseInt( someArray[i], 10 );
}

let avg = sumOfElements/someArray.length;

console.log("The sum of all the elements is: " + sumOfElements + " The average is: " + avg );



console.log("------------------- ex 7 ----------------------------");

// 7. Kreirati funkciju koja za data 3 broja racuna njihov prosek.
averageOf3Numbers = 0;

function average(number1, number2, number3) {
    averageOf3Numbers = (number1 + number2 + number3) / 3;
    return averageOf3Numbers;
}

average(3, 4, 6);
console.log(average(3, 4, 6));



console.log("------------------- ex 8 ----------------------------");

// 8. Napisati funkciju celsiusToFahrenheit koja prima temperaturu u stepenima Celzijusa (°C) i vraća odgovarajuću temperaturu u 
// stepenima Farenhajta (°F). Formula za konverziju je sledeća: [°F] = [°C] × 9 ⁄ 5 + 32.

function celsiusToFahrenheit(C) {
    F = (C * 9) / 5 + 32
    return F;
}

console.log(celsiusToFahrenheit(34));
celsiusToFahrenheit(34);



console.log("------------------- ex 9 ----------------------------");

// 9. Napisati funkciju koja prima proizvoljni niz i neki broj n, i ispisuje elemente niza, uvećane za n, pomoću forEach .

let newArr = [];
arrayOfNumbers = [1, 3, 4, 45];
n = 3;

function returnAllElementsOfArray (arrayOfNumbers, n) {
    arrayOfNumbers.forEach((element) => {
        newArr.push(element + n)
    });
    console.log(newArr);
    return newArray;
}

returnAllElementsOfArray([1, 3, 7], 3);




console.log("------------------- ex 10 ----------------------------");

// 10. Napisati funkciju koja kao parametar uzima niz, a vraca sumu elemenata tog niza

let sumOfArray = 0;

function arraySum(arr) {
    for (const value of arr) {
        sumOfArray += value;
    }
    
    console.log(sumOfArray);
    return sumOfArray; 
}

arraySum([3, 5, 4, 56, 5]);



console.log("------------------- ex 11 ----------------------------");

// 11. Napisati funkciju koja za parametre uzima niz i broj i vraca sve elemente niza koji su veci od tog broja.
let numbersGreaterThanI = [];

function returnAllElementsOfArrayGreatherThen10(arr, i) {
    arr.forEach(element => {
        if (element >= i) {
            numbersGreaterThanI.push(element);
        } else {
            console.log("Don't push element in array");
        }
    });
    return numbersGreaterThanI;
}

console.log(returnAllElementsOfArrayGreatherThen10([3, 5, 6, 6, 1], 4));