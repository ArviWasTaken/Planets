function createPlanet() {
    let planet = document.createElement("div");

    // Randomised properties
    let size = randomInteger(50, 150) + "px";
    planet.style.height = size;
    planet.style.left = randomInteger(window.innerWidth * 0.1, window.innerWidth * 0.9) + "px";
    planet.style.top = randomInteger(window.innerHeight * 0.1, window.innerHeight * 0.9) + "px";

    // Planet-like appearance
    planet.style.position = "fixed";
    planet.style.width = size;
    planet.style.backgroundColor = "indianred";
    planet.style.borderRadius = "100%";

    //centre
    let centre = document.createElement("div");
    planet.appendChild(centre)
    centre.style.position = "absolute";
    centre.style.height = "5px";
    centre.style.width = "5px";

    console.log( planet.style.left + planet.style.width + "px");
    centre.style.left = planet.style.left + planet.style.width + "px";
    centre.style.backgroundColor = "orange";
    centre.style.borderRadius = "100%";
    centre.style.position = "fixed";
    centre.style.zIndex="99"



    return planet
}

