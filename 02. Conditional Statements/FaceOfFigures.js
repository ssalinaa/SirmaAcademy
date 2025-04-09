function faceOfFigures(type, a, b) {
    let area = 0;
    switch(type) {
        case "square":
            area = a * a;
            console.log(area.toFixed(2));
            break;
        case "rectangle":
            area = a * b;
            console.log(area.toFixed(2));
            break;
        case "circle":
            area = Math.PI * a * a;
            console.log(area.toFixed(2));
            break;
        case "triangle":
            area = (a * b) / 2;
            console.log(area.toFixed(2));
            break;
        default:
            console.log("No such figure!");
            break;
    }
}

faceOfFigures("square", 5);
faceOfFigures("rectangle", 10, 3.5);
faceOfFigures("triangle", 4.5, 20);
faceOfFigures("circle", 10);