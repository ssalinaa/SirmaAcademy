function office(cost) {
    let first = cost;
    let second = cost - 0.2 * first;
    let third = 0.15 * (first + second) + (first + second);
    let total = (first + second + third).toFixed(3);
    console.log(total);
    console.log();
}

office(380);
office(720.50);
office(455.30);