function address(age, gender) {
    if(gender == 'm') {
        if(age >= 16) {
            console.log("Mr.");
        } else {
            console.log("Master");
        }
    } else {
        if(age >= 16) {
            console.log("Ms.");
        } else {
            console.log("Miss");
        }
    }
}

address(14, "f");
address(17, "m");
address(10, "m");
address(32, "f");