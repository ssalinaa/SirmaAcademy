// //looping through matrix

// const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// arr.forEach(printRow);
// function printRow(row) {
//     console.log(row);
// }

// function printNumber(number) {
//     console.log(number);
// }

// function sumDiagonals(arr) {
//     let mainSum = 0;
//     let secondarySum = 0;
//     for (let i = 0, j = arr.length - 1; i < arr.length; i++, j--) {
//         mainSum += arr[i][i];
//         secondarySum += arr[i][j];
//     }
//     console.log("Main sum: ", mainSum);
//     console.log("Secondary sum: ", secondarySum);
// }
// const array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// sumDiagonals(array);

// const func = (a, b) => {
//     console.log(a + b);
// }
// func(2, 3);

// const array1 = [1, 2, 3, 4];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;
// console.log(array1.reduce(reducer));
// console.log(array1.reduce(reducer, 5));

// let sum = [0, 1, 2, 3].reduce(function (acc, curr) {
//     return acc + curr;
// }, 2);
// console.log(sum);

// const numbers = [30, 50, 40, 10, 70];
// const average = numbers.reduce((total, number, index, array) => {
//     total += number;
//     if(index == array.length - 1) {
//         return total/array.length;
//     } else {
//         return total;
//     }
// });
// console.log(average);

console.log("--------------- TASK 1 ---------------");

function compareMatrices(matrix1, matrix2) {
    console.log("Task 1:");

    if(matrix1.length !== matrix2.length) {
        console.log("not equal");
        return;
    }

    for(let i = 0; i < matrix1.length; i++) {
        if(matrix1[i].length !== matrix2[i].length) {
            console.log("not equal");
            return;
        }
        for(let j = 0; j < matrix1[i].length; j++) {
            if(matrix1[i][j] !== matrix2[i][j]) {
                console.log("not equal");
                return;
            }
        }
    }
    console.log("equal");
    console.log();
}

let matrix1 = [
    [1, 2, 3],
    [2, 1, 3]
];
let matrix2 = [
    [1, 2, 3],
    [2, 1, 3]
];
compareMatrices(matrix1, matrix2);

let matrix3 = [
    [1, 2, 3], 
    [4, 5, 6]
];
let matrix4 = [
    [1, 3], [4, 5]
];
compareMatrices(matrix3, matrix4);

console.log("--------------- TASK 2 ---------------");

function matrixAddition(matrix1, matrix2) {
    console.log("Task 2:");

    if(matrix1.length !== matrix2.length || matrix1[0].length !== matrix2[0].length) {
        console.log("Matrices should have equal size.");
        return;
    }
    for (let i = 0; i < matrix1.length; i++) {
        let rowResult = [];
        for (let j = 0; j < matrix1[i].length; j++) {
           rowResult.push(matrix1[i][j] + matrix2[i][j]);
        }
        console.log(rowResult);
    }
    console.log();
}

let matrix5 = [
    [1, 2], 
    [3, 4]
];
let matrix6 = [
    [2, 2], 
    [2, 2]
];

let matrix7 = [
    [1, 2, 3], 
    [4, 3, 1]
];
let matrix8 = [
    [1, 2, 3], 
    [4, 2, 2]
];

matrixAddition(matrix5, matrix6);
matrixAddition(matrix7, matrix8);

console.log("--------------- TASK 3 ---------------");

function intersectionOfTwoMatrices(matrix1, matrix2) {
    console.log("Task 3:");

    for(let i = 0; i < matrix1.length; i++) {
        let rowResult = [];
        for(let j = 0; j < matrix1[i].length; j++) {
            if(matrix1[i][j] !== matrix2[i][j]) {
                rowResult.push('*');
            } else {
                rowResult.push(matrix1[i][j]);
            }
        }
        console.log(rowResult.join(' '));
    }
    console.log();
}

let matrix9 = [
   "a b c d",
   "a b c d",
   "a b c d"
];
let matrix10 = [
    "k b g d",
    "a b g d", 
    "a k c d"
];
intersectionOfTwoMatrices(matrix9, matrix10);

console.log("--------------- TASK 4 ---------------");

function sumMatrixElements(matrix) {
    console.log("Task 4:");
    
    let rowsCount = matrix.length;
    let columnsCount = matrix[0].length;
    let sumElements = 0;
    for (let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            sumElements += matrix[i][j];
        }
    }
    console.log(rowsCount);
    console.log(columnsCount);
    console.log(sumElements);
    console.log();
}

let matrix11 = [
    [7, 1, 3, 3, 2, 1],
    [1, 3, 9, 8, 5, 6],
    [4, 6, 7, 9, 1, 0]
];
let matrix12 = [
    [10, 11, 12, 13],
    [14, 15, 16, 17]
];
sumMatrixElements(matrix11);
sumMatrixElements(matrix12);

console.log("--------------- TASK 5 ---------------");

function maximumSumOf2x2Submatrix(inputStrings) {
    console.log("Task 5:");

    let matrix = inputStrings.map(row => row.split(' ').map(Number)); 
    let rows = matrix.length;
    let columns = matrix[0].length;
    let maxSum = 0;
    let bestSubMatrix = [];

    for (let i = 0; i < rows - 1; i++) {
        for(let j = 0; j < columns - 1; j++) {
            let sum = matrix[i][j] + matrix[i][j + 1] +
                      matrix[i + 1][j] + matrix[i + 1][j + 1];
            if(sum > maxSum) {
                maxSum = sum;
                bestSubMatrix = [
                    [matrix[i][j], matrix[i][j + 1]],
                    [matrix[i + 1][j], matrix[i + 1][j + 1]]
                ];
            }
        }
    }
    console.log(maxSum);
    console.log(bestSubMatrix[0].join(' '));
    console.log(bestSubMatrix[1].join(' '));
    console.log();
}

