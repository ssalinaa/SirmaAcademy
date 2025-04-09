function time(minutes) {
    let hour = Math.floor(minutes / 60);
    minutes = minutes % 60;
    if(hour < 10 && minutes < 10) {
        console.log("0" + hour + ":0" + minutes); 
        console.log();
    } else if (hour < 10 && minutes >= 10){
        console.log("0" + hour + ":" + minutes); 
        console.log();
    } else {
        console.log(hour + ":" + minutes); 
        console.log();
    }
}

time(60);
time(90);
time(325);