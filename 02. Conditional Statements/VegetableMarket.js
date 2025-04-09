function vegetableMarket(vegetable, day, quantity) {
    let price = 0;
    if(day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thirsday" || day == "Friday") {
        switch(vegetable) {
            case "tomato":   price = 2.5 * quantity;  console.log(price.toFixed(2)); break;
            case "onion":    price = 1.2 * quantity;  console.log(price.toFixed(2)); break;
            case "lettuce":  price = 0.85 * quantity; console.log(price.toFixed(2)); break;
            case "cucumber": price = 1.45 * quantity; console.log(price.toFixed(2)); break;
            case "pepper":   price = 5.5 * quantity;  console.log(price.toFixed(2)); break;
            default: console.log("error"); break;
        }
    } else if(day == "Saturday" || day == "Sunday") {
        switch(vegetable) {
            case "tomato":   price = 2.8 * quantity;  console.log(price.toFixed(2)); break;
            case "onion":    price = 1.3 * quantity;  console.log(price.toFixed(2)); break;
            case "lettuce":  price = 0.85 * quantity; console.log(price.toFixed(2)); break;
            case "cucumber": price = 1.75 * quantity; console.log(price.toFixed(2)); break;
            case "pepper":   price = 3.5 * quantity;  console.log(price.toFixed(2)); break;
            default: console.log("error"); break;
        }
    } else {
        console.log("error");
    }
}

vegetableMarket("tomato", "Tuesday", 2);
vegetableMarket("onion", "Sunday", 3);
vegetableMarket("pepper", "Monday", 10);
vegetableMarket("banana", "Friday", 5);