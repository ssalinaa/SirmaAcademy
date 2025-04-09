function electricityBill(units, rate) {
    let totalBill = (units * rate) + 10;
    console.log(totalBill.toFixed(2));
}

electricityBill(100, 1.0);
electricityBill(200, 1.0);
electricityBill(150, 1.1);