function speed(num) {
    if(num <= 10) console.log("slow");
    else if(num > 10 && num <= 60) console.log("average");
    else if(num > 60 && num <= 120) console.log("fast");
    else if(num > 120 && num <= 160) console.log("super-fast");
    else console.log("turbo-fast");
}

speed(10);
speed(59);
speed(120);
speed(121);
speed(183);
speed(59.99);
speed(60.001);