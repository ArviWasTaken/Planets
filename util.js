function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function findObjectCentre(planet) {
    let planetBound = planet.getBoundingClientRect();
    let x = planetBound.x + (planetBound.width / 2);
    let y = planetBound.y + (planetBound.height / 2);
    return {x, y};
}