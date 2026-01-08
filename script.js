function getValue(id) {
    const val = document.getElementById(id).value;
    return val === "" ? null : Number(val);
}

function calculate() {
    const resultBox = document.getElementById("result");
    resultBox.classList.remove("hidden");

    // English (compulsory)
    const eng1 = getValue("eng1");
    const eng2 = getValue("eng2");

    if (eng1 === null || eng2 === null) {
        resultBox.innerText = "English is compulsory. Enter both English marks.";
        return;
    }

    const englishAvg = (eng1 + eng2) / 2;

    let subjects = [];
    subjects.push(englishAvg);

    // Math
    const math = getValue("math");
    if (math !== null) subjects.push(math);

    // Science
    const phy = getValue("phy");
    const chem = getValue("chem");
    const bio = getValue("bio");
    if (phy !== null && chem !== null && bio !== null) {
        subjects.push((phy + chem + bio) / 3);
    }

    // Computer
    const computer = getValue("computer");
    if (computer !== null) subjects.push(computer);

    // Hindi
    const hindi = getValue("hindi");
    if (hindi !== null) subjects.push(hindi);

    // Social Studies
    const history = getValue("history");
    const geography = getValue("geography");
    if (history !== null && geography !== null) {
        subjects.push((history + geography) / 2);
    }

    // Validation: English + 4 optional = total 5
    if (subjects.length < 5) {
        resultBox.innerText =
            "Enter marks for English + any 4 optional subjects to calculate percentage.";
        return;
    }

    // Take best 5 (English already included)
    subjects = subjects.slice(0, 5);

    const total = subjects.reduce((a, b) => a + b, 0);
    const percentage = (total / 5).toFixed(2);

    resultBox.innerText = `Your ICSE Percentage: ${percentage}%`;
}
