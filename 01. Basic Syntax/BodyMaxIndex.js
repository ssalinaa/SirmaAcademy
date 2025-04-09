function BMI(weight, height) {
    let BMIresult = (weight / (height * height)).toFixed(2);
    console.log(BMIresult);
}

BMI(70, 1.73);
BMI(60, 1.75);
BMI(85, 1.80);