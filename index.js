let victoryQuantity = 10;
let defeatQuantity = 5;
let classification = "";

function getRankedValue(victoryQuantity, defeatQuantity) {
    let rankedValue = victoryQuantity - defeatQuantity;
    let result = rankedValue;
    return result;
}

// hero balance
function getHeroBalance() {
    let resultValue = getRankedValue(victoryQuantity, defeatQuantity);
    let result = 0;

    if (resultValue <= 10) {
        result = resultValue;
    }

    else if (resultValue > 10 && resultValue <= 20) {
        result = resultValue;
    }

    else if (resultValue > 20 && resultValue <= 50) {
        result = resultValue;
    }

    else if (resultValue > 50 && resultValue <= 80) {
        result = resultValue;
    }

    else if (resultValue > 80 && resultValue <= 90) {
        result = resultValue;
    }

    else if (resultValue > 90 && resultValue <= 100) {
        result = resultValue;
    }

    else if (resultValue > 100) {
        result = resultValue;
    }

    return result;
}

// get value level hero
function getLevelHero() {

    let resultValue = getHeroBalance();
    let classification = "";
    let result = "";

    if (resultValue <= 10) {
        classification = "'IRON'";
        result = classification;
    }

    else if (resultValue > 10 && resultValue <= 20) {
        classification = "'BRONZE'";
        result = classification;
    }

    else if (resultValue > 20 && resultValue <= 50) {
        classification = "'SILVER'";
        result = classification;
    }

    else if (resultValue > 50 && resultValue <= 80) {
        classification = "'GOLD'";
        result = classification;
    }

    else if (resultValue > 80 && resultValue <= 90) {
        classification = "DIAMMOND";
        result = classification;
    }

    else if (resultValue > 90 && resultValue <= 100) {
        classification = "LEGENDARY";
        result = classification;
    }

    else if (resultValue > 100) {
        classification = "IMORTAL";
        result = classification;
    }

    return result;
}

function result() {
    let balance = getHeroBalance();
    let levelHero = getLevelHero();
    let result = `The hero has balance of the victory ${balance} and your level is ${levelHero}`;

    return result;
}

console.log(result());
