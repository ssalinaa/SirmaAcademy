function converter(EUR) {
    let BGN = (EUR * 1.95583).toFixed(2);
    console.log(BGN);
}

converter(1);
converter(15);
converter(123);
converter(0.5);
converter(0.51);