let matrix13 = [
    "7 1 3 3 2 1",
    "1 3 9 8 5 6",
    "4 6 7 9 1 0"
];

let matrix14 = [
     "10 11 12 13",
     "14 15 16 17"
];
maximumSumOf2x2Submatrix(matrix13);
maximumSumOf2x2Submatrix(matrix14);

console.log("--------------- TASK 6 ---------------");

function printDiagonalsOfSquareMatrix(inputStrings) {
    console.log("Task 6:");

    let matrix = inputStrings.map(row => row.split(' ').map(Number));
    let mainDiagonal = [];
    let secondaryDiagonal = [];
    for(let i = 0; i < matrix.length; i++) {
        mainDiagonal.push(matrix[i][i]);
        secondaryDiagonal.push(matrix[matrix.length - i - 1][i]);
    }
    console.log(mainDiagonal.join(' '));
    console.log(secondaryDiagonal.join(' '));
    console.log();
}

let matrix15 = [
    "1 2 3",
    "1 2 3",
    "1 2 3"
];
let matrix16 = [
    "1 2 3 2",
    "1 1 2 4",
    "1 2 1 4",
    "2 2 3 1"
];
printDiagonalsOfSquareMatrix(matrix15);
printDiagonalsOfSquareMatrix(matrix16);


console.log("--------------- TASK 7 ---------------");

function matrixDiagonalSum(inputStrings) {
    console.log("Task 7:");

    let matrix = inputStrings.map(row => row.split(' ').map(Number));
    let diagonalsSum = 0;
    for(let i = 0; i < matrix.length; i++) {
        diagonalsSum += matrix[i][i];
        diagonalsSum += matrix[matrix.length - i - 1][i];
    }
    console.log(diagonalsSum);
    console.log();
}
let matrix17 = [
    "1 2 3",
    "4 5 6",
    "7 8 9"
];
let matrix18 = [
    "10 11",
    "14 15"
];
matrixDiagonalSum(matrix17);
matrixDiagonalSum(matrix18);

console.log("--------------- TASK 8 ---------------");

function fillMatrix(n, pattern) {
    console.log("Task 8:");

    let matrix = Array.from({length: n}, () => Array(n).fill(0));
    let num = 1;
    if(pattern == 'A') {
        for(let col = 0; col < n; col++) {
            for(let row = 0; row < n; row++) {
                matrix[row][col] = num++;
            }
        }
    } else if(pattern == 'B') {
        for(let col = 0; col < n; col++) {
            if(col % 2 === 0) {
                for(let row = 0; row < n; row++) {
                    matrix[row][col] = num++;
                }
            } else {
                for(let row = n - 1; row >= 0; row--) {
                    matrix[row][col] = num++;
                }
            }
        }
    }
    matrix.forEach(row => console.log(row.join(' ')));
    console.log();
}
fillMatrix(3, 'A');
fillMatrix(3, 'B');


console.log("--------------- TASK 9 ---------------");

function rowSumAndColumnSum(inputStrings) {
    console.log("Task 9:");

    let matrix = inputStrings.map(row => row.split(' ').map(Number));
    let rowsSum = [];
    let columnsSum = Array(matrix[0].length).fill(0);
    for (let i = 0; i < matrix.length; i++) {
        let rowSum = 0;
       for (let j = 0; j < matrix[i].length; j++) {
            rowSum += matrix[i][j];
            columnsSum[j] += matrix[i][j];
        } 
        rowsSum.push(rowSum);
    }
    console.log(`Row Sums: ${rowsSum.join(',')}`);
    console.log(`Column Sums: ${columnsSum.join(',')}`);
    console.log();
}

let matrix19 = [
    "1 2",
    "3 4",
    "5 6"
];
let matrix20 = [
    "1 2 3",
    "4 5 6",
    "7 8 9"
];
rowSumAndColumnSum(matrix19);
rowSumAndColumnSum(matrix20);

console.log("--------------- TASK 10 ---------------");

function zeroMatrix(inputStrings) {
    console.log("Task 10:");

    let matrix = inputStrings.map(row => row.split(' ').map(Number));
    let rowsToZero = [];
    let colsToZero = [];
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j] === 0) {
                if(!rowsToZero.includes(i)) {
                    rowsToZero.push(i);
                }
                if(!colsToZero.includes(j)) {
                    colsToZero.push(j);
                }
            }
        }
    }

    for(let row of rowsToZero) {
        for(let j = 0; j < matrix[row].length; j++) {
            matrix[row][j] = 0;
        }
    }
    for(let col of colsToZero) {
        for(let i = 0; i < matrix.length; i++) {
            matrix[i][col] = 0;
        }
    }
    matrix.forEach(row => console.log(row.join(' ')));
    console.log();
}

let matrix21 = [
    "1 2 3",
    "4 0 6",
    "7 8 9"
];
let matrix22 = [
    "1 2 3 0",
    "4 5 6 7",
    "0 8 9 1"
];
zeroMatrix(matrix21);
zeroMatrix(matrix22);
