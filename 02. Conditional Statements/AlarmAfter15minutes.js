function alarm(hour, minutes) {
    minutes += 15;
    if(minutes >= 60) {
        minutes -= 60;
        hour += 1;
    }
    if(hour >= 24) {
        hour -= 24;
    }
    if(minutes < 10) {
        console.log(hour + ":0" + minutes);
    } else {
        console.log(hour + ":" + minutes);
    }
}

alarm(1, 47);
alarm(0, 2);
alarm(23, 59);
alarm(11, 7);
alarm(12, 48);