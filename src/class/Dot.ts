export class Dot {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    static getRandomDot(maxX: number, maxY: number) {
        return new Dot((Math.floor(Math.random() * (maxX + 1))), (Math.floor(Math.random() * (maxY + 1))));
    }
};