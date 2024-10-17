import {Coordinate} from "./Coordinate.js";

export class Planet {
    readonly centre: Coordinate;
    readonly radius : number;
    private ctx : CanvasRenderingContext2D;

    constructor(ctx : CanvasRenderingContext2D, centre: Coordinate, radius: number) {
        this.centre = centre;
        this.radius = radius;
        this.ctx = ctx;
    }

    draw() {
        this.ctx.save();

        this.ctx.beginPath();
        this.ctx.arc(this.centre.x + this.radius, this.centre.y, this.radius, 0, 2 * Math.PI);

        this.ctx.fillStyle = "indianred";
        this.ctx.fill();

        this.ctx.restore()
    }
}
