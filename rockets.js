function createRocket(planetOfOrigin, destinationPlanet) {
    let rocket = document.createElement("div");

    //styling
    rocket.style.position = "fixed";
    rocket.style.height = "10px";
    rocket.style.width = "10px";
    rocket.style.backgroundColor = "red";

    rocketBound = rocket.getBoundingClientRect();
    planetBound = planetOfOrigin.getBoundingClientRect();

    rocket.style.left = planetBound.x + (planetBound.width / 2) - rocketBound.width + "px";
    rocket.style.top = planetBound.y + (planetBound.width / 2) - rocketBound.height + "px";

    return rocket;
}