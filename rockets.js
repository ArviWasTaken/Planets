function createRocket(planetOfOrigin, destinationPlanet) {
    let rocket = document.createElement("div");

    //styling
    rocket.style.position = "fixed";
    rocket.style.height = "25px";
    rocket.style.width = "10px";
    rocket.style.backgroundColor = "red";

    rocket.style.borderTop = "2px";
    rocket.style.borderTopColor = "black";
    rocket.style.borderTopStyle = "solid";

    rocketBound = rocket.getBoundingClientRect();
    planetBound = planetOfOrigin.getBoundingClientRect();

    rocket.style.left = planetBound.x + (planetBound.width / 2) - rocketBound.width + "px";
    rocket.style.top = planetBound.y + (planetBound.height / 2) - rocketBound.height + "px";

    document.body.appendChild(rocket);

    animateStraightLine(destinationPlanet, rocket);

    return rocket;
}