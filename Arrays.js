function sumFirstAndLastArrayElement(array) {
    console.log("Task 1:");
    let sum = 0;
    sum += Number(array[0]) + Number(array[array.length - 1]);
    console.log(sum);
    console.log();
}

sumFirstAndLastArrayElement(['20', '30', '40']);
sumFirstAndLastArrayElement(['10', '17', '22', '33']);
sumFirstAndLastArrayElement(['11', '58', '69']);

function dayOfWeek(number) {
    console.log("Task 2:");
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    switch(number) {
        case 1: console.log(days[0]); break;
        case 2: console.log(days[1]); break;
        case 3: console.log(days[2]); break;
        case 4: console.log(days[3]); break;
        case 5: console.log(days[4]); break;
        case 6: console.log(days[5]); break;
        case 7: console.log(days[6]); break;
        default: console.log("Invalid day!"); break;
    }
    console.log();
}

dayOfWeek(3);
dayOfWeek(6);
dayOfWeek(11);

function reverseAnArrayOfNumbers(n, array) {
    console.log("Task 3:");
    let newArray = [];
    for(let i = 0; i < n; i++) {
        newArray[i] = array[i];
    }
    let reversedArray = [];
    let j = 0;
    for(let i = newArray.length - 1; i >= 0; i--) {
        reversedArray[j] = newArray[i];
        j++;
    }
    console.log(reversedArray.join(" "));
    console.log();
}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);
reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47]);

function swapArray(array) {
    for(let i = 0; i < array.length / 2; i++) {
        let old = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - i - 1] = old;
    }
}

function reveraseAnArrayOfStrings(array) {
    console.log("Task 4:");
    swapArray(array);
    console.log(array.join(" "));
    console.log();
}

reveraseAnArrayOfStrings(['a', 'b', 'c', 'd', 'e']);
reveraseAnArrayOfStrings(['abc', 'def', 'hig', 'kim', 'nop']);
reveraseAnArrayOfStrings(['33', '123', '0', 'dd']);

function sumEvenNumbers(array) {
    console.log("Task 5:");
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        if(Number(array[i]) % 2 === 0) {
            sum += Number(array[i]);
        }
    }
    console.log(sum);
    console.log();
}

sumEvenNumbers(['1', '2', '3', '4', '5', '6']);
sumEvenNumbers(['3', '5', '7', '9']);
sumEvenNumbers(['2', '4', '6', '8', '10']);

function evenAndOddSubtraction(array) {
    console.log("Task 6:");
    let evenSum = 0, oddSum = 0;
    for(let i = 0; i < array.length; i++) {
        if(Number(array[i]) % 2 === 0) {
            evenSum += array[i];
        } else {
            oddSum += array[i];
        }
    }
    let difference = evenSum - oddSum;
    console.log(difference);
    console.log();
}

evenAndOddSubtraction([1, 2, 3, 4, 5, 6]);
evenAndOddSubtraction([3, 5, 7, 9]);
evenAndOddSubtraction([2, 4, 6, 8, 10]);

