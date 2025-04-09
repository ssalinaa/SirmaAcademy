function numberInTheRange(num) {
    if((num >= -100 && num <= 100) && num != 0) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}

numberInTheRange(-25);
numberInTheRange(0);
numberInTheRange(25);