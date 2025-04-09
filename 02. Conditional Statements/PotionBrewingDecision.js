function potionBrewingDecision(potion1, potion2) {
    if(potion1 === "herbs") {
        if(potion2 === "water") {
            console.log("Health potion");
        } else if(potion2 === "oil") {
            console.log("Stealth potion");
        } else {
            console.log("Minor stamina potion");
        }
    } else if(potion1 === "berries") {
        if(potion2 === "sugar") {
            console.log("Speed potion");
        } else {
            console.log("Minor energy potion");
        }
    } else {
        console.log("No potion");
    }
}

potionBrewingDecision("herbs", "water");
potionBrewingDecision("herbs", "oil");
potionBrewingDecision("herbs", "banana");
potionBrewingDecision("berries", "sugar");
potionBrewingDecision("berries", "banana");
potionBrewingDecision("herbs", "sugar");
potionBrewingDecision("sugar", "salt");