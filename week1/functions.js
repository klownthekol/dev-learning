function allowedToDrink(age) {
    if (age >= 19) {
        return true;

    } else {
        return false;
    }
}

function allowedToDrink2(age) {
    return age >= 19 ? 'yes' : 'no';
}

console.log(allowedToDrink(18));
console.log(allowedToDrink2(19));