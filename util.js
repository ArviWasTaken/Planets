function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function findObjectCentre(planet) {
    let planetBound = planet.getBoundingClientRect();
    let x = planetBound.x + (planetBound.width / 2);
    let y = planetBound.y + (planetBound.height / 2);
    return {x, y};
}

function findAngleBetweenPoints(pointA, pointB) {
    return Math.atan((pointB.y - pointA.y) / (pointB.x - pointA.x)) * (180/Math.PI);
}

function findDistanceBetweenPoints(pointA, pointB) {
    return Math.sqrt(Math.pow(pointB.x - pointA.x, 2) - Math.pow(pointB.y + pointA.y, 2));
}
