import { Dot } from "./Dot";

export class Rect {
    dot1: Dot;
    dot2: Dot;

    constructor(dot1: Dot, dot2: Dot) {
        this.dot1 = dot1;
        this.dot2 = dot2;
    }

    crossRect(rect: Rect) {
        const dot1X = Math.max(Math.min(this.dot1.x, this.dot2.x), Math.min(rect.dot1.x, rect.dot2.x));
        const dot2X = Math.min(Math.max(this.dot1.x, this.dot2.x), Math.max(rect.dot1.x, rect.dot2.x));
        const dot1Y = Math.max(Math.min(this.dot1.y, this.dot2.y), Math.min(rect.dot1.y, rect.dot2.y));
        const dot2Y = Math.min(Math.max(this.dot1.y, this.dot2.y), Math.max(rect.dot1.y, rect.dot2.y));
        if (dot2X > dot1X && dot2Y > dot1Y) {
            return new Rect(new Dot(dot1X, dot1Y), new Dot(dot2X, dot2Y));
        };
    }
};