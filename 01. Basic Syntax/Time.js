function time(minutes) {
    let hour = Math.floor(minutes / 60);
    minutes = minutes % 60;
    console.log(hour + ":" + minutes); 
    console.log();
}

time(60);
time(90);
time(325);