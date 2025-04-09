function grocery(product, city, quantity) {
    let price = 0;
    if(city == "Sofia") {
        switch(product) {
            case "tea":    price = quantity * 0.5;  console.log(price.toFixed(2)); break;
            case "water":  price = quantity * 0.8;  console.log(price.toFixed(2)); break;
            case "juice":  price = quantity * 1.2;  console.log(price.toFixed(2)); break;
            case "sweets": price = quantity * 1.45; console.log(price.toFixed(2)); break;
            case "chips":  price = quantity * 1.6;  console.log(price.toFixed(2)); break;
        }
    } else if (city == "Plovdiv") {
        switch(product) {
            case "tea":    price = quantity * 0.4;  console.log(price.toFixed(2)); break;
            case "water":  price = quantity * 0.7;  console.log(price.toFixed(2)); break;
            case "juice":  price = quantity * 1.15; console.log(price.toFixed(2)); break;
            case "sweets": price = quantity * 1.3;  console.log(price.toFixed(2)); break;
            case "chips":  price = quantity * 1.5;  console.log(price.toFixed(2)); break;
        }
    } else if (city == "Varna") {
        switch(product) {
            case "tea":    price = quantity * 0.45; console.log(price.toFixed(2)); break;
            case "water":  price = quantity * 0.7;  console.log(price.toFixed(2)); break;
            case "juice":  price = quantity * 1.1;  console.log(price.toFixed(2)); break;
            case "sweets": price = quantity * 1.35; console.log(price.toFixed(2)); break;
            case "chips":  price = quantity * 1.55; console.log(price.toFixed(2)); break;
        }
    } 
}

grocery("tea", "Varna", 2);
grocery("chips", "Plovdiv", 1);
grocery("juice", "Sofia", 6);
grocery("sweets", "Plovdiv", 1);