function simpleCalculator(num1, num2, operation) {
    let result = 0;
    switch(operation) {
        case "add":       result = num1 + num2; console.log(result.toFixed(2)); break;
        case "substract": result = num1 - num2; console.log(result.toFixed(2)); break;
        case "divide":    result = num1 / num2; console.log(result.toFixed(2)); break;
        case "multiply":  result = num1 * num2; console.log(result.toFixed(2)); break;
    }
}

simpleCalculator(5, 5, "add");
simpleCalculator(10, 12, "substract");
simpleCalculator(9, 3, "divide");
simpleCalculator(5, 2, "divide");
simpleCalculator(3.1, 0.1, "multiply");