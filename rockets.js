function createRocket(planetOfOrigin, destinationPlanet) {
    let rocket = document.createElement("div");

    //styling
    rocket.style.position = "fixed";
    rocket.style.height = "10px";
    rocket.style.width = "10px";
    rocket.style.backgroundColor = "red";

    rocket.style.left = planetOfOrigin.getBoundingClientRect().x + (planetOfOrigin.getBoundingClientRect().width / 2) - rocket.getBoundingClientRect().width + "px";
    rocket.style.top = planetOfOrigin.getBoundingClientRect().y + (planetOfOrigin.getBoundingClientRect().width / 2) - rocket.getBoundingClientRect().height + "px";

    return rocket;
}