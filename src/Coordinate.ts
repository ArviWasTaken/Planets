import {randomInteger} from "./util.js";

export class Coordinate {
    readonly x: number
    readonly y: number

    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }

    findAngleTowards(other: Coordinate) {
        return Math.atan2(other.y - this.y, other.x - this.x) * 180 / Math.PI;
    }

    findDistanceBetween(other: Coordinate) {
        return Math.sqrt(Math.pow(other.x - this.x, 2) - Math.pow(other.y + this.y, 2));
    }

    static random(xmin: number, xmax: number, ymin?: number, ymax?: number): Coordinate {
        if (ymin == undefined || ymax == undefined) {
            return new Coordinate(
                randomInteger(xmin, xmax),
                randomInteger(xmin, xmax),
            );
        } else {
            return new Coordinate(
                randomInteger(xmin, xmax),
                randomInteger(ymin, ymax),
            );
        }

    }

}