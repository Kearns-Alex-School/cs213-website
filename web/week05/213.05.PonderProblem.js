function problem1() {
    console.log("Hello World");
}

function problem2(name, letter) {
    console.log(letter.replace(/RICH_GUY/g, name));
}

function problem3(temperature) {
    //(32°F − 32) × 5/9 = 0°C
    console.log(((temperature - 32) * (5/9)).toFixed(1));
}

function problem4(weight) {
    if (0 < weight && weight < 1) {
        console.log(.98);
    }
    else if (weight < 2) {
        console.log(1.19);
    }
    else if (weight < 3) {
        console.log(1.40);
    }
    else if (weight < 4) {
        console.log(1.61);
    }
    else if (weight <= 5) {
        console.log(1.82);
    }
    else {
        console.log("Invalid weight");
    }
}

function problem5(apr, term, amount) {
    var total = Number(amount);

    for (count = 0; count < Number(term); count++) {
        total += (total * (Number(apr) / 100));
    }
    console.log("$" + total.toFixed(2));
}