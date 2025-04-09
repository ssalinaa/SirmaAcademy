function makeupShop(price, powdersCount, lipstick, spirals, shadows, correctors) {
    let totalCount = powdersCount + lipstick + spirals + shadows + correctors;
    let totalPrice = powdersCount * 2.6 + lipstick * 3 + spirals * 4.1 + shadows * 8.2 + correctors * 2;
    if(totalCount >= 50) {
        let discount = 0.25 * totalPrice;
        totalPrice -= discount;
    }
    let rent = 0.1 * totalPrice;
    totalPrice -= rent;
    if(totalPrice > price) {
        let moneyLeft = totalPrice - price;
        console.log(`Yes! ${moneyLeft.toFixed(2)} BGN left.`);
    } else {
        let moneyNeeded = price - totalPrice;
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} BGN needed.`);
    }
}

makeupShop(40.8, 20, 25, 30, 50, 10);
makeupShop(320, 8, 2, 5, 5, 1);