function airlineLuggageCharges(weight, dimensions) {
    let fee = 0;
    if(weight > 50) {
        fee += 100;
    } if(weight < 50 && dimensions > 158) {
        let difference = dimensions - 158;
        if(difference >= 1 && difference <= 20) {
            fee += 50;
        } else if(difference >= 21 && difference <= 50) {
            fee += 100;
        } else {
            fee += 200;
        }
        console.log(`$${fee} (Oversize)`);
    } 
    if(weight > 50 && dimensions > 158) {
        fee += 50;
        let difference = dimensions - 158;
        if(difference >= 1 && difference <= 20) {
            console.log(`$${fee} (Overweight + Slightly oversize)`);
        } else {
            console.log(`$${fee} (Overweight + Oversize + Handling)`);
        }
    }
}

airlineLuggageCharges(52, 160);
airlineLuggageCharges(48, 180);
airlineLuggageCharges(55, 190);