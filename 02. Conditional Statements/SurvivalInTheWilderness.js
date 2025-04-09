function survivalInTheWilderness(time, environment, items) {
    if(time === "day") {
        if(environment === "forest") {
            if(items === "knife") {
                console.log("Hunt for food");
            } else if(items === "container") {
                console.log("Collect berries");
            } else {
                console.log("Explore");
            }
        } else if(environment === "desert") {
            if(items === "hat") {
                console.log("Search for water");
            } else {
                console.log("Find shade");
            }
        }
    } else if(time === "night") {
        if(environment === "forest") {
            if(items === "firestarter") {
                console.log("Make a campfire");
            } else {
                console.log("Climb on a tree");
            }
        } else if(environment === "desert") {
            if(items === "blanket") {
                console.log("Sleep");
            } else {
                console.log("Keep moving to stay warm");
            }
        }
    }
}

survivalInTheWilderness("day", "forest", "knife");
survivalInTheWilderness("day", "forest", "container");
survivalInTheWilderness("night", "forest", "firestarter");
survivalInTheWilderness("day", "forest", "bag");
survivalInTheWilderness("night", "desert", "blanket");
survivalInTheWilderness("day", "desert", "hat");
survivalInTheWilderness("night", "desert", "sword");
survivalInTheWilderness("night", "forest", "hat");