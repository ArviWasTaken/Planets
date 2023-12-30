function createPlanet() {
    let planet = document.createElement("div");

    // Randomised properties
    planet.style.height = randomInteger(50, 150) + "px";
    planet.style.left = randomInteger(10, 90) + "%";
    planet.style.top = randomInteger(10, 90) + "%";

    // Planet-like appearance
    planet.style.position = "fixed";
    planet.style.width = planet.style.height;
    planet.style.backgroundColor = "indianred";
    planet.style.borderRadius = "100%";


    return planet
}