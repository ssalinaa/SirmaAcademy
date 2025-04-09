function Speed(distance, hours, minutes, seconds) {
    let time = seconds + minutes * 60 + hours * 3600;
    let speed = (distance / time).toFixed(6);
    console.log(speed);
    console.log();
}

Speed(100, 1, 20, 20);
Speed(2500, 5, 56, 23);
Speed(600, 7, 35, 55);