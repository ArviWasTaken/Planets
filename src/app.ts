import { Planet } from "./planet.js"
import { Rocket } from "./rocket.js"
import {Coordinate} from "./Coordinate.js";

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

function setElementToScreenSize() {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;
}

setElementToScreenSize();
addEventListener("resize", setElementToScreenSize);

const drawBoundaryRight = canvas.width * 0.9
const drawBoundaryLeft = canvas.width * 0.1
const drawBoundaryBottom = canvas.height * 0.9
const drawBoundaryTop = canvas.height * 0.1

ctx.save();
ctx.fillStyle = "darkslateblue";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.restore();

const planets : Planet[] = [
    new Planet(ctx, Coordinate.random(drawBoundaryLeft, drawBoundaryRight, drawBoundaryBottom, drawBoundaryTop), 40),
    new Planet(ctx, Coordinate.random(drawBoundaryLeft, drawBoundaryRight, drawBoundaryBottom, drawBoundaryTop), 20),
    new Planet(ctx, Coordinate.random(drawBoundaryLeft, drawBoundaryRight, drawBoundaryBottom, drawBoundaryTop), 80),
];

planets.forEach(planet => planet.draw())

const r1 = new Rocket(ctx, Coordinate.random(drawBoundaryTop, drawBoundaryBottom))
r1.draw()


function draw() {

}

setInterval(draw, 10);



