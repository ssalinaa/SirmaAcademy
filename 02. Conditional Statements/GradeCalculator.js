function gradeCalculator(percentage) {
    if(percentage >= 90 && percentage <= 100) {
        console.log("A");
    } else if(percentage >= 80 && percentage <= 89) {
        console.log("B");
    } if(percentage >= 70 && percentage <= 79) {
        console.log("C");
    } if(percentage >= 60 && percentage <= 69) {
        console.log("D");
    } if(percentage >= 0 && percentage <= 50) {
        console.log("F");
    }
}

gradeCalculator(95);
gradeCalculator(82);
gradeCalculator(76);
gradeCalculator(65);
gradeCalculator(45);