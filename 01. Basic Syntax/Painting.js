function paint(yellowPaint) {
    let redPaint = yellowPaint / 4;
    let whitePaint = yellowPaint * 2;
    let liters = yellowPaint + redPaint + whitePaint;
    console.log("Red: ", redPaint);
    console.log("Yellow: ", yellowPaint);
    console.log("White: ", whitePaint);
    console.log("Total: ", liters);
    console.log();
}

paint(10);
paint(17);
paint(42);