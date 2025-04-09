function holiday(budget, season) {
    let totalBudget = 0;
    if(budget <= 100) {
        switch(season) {
            case "summer": totalBudget = budget - 0.7 * budget;
            console.log("Somewhere in Bulgaria"); 
            console.log("Camp - " + totalBudget.toFixed(2));
            break; 
            case "winter": totalBudget = budget - 0.3 * budget;
            console.log("Somewhere in Bulgaria"); 
            console.log("Hotel - " + totalBudget.toFixed(2)); 
            break; 
        }
    } else if(budget <= 1000) {
        switch(season) {
            case "summer": totalBudget = budget - 0.6 * budget;
            console.log("Somewhere in Europe"); 
            console.log("Camp - " + totalBudget.toFixed(2));
            break; 
            case "winter": totalBudget = budget - 0.2 * budget;
            console.log("Somewhere in Europe"); 
            console.log("Hotel - " + totalBudget.toFixed(2));
            break; 
        }
    } else {
        switch(season) {
            case "summer": totalBudget = budget - 0.1 * budget;
            console.log("Somewhere in Asia"); 
            console.log("Camp - " + totalBudget.toFixed(2));
            break; 
            case "winter": totalBudget = budget - 0.1 * budget;
            console.log("Somewhere in Asia"); 
            console.log("Hotel - " + totalBudget.toFixed(2));
            break; 
        }
    }
}

holiday(50, "summer");
holiday(75, "winter");
holiday(312, "summer");
holiday(678.53, "winter");
holiday(1500, "summer");