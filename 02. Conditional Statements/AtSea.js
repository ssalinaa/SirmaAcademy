function atSea(days, type, assessment) {
    let price = 0;
    if(type === "single room") {
        price = (days - 1) * 25;
    } else if(type === "apartment") {
        price = (days - 1) * 50;
        if(days < 10) {
            price  = price - 0.3 * price;
        } else if(days <= 15) {
            price = price - 0.35 * price;
        } else {
            price = price - 0.5 * price;
        }
    } else {
        price = (days - 1) * 100;
        if(days < 10) {
            price  = price - 0.1 * price;
        } else if(days >= 10 && days <= 15) {
            price = price - 0.15 * price;
        } else {
            price = price - 0.2 * price;
        }
    }
    if(assessment === "positive") {
        price = price + 0.25 * price;
    } else {
        price = price - 0.1 * price;
    }
    console.log(price.toFixed(2));
}

atSea(11, "apartment", "positive");
atSea(30, "president apartment", "negative");
atSea(12, "single room", "positive");
atSea(2, "apartment", "positive");