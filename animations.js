function animateStraightLine(destinationPlanet, rocket) {
    let RocketIsLowerThenDestinationCompletionCondition = (rocket, destination) => rocket > destination;
    let RocketIsHigherThenDestinationCompletionCondition = (rocket, destination) =>  rocket < destination;

    let rocketStartBound = rocket.getBoundingClientRect();

    let rocketStartX = rocketStartBound.x;
    let rocketStartY = rocketStartBound.y;

    let destinationCentre = findObjectCentre(destinationPlanet);
    let rocketCentre = findObjectCentre(rocket)

    // calculate relative stepsize
    // get x distance and y distance
    let xDistance = Math.max(rocketCentre.x, destinationCentre.x) - Math.min(rocketCentre.x, destinationCentre.x);
    let yDistance = Math.max(rocketCentre.y, destinationCentre.y) - Math.min(rocketCentre.y, destinationCentre.y);

    let xStepSize;
    let yStepSize;

    // Set the relative stepsize for one dimension
    if (xDistance < yDistance) {
        xStepSize = 1;
        yStepSize = yDistance / xDistance;
    } else {
        xStepSize = xDistance / yDistance;
        yStepSize = 1;
    }

    let xEval;
    let yEval;

    if (destinationCentre.x < rocketStartX) {
        xStepSize *= -1;
        xEval = RocketIsHigherThenDestinationCompletionCondition;
    } else {
        xStepSize *= 1;
        xEval = RocketIsLowerThenDestinationCompletionCondition;
    }

    if (destinationCentre.y < rocketStartY) {
        yStepSize *= -1
        yEval = RocketIsHigherThenDestinationCompletionCondition
    } else {
        yStepSize *= 1;
        yEval = RocketIsLowerThenDestinationCompletionCondition;
    }

    console.log("X: ", xStepSize, xDistance);
    console.log("Y: ", yStepSize, yDistance);

    let id = setInterval(frame, 5);
    let xStepCount = 0;
    let yStepCount = 0;

    function frame() {
        let currentRocketCentre = findObjectCentre(rocket);

        if (xEval(currentRocketCentre.x, destinationCentre.x) && yEval(currentRocketCentre.y, destinationCentre.y)) {
            clearInterval(id);
        } else {
            // add stepsize to each dimension
            xStepCount += 1;
            yStepCount += 1;

            // Update position of the rocket
            rocket.style.left = rocketStartX + xStepSize * xStepCount + 'px';
            rocket.style.top = rocketStartY + yStepSize * yStepCount + 'px';
        }
    }
}