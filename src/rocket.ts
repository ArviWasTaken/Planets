import {Coordinate} from "./Coordinate.js";

export class Rocket {
    readonly centre: Coordinate
    private ctx : CanvasRenderingContext2D;

    constructor(ctx : CanvasRenderingContext2D, centre: Coordinate) {
        this.centre = centre;
        this.ctx = ctx;
    }

    draw() {
        this.ctx.save();
        this.ctx.beginPath();

        this.ctx.fillRect(this.centre.x, this.centre.y, 10, 20);
        this.ctx.fillStyle = "blue";

        this.ctx.fill();
        this.ctx.restore()
    }
}