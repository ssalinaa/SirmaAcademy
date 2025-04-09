function waterConsupmtion(liters, count) {
    let dailyConsuption = (liters / (7 * count)).toFixed(2);
    console.log(dailyConsuption);
}

waterConsupmtion(2450, 7);
waterConsupmtion(3150, 10);
waterConsupmtion(980, 7);