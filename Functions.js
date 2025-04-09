function smallestOfThreeNumbers(num1, num2, num3) {
    console.log("Task 1:");
    if(num1 < num2 && num1 < num3) {
        console.log(num1);
    }
    else if(num2 < num3 && num2 < num1) {
        console.log(num2);
    }
    else {
        console.log(num3);
    }
    console.log();
}

smallestOfThreeNumbers(2, 5, 3);
smallestOfThreeNumbers(600, 342, 123);
smallestOfThreeNumbers(25, 21, 4);

function sum(num1, num2) {
    return num1 + num2;
}

function substract(num1, num2, num3) {
    return sum(num1, num2) - num3;
}

function addAndSubstract(num1, num2, num3) {
    console.log("Task 2:");
    console.log(substract(num1, num2, num3));
    console.log();
}

addAndSubstract(23, 6, 10);
addAndSubstract(1, 17, 30);
addAndSubstract(42, 58, 100);

function charactersInRange(char1, char2) {
    console.log("Task 3:");
    let startCode = char1.charCodeAt(0);
    let endCode = char2.charCodeAt(0);

    char1 = Math.min(startCode, endCode);
    char2 = Math.max(startCode, endCode);

    let result = " ";
    for (let i = char1 + 1; i < char2; i++) {
        result += String.fromCharCode(i) + " ";
    }
    console.log(result.trim());
    console.log();
}

charactersInRange('a', 'd');
charactersInRange('#', ':');
charactersInRange('C', '#');

function sumAllEvenDigits(num) {
    let sumEven = 0;
    while(num != 0) {
        let digit = num % 10;  
        if(digit % 2 === 0) {
            sumEven += digit;
        }
        num = Math.floor(num / 10);
    }
    return sumEven;
}

function sumAllOddDigits(num) {
    let sumOdd = 0;
    while(num != 0) {
        let digit = num % 10;  
        if(digit % 2 !== 0) {
            sumOdd += digit;
        }
        num = Math.floor(num / 10);
    }
    return sumOdd;
}

function oddAndEvenSum(num) {
    console.log("Task 4:");
    console.log(`Odd sum = ${sumAllOddDigits(num)}, Even sum = ${sumAllEvenDigits(num)}`);
    console.log();
}

oddAndEvenSum(10000435);
oddAndEvenSum(3495892137259234);

function palindromeNumbers(array) {
    console.log("Task 5:");
    for(let element of array) {
        let reverse = element.toString().split("").reverse().join("");
        console.log(element.toString() === reverse);
    }
    console.log();
}

palindromeNumbers([123, 323, 421, 121]);
palindromeNumbers([32, 2, 232, 1010]);

function consistsOnlyOfLettersAndDigits(password) {
    let passwordArray = password.split("");
    for(let character of passwordArray) {
        if(!((character >= 'a' && character <= 'z') || 
           (character >= 'A' && character <= 'Z') || 
           (character >= '0' && character <= '9'))) {
            return false;
        }
    }
    return true;
}

function countDigits(password) {
    let count = 0;
    let passwordArray = password.split("");
    for(let character of passwordArray) {
        if(character >= '0' && character <= '9') {
            count++;
        }
    }
    return count;
}

function passWordValidator(password) {
    console.log("Task 6:");
    let isValid = true;
    if(password.length < 6 || password.length > 10) {
        console.log("Password must be between 6 and 10 characters");
        isValid = false;
    }
    if(!consistsOnlyOfLettersAndDigits(password)) {
        console.log("Password must consist only of letters and digits");
        isValid = false;
    }
    if(countDigits(password) < 2) {
        console.log("Password must have at least 2 digits");
        isValid = false;
    }
    if(isValid) {
        console.log("Password is valid");
    }
    console.log();
}

passWordValidator("pass");
passWordValidator("APass123");
passWordValidator("Pa$s$s");

function shortestAndLongestWord(sentence) {
    console.log("Task 7:");
    let words = [];
    let word = "";
    for (let i = 0; i < sentence.length; i++) {
        let ch = sentence[i];
        if(ch >= 'A' && ch <= 'Z' || ch >= 'a' && ch <= 'z') {
            word += ch;
        } else {
            if(word !== "") {
                words.push(word);
                word = "";
            }
        }
    }
    let shortest = words[0], longest = words[0];
    for (let i = 1; i < words.length; i++) {
        if(words[i].length > longest.length) {
            longest = words[i];
        }
        if(words[i].length < shortest.length) {
            shortest = words[i];
        }
    }
    
    console.log(`Longest -> ${longest}\nShortest -> ${shortest}`);
    console.log();
}

shortestAndLongestWord("Hello how are you today? I hope you are fine ");
shortestAndLongestWord("Lorem Ipsum is dummy text of the typesetting industry.");

function sumDivisors(number) {
    let sum = 0;
    for(let i = 1; i < number; i++) {
        if(number % i === 0) {
            sum += i;
        }
    }
    return sum;
}

function printSumDivisors(number) {
    let result = [];
    for(let i = 1; i < number; i++) {
        if(number % i === 0) {
            result.push(i);
        }
    }
    console.log(result.join(" + "));
}

function perfectNumber(number) {
    console.log("Task 8:");
    if(number === sumDivisors(number)) {
        console.log("Perfect number!");
        printSumDivisors(number);
    } else {
        console.log("It's not so perfect.");
    }
    console.log();
}

perfectNumber(6);
perfectNumber(28);
perfectNumber(1236498);

function progressBar(number) {
    console.log("Task 9:");
    let percentageSign = '%'.repeat(number / 10);
    let dots = '.'.repeat((100 - number) / 10);
    if(number === 100) {
        console.log("[%%%%%%%%%%]\nComplete!");
    }
    else {
        console.log(`${number}%[${percentageSign}${dots}]\nLoading...`);
    }
    console.log();
}

progressBar(30);
progressBar(50);
progressBar(100);

function factorial(number) {
    if(number == 0 || number == 1) {
        return 1;
    }
    return number * factorial(number - 1);
}

function factorialDivision(num1, num2) {
    console.log("Task 10:");
    let result = factorial(num1) / factorial(num2);
    console.log(result.toFixed(2));
    console.log();
}

factorialDivision(5, 2);
factorialDivision(6, 2);