function equalArrays(array1, array2) {
    console.log("Task 7:");
    let flag = false;
    let index = 0, sum = 0;
    for(let i = 0; i < array1.length; i++) {
        if(array1[i] === array2[i]) {
            flag = true;
            sum += Number(array1[i]);
        } else {
            flag = false;
            index = i;
            break;
        }
    }
    if(flag) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${index} index`);
    }
    console.log();
}

equalArrays(['10', '20', '30'], ['10', '20', '30']);
equalArrays(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);
equalArrays(['1'], ['10']);

function condenseArrayToNumber(array) {
    console.log("Task 8:");
    while(array.length > 1) {
        let condensed = [];
        for(let i = 0; i < array.length - 1; i++) {
            condensed.push(array[i] + array[i + 1]);
        }
        array = condensed;
    }
    console.log(array[0]);
    console.log();
}

condenseArrayToNumber([2, 10, 3]);
condenseArrayToNumber([5, 0, 4, 1, 2]);
condenseArrayToNumber([1]);

function printEveryNthElementFromAnArray(array, N) {
    console.log("Task 9:");
    let output = [];
    for(let i = 0; i < array.length; i += N) {
        output.push(array[i]);
    }
    console.log(output.join(" "));
    console.log();
}

printEveryNthElementFromAnArray(['5', '15', '31', '14', '20'], 2);
printEveryNthElementFromAnArray(['dsa', 'asd', 'demo', 'test'], 2);
printEveryNthElementFromAnArray(['1', '2', '3', '4', '5'], 6);

function addAndRemoveElementsFromArray(array) {
    console.log("Task 10:");
    let initialNumber = 1;
    let newArray = [];
    for(let command of array) {
        switch(command) {
            case "add": 
            newArray.push(initialNumber++);
            break;
            case "remove":
            newArray.pop();
            break;
        }
    }
    if(newArray.length == 0) {
        console.log("Empty");
    } else {
        console.log(newArray.join(" "));
    }
    console.log();
}

addAndRemoveElementsFromArray(['add', 'add', 'add', 'add']);
addAndRemoveElementsFromArray(['add', 'add', 'remove', 'add', 'add']);
addAndRemoveElementsFromArray(['remove', 'remove', 'remove']);

function rotateArray(array, n) {
    console.log("Task 10:");
    n = n % array.length;

    let rotatedArray = [];
    for(let i = array.length - n; i < array.length; i++) {
        rotatedArray.push(array[i]);
    }
    for(let i = 0; i < array.length - n; i++) {
        rotatedArray.push(array[i]);
    }
    
    console.log(rotatedArray.join(" "));
    console.log();
}

rotateArray(['1', '2', '3', '4'], 2);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15);

function extractANonDecreasingSubsequenceFromAnArray(array) {
    console.log("Task 11:");
    let maxNumber = array[0];
    let newArray = [array[0]];
    for(let i = 1; i <= array.length; i++) {
        if(maxNumber <= array[i]) {
            newArray.push(array[i]);
            maxNumber = array[i];
        }
    }
    console.log(newArray.join(" "));
    console.log();
}

extractANonDecreasingSubsequenceFromAnArray([1, 3, 8, 4, 10, 12, 3, 2, 24]);
extractANonDecreasingSubsequenceFromAnArray([1, 2, 3, 4]);
extractANonDecreasingSubsequenceFromAnArray([20, 3, 2, 15, 6, 1]);

function negativePositiveNumbers(array) {
    console.log("Task 13:");
    let negativeArray = [];
    for(let i = 0; i < array.length; i++) {
        if(array[i] < 0) {
            negativeArray.unshift(array[i]);
        } else {
            negativeArray.push(array[i]);
        }
    }
    console.log(negativeArray.join("\n"));
    console.log();
}

negativePositiveNumbers([7, -2, 8, 9]);
negativePositiveNumbers([3, -2, 0, -1]);

function firstAndLastKNumbers(k, array) {
    console.log("Task 14:");
    let firstK = [];
    let lastK = [];
    if(k % 2 == 0) {
        for(let i = 0; i < array.length - k + 1; i++) {
            firstK.push(array[i]);
        }
    } else {
        for(let i = 0; i < array.length - k + 2; i++) {
            firstK.push(array[i]);
        }
    }
    for(let i = array.length - k; i < array.length; i++) {
        lastK.push(array[i]);
    }
    console.log(firstK.join(" "));
    console.log(lastK.join(" "));
    console.log();
}

firstAndLastKNumbers(2, [7, 8, 9]);
firstAndLastKNumbers(3, [6, 7, 8, 9]);

function lastKNumbersSequence(n, k) {
    console.log("Task 15:");
    let sequence = [1];
    for(let i = 1; i < n; i++) {
        let sequenceSum = 0;
        for(let j = Math.max(0, i - k); j < i; j++) {
            sequenceSum += sequence[j];
        }
        sequence.push(sequenceSum);
    }
    console.log(sequence.join(" "));
    console.log();
}

lastKNumbersSequence(6, 3);
lastKNumbersSequence(8, 2);

function processOddNumbers(array) {
    console.log("Task 16:");
    let oddNumbers = [];
    for(let i = 1; i <= array.length; i += 2) {
        oddNumbers.unshift(array[i] * 2);
    }
    console.log(oddNumbers.join(" "));
    console.log();
}

processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);

function smallestTwoNumbers(array) {
    console.log("Task 17:");
    let firstSmallest = Infinity;
    let secondSmallest = Infinity;
    for(let number of array) {
        if(number < firstSmallest) {
            secondSmallest = firstSmallest;
            firstSmallest = number;
        } else if(number < secondSmallest && number !== firstSmallest) {
            secondSmallest = number;
        }
    }
    let twoSmallestNumber = [];
    twoSmallestNumber.push(firstSmallest); 
    twoSmallestNumber.push(secondSmallest); 
    console.log(twoSmallestNumber.join(" "));
    // console.log(firstSmallest, secondSmallest);
    console.log();
}

smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);

function listOfProducts(array) {
    console.log("Task 18:");
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length - 1 - i; j++) {
            if(array[j][0] > array[j + 1][0]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    for(let i = 0; i < array.length; i++) {
    console.log(`${i + 1}. ${array[i]}`);
    }
    console.log();
}

listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);

function arrayManipulation(array) {
    console.log("Task 19:");
    let newArray = [];
    let numString = array[0];
    let temp = "";
    for(let i = 0; i < numString.length; i++) {
        let ch = numString[i];
        if(ch !== " ") {
            temp += ch;
        } else {
            if(temp !== "") {
                newArray.push(Number(temp));
                temp = "";
            }
        }
    }
    if(temp !== "") {
        newArray.push(Number(temp));
    }
    for(let i = 1; i < array.length; i++) {
        let command = array[i];
        let parts = [];
        temp = "";
        for(let j = 0; j < command.length; j++) { 
            let ch = command[j];
            if(ch !== " ") {
                temp += ch;
            } else {
                if(temp !== "") {
                    parts.push(temp);
                    temp = "";
                }
            }
        } 
        if(temp !== "") {
            parts.push(temp);
        }
        command = parts[0];
        if(command === "Add") {
            let number = Number(parts[1]);
            newArray.push(number);
        } else if(command === "Remove") {
            let number = Number(parts[1]);
            let filtered = [];
            for(let num of newArray) {
                if(num !== number) {
                    filtered.push(num);
                }
            }
            newArray = filtered;
        } else if(command === "RemoveAt") {
            let index = Number(parts[1]);
            if(index >= 0 && index < newArray.length) {
                let tempArr = [];
                for(let j = 0; j < newArray.length; j++) {
                    if(j != index) {
                        tempArr.push(newArray[j]);
                    }
                }
                newArray = tempArr;
            }
        } else if(command == "Insert") {
            let number = Number(parts[1]);
            let index = Number(parts[2]);
            if(index >= 0 && index <= newArray.length) {
                let tempArr = [];
                for(let j = 0; j < newArray.length + 1; j++) {
                    if(j < index) {
                        tempArr.push(newArray[j]);
                    } else if(j === index) {
                        tempArr.push(number);
                    } else {
                        tempArr.push(newArray[j - 1]);
                    }
                }
                newArray = tempArr;
            }
        }
    }
    let output = "";
    for(let i = 0; i < newArray.length; i++) {
        output += newArray[i] + " "; 
    }
    console.log(output);   
    console.log();   
}

arrayManipulation(["4 19 2 53 6 43", "Add 3", "Remove 2", "RemoveAt 1", "Insert 8 3"]);

function longestSequenceOfIdenticalElements(array) {
    console.log("Task 20:");
    let currentNumber = array[array.length - 1], maxNumber = array[array.length - 1];
    let countCurrent = 1, countMax = 1;

    for(let i = array.length - 2; i >= 0; i--) {
        if(currentNumber === array[i]) {
            countCurrent++;
        } else {
            if(countMax < countCurrent) {
                countMax = countCurrent;
                maxNumber = currentNumber;
            }
            currentNumber = array[i];
            countCurrent = 1;
        }
    }
    if(countMax < countCurrent) {
        countMax = countCurrent;
        maxNumber = currentNumber;
    }
    console.log(countMax);
    console.log(countCurrent);
    let result = [];
    for(let i = 0; i < countMax; i++) {
        result[i] = maxNumber;
    }
    console.log(result.join(" "));
    console.log();
}

longestSequenceOfIdenticalElements([2, 2, 2, 3, 4, 4, 2, 2, 1]);
longestSequenceOfIdenticalElements([1, 1, 1, 2, 3, 1, 3, 3, 1, 1]);
longestSequenceOfIdenticalElements([1, 1, 2, 3, 4, 5, 6, 2, 2]);
longestSequenceOfIdenticalElements([4, 4, 4, 4,]);
longestSequenceOfIdenticalElements([0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5]);