function numbersFrom1To100() {
    console.log("Task 1:");
    for(let i = 1; i <= 100; i++) {
        console.log(i);
    }
    console.log();
}

numbersFrom1To100();

function numbersNTo0InReverseOrder(n) {
    console.log("Task 2:");
    for(let i = n; i >= 0; i--) {
        console.log(i);
    }
    console.log();
}

numbersNTo0InReverseOrder(10);
numbersNTo0InReverseOrder(5);

function numbers1ToNThrough2(n) {
    console.log("Task 3:");
    for(let i = 1; i <= n; i += 2) {
        console.log(i);
    }
    console.log();
}

numbers1ToNThrough2(10);
numbers1ToNThrough2(5);

function numbers1ToNThroughM(n, m) {
    console.log("Task 4:");
    for(let i = 1; i <= n; i += m) {
        console.log(i);
    }
    console.log();
}

numbers1ToNThroughM(10, 2);
numbers1ToNThroughM(8, 3);

function lettersInAWord(text) {
    console.log("Task 5:");
    for(let i = 0; i < text.length; i++) {
        console.log(text[i]);
    }
    console.log();
}

lettersInAWord("hello");
lettersInAWord("Bulgaria");

function sumOfVowels(text) {
    console.log("Task 6:");
    let sum = 0;
    for(i = 0; i < text.length; i++) {
        switch(text[i]) {
            case 'a': sum += 1; break;
            case 'e': sum += 2; break;
            case 'i': sum += 3; break;
            case 'o': sum += 4; break;
            case 'u': sum += 5; break;
            default: console.log(`${text[i]} is not a vowel!`); break;
        }
    }
    console.log(sum);
    console.log();
}

sumOfVowels("hello");
sumOfVowels("hi");
sumOfVowels("bye");
sumOfVowels("zzzz");

function clock() {
    console.log("Task 7:");
    for(let h = 0; h < 24; h++) {
        for(let m = 0; m < 60; m++) {
            console.log(`${h}:${m}`);
        }
    }
    console.log();
}

//clock();

function multiplicationTable() {
    console.log("Task 8:");
    for(let i = 1; i <= 10; i++) {
        for(let j = 1; j <= 10; j++) {
            console.log(`${i} * ${j} = ${i * j}`);
        }
        console.log();
    }
    console.log();
}

multiplicationTable();

function sumOfEvenNumbers(n) {
    console.log("Task 9:");
    let sum = 0;
    let iterations = 0;
    let number = 2;
    while(iterations < n) {
        sum += number;
        number += 2;
        iterations += 1;
    }  
    console.log(sum);
    console.log();
}

sumOfEvenNumbers(3);
sumOfEvenNumbers(5);
sumOfEvenNumbers(1);
sumOfEvenNumbers(0);
sumOfEvenNumbers(10);

function factorialCalculation(n) {
    console.log("Task 10: ");
    let factorial = 1;
    while(n > 0) {
        factorial *= n;
        n--;
    }
    console.log(factorial);
    console.log();
}

factorialCalculation(5);
factorialCalculation(3);
factorialCalculation(0);
factorialCalculation(1);
factorialCalculation(10);

function numberReversal(n) {
    console.log("Task 11:");
    let reversed = 0;
    while (n != 0) {
        reversed = reversed * 10 + (n % 10);
        n = Math.floor(n / 10);
    } 
    console.log(reversed);
    console.log();
}

numberReversal(123);
numberReversal(9876);
numberReversal(505);
numberReversal(10203);
numberReversal(7);

function fibonnacciSequenceSum(n) {
    console.log("Task 12:");
    let sum = 0;
    let a = 1;
    let b = 1;
    for(let i = 0; i < n; i++) {
        sum += a;
        let temp = a;
        a = b;
        b = temp + b;
    }
    console.log(sum);
    console.log();
}

fibonnacciSequenceSum(3);
fibonnacciSequenceSum(5);
fibonnacciSequenceSum(1);
fibonnacciSequenceSum(0);
fibonnacciSequenceSum(10);

function palidromeCheck(text) {
    console.log("Task 13:");
    let reversed = "";
    for(let i = text.length - 1; i >= 0; i--) {
        reversed += text[i];
    }
    console.log(text == reversed);
    console.log();
}

palidromeCheck("radar");
palidromeCheck("hello");
palidromeCheck("racecar");
palidromeCheck("java");
palidromeCheck("madam");

function armstrongNumberCheck(n) {
    console.log("Task 14:");
    let copy = n;
    let sum = 0, count = 0;
    while(copy != 0) {
        count++;
        copy = Math.floor(copy / 10);
    }
    copy = n;
    while(copy != 0) {
        let digit = copy % 10;
        sum += Math.pow(digit, count);
        copy = Math.floor(copy / 10);
    }
    if(n === sum) {
        console.log("Armstrong");
    } else {
        console.log("Not Armstrong");
    }
    console.log();
}

armstrongNumberCheck(153);
armstrongNumberCheck(370);
armstrongNumberCheck(123);
armstrongNumberCheck(407);
armstrongNumberCheck(1634);

function collatzConjecture(n) {
    console.log("Task 15:");
    let result = "";
    result += n;
    while(n != 1) {
        if(n % 2 === 0) {
            n /= 2;
        } else {
            n = n * 3 + 1;
        }
        result += " " + n;
    }
    console.log(result);
    console.log();
}

collatzConjecture(6);
collatzConjecture(12);
collatzConjecture(9);
collatzConjecture(200);
collatzConjecture(15);

function hollowRectanglePattern(rows ,columns) {
    console.log("Task 16:");
    for(let row = 0; row < rows; row++) {
        let string = "";
        for(let column = 0; column < columns; column++) {
            if(row === 0 || row === rows - 1  || column === 0 || column === columns - 1) {
                string += "*";
            } else {
                string += " ";
            }
        }
        console.log(string);
        console.log();
    }
}

hollowRectanglePattern(4, 6);
hollowRectanglePattern(2, 2);
hollowRectanglePattern(3, 4);

function newBuilding(floors, rooms) {
    console.log("Task 17:");
    let string = "";
    for(let i = floors; i > floors - 1; i--) {
        for(let j = 0; j < rooms; j++) {
            string += "L" + i + j + " ";
        }
    }
    string += "\n";
    for(let i = floors - 1; i > 0; i--) {
        if(i % 2 === 0) {
            for(let j = 0; j < rooms; j++) {
                string += "O" + i + j + " ";
            }
            string += "\n";
        } else {
            for(let j = 0; j < rooms; j++) {
                string += "A" + i + j + " ";
            }
            string += "\n";
        }
    }
    console.log(string);
    console.log();
}

newBuilding(6, 4);
newBuilding(3, 3);
newBuilding(4, 4);

function magicNumber(first, second, third) {
    console.log("Task 18:");
    let sequenceNumber = 1;
    let flag = false;
    for(let i = first; i <= second; i++) {
        for(let j = i; j <= second; j++) {
            if(i + j === third) {
                console.log(`Combination ${sequenceNumber} - (${i} + ${j} = ${third})`);
                flag = true;
                break;
            } 
            sequenceNumber++;
        }
        if(flag) break;
    }
    if(!flag) {
        console.log(`${sequenceNumber} combinations - neither equals ${third}`);
    }
    console.log();
}

magicNumber(1, 10, 5);
magicNumber(23, 24, 20);
magicNumber(1, 2, 3);

function padawanEquipment(money, students, lightsabersPrice, robesPrice, beltsPrice) {
    console.log("Task 19:");
    let freeBelts = Math.floor(students / 6);
    let totalLightsabers = Math.ceil(students * 1.1);
    let totalPrice = (totalLightsabers * lightsabersPrice) + (students * robesPrice) + (beltsPrice * (students - freeBelts)); 
    if(totalPrice <= money) {
        console.log(`The money is enough - it would cost ${totalPrice.toFixed(2)}lv.`);
    } else {
        console.log(`George Lucas will need ${(totalPrice - money).toFixed(2)}lv more.`);
    }
    console.log();
}

padawanEquipment(100, 2, 1.0, 2.0, 3.0);
padawanEquipment(100, 42, 12.0, 4.0, 3.0);

function rageExpenses(lostGameCounts, headsetPrice, mousePrice, keyboardPrice, displayPrice) {
    console.log("Task 20:");
    let totalExpenses = 0;
    let trashedHeadset = 0, trashedMouse = 0, trashedKeyboard = 0, trashedDisplay = 0;
    for(let i = 1; i <= lostGameCounts; i++) {
        if(i % 2 === 0) {
            trashedHeadset++;
        }
        if(i % 3 === 0) {
            trashedMouse++;
        } 
        if(i % 6 === 0) {
            trashedKeyboard++;
            if(trashedKeyboard % 2 == 0) {
                trashedDisplay++;
            }
        }
    }
    totalExpenses = trashedHeadset * headsetPrice + trashedMouse * mousePrice + trashedKeyboard * keyboardPrice + trashedDisplay * displayPrice;
    console.log(`Rage expenses: ${totalExpenses.toFixed(2)} lv.`);
    console.log();
}

rageExpenses(7, 2, 3, 4, 5);
rageExpenses(23, 12.50, 21.50, 40, 200);

function refactorSumOfOddNumbers(n) {
    console.log("Task 21: ");
    let sum = 0;
    for(let i = 0; i < n; i++) {
        console.log(2 * i + 1);
        sum += 2 * i + 1;
    }
    console.log(`Sum: ${sum}`);
    console.log();
}

refactorSumOfOddNumbers(5);
refactorSumOfOddNumbers(3);

function numbersUpTo1000EndingIn7() {
    console.log("Task 22: ");
    for(i = 0; i < 1000; i++) {
        if(i % 10 === 7) {
            console.log(i);
        }
    }
    console.log();
}

numbersUpTo1000EndingIn7();

function numbersUpTo1000EndingInN(n) {
    console.log("Task 22: ");
    for(i = 0; i < 1000; i++) {
        if(i % 10 === n) {
            console.log(i);
        }
    }
    console.log();
}

numbersUpTo1000EndingInN(6);
numbersUpTo1000EndingInN(8);

function encoding(n) {
    console.log("Task 24:");
    let count = 0;
    let copy = n;
    while(copy != 0) {
        count++;
        copy = Math.floor(copy / 10);
    }
    copy = n;
    for(let i = 0; i < count; i++) {
        let last = copy % 10;
        if(last === 0) {
            console.log("ZERO");
        } else {
            let string = "";
            let newNumber = last + 33;
            for(let j = 0; j < last; j++) {
                string += String.fromCharCode(newNumber);
            }
            console.log(string);
        }
        copy = Math.floor(copy / 10);
    }
    console.log();
} 

encoding(2049);
encoding(9347439);

function coinsAndNotes(coinsOf1, coinsOf2, coinsOf5, sum) {
    console.log("Task 25:");
    for(let i = 0; i <= coinsOf1; i++) {
        for(let j = 0; j <= coinsOf2; j++) {
            for(let k = 0; k <= coinsOf5; k++) {
                if((i * 1 + j * 2 + k * 5) === sum) {
                    console.log(`${i} * 1 lv. + ${j} * 2 lv. + ${k} * 5 = ${sum} lv.`);
                }
            }
        }
    }
    console.log();
}

coinsAndNotes(3, 2, 3, 10);
coinsAndNotes(5, 3, 1, 7);

function isPrime(num) {
    if(num < 2) return false;
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) return false;
    }
    return true;
}

function evenPairs(firstPair, secondPair, diff1, diff2) {
    console.log("Task 26:");
    let end1 = firstPair + diff1;
    let end2 = secondPair + diff2;

    for(let pair1 = firstPair; pair1 <= end1; pair1++) {
        if(!isPrime(pair1)) continue;

        for(let pair2 = secondPair; pair2 <= end2; pair2++) {
            if(!isPrime(pair2)) continue;

            console.log(`${pair1}${pair2}`);
        }
    }
    console.log();
}

evenPairs(10, 20, 5, 5);
evenPairs(10, 30, 9, 6);

function change(change) {
    console.log("Task 27:");
    let count = 0;
    let remaining = Math.round(change * 100);
    while(remaining >= 200) {
        remaining -= 200;
        count++;
    } 
    while(remaining >= 100) {
        remaining -= 100;
        count++;
    }
    while(remaining >= 50) {
        remaining -= 50;
        count++;
    }
    while(remaining >= 20) {
        remaining -= 20;
        count++;
    }
    while(remaining >= 10) {
        remaining -= 10;
        count++;
    }
    while(remaining >= 5) {
        remaining -= 5;
        count++;
    }
    while(remaining >= 2) {
        remaining -= 2;
        count++;
    }
    while(remaining >= 1) {
        remaining -= 1;
        count++;
    }
    console.log(count);
    console.log();
}

change(1.23);
change(2);
change(0.56);
change(2.73);

function pyramidOfNumber(n) {
    console.log("Task 28:");
    let currentNumber = 1;
    for(let row = 1; currentNumber <= n; row++) {
        let string = "";
        for(let i = 0; i < row && currentNumber <= n; i++) {
            string += currentNumber + ' ';
            currentNumber++;
        }
        console.log(string);
    }
    console.log();
}

pyramidOfNumber(7);
pyramidOfNumber(10);
pyramidOfNumber(15);

function uniqueCodes(upperLimit1, upperLimit2, upperLimit3) {
    console.log("Task 29:");
    for (let first = 2; first <= upperLimit1; first += 2) {  
        for (let second = 2; second <= upperLimit2; second++) {
            if (isPrime(second)) {
                for (let third = 2; third <= upperLimit3; third += 2) {  
                    console.log(`${first} ${second} ${third}`);
                }
            }
        }
    }
    console.log();
}

uniqueCodes(3, 5, 5);
uniqueCodes(6, 2, 6);

function squareOfAsterisks(n) {
    console.log("Task 30: ");
    for(let i = 0; i < n; i++) {
        let string = "";
        for(let j = 0; j < n; j++) {
            string += "* "
        }
        console.log(string);
    }
}

squareOfAsterisks(2);
squareOfAsterisks(3);