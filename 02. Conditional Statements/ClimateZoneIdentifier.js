function climateZoneIdentifier(value, hemisphere) {
    if(value > 66.5 && hemisphere === "N" ) {
        console.log("Arctic Zone");
    } else if(value < 0 && hemisphere === "S") {
        console.log("Arctic Zone");
    } 
    else if((value >= 23.5 && value <= 66.5) && (hemisphere === "N" || hemisphere === "S")) {
        console.log("Temperate Zone");
    } 
    if((value > 0 && value <= 23.5) && (hemisphere === "N" || hemisphere === "S")) {
        console.log("Tropic Zone");
    } 
    if(value === 0 && (hemisphere === "N" || hemisphere === "S")) {
        console.log("Equator");
    }
}

climateZoneIdentifier(70, "N");
climateZoneIdentifier(45, "S");
climateZoneIdentifier(10, "N");
climateZoneIdentifier(0, "N");
climateZoneIdentifier(-85, "S");