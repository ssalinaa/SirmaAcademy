function adventureGame(right, left) {
    if(right === "sword") {
        if(left === "shield") {
            console.log("Path to the castle");
        } else {
            console.log("Path to the forest");
        }
    }
    else if(right === "map") {
        if(left === "coins") {
            console.log("Go to the town");
        } else {
            console.log("Camp");
        }
    } else {
        console.log("Wander aimlessly");
    }
}

adventureGame("sword", "shield");
adventureGame("map", "coins");
adventureGame("torch", "flower");
adventureGame("sword", "pouch");
adventureGame("map", "compass");