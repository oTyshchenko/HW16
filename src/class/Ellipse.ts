import { Dot } from "./Dot";
import { Rect } from "./Rect";

export class EllipseInRect {
    center: Dot;
    radiusX: number;
    radiusY: number;

    constructor(rect: Rect) {
        this.center = new Dot(((rect.dot2.x - rect.dot1.x) / 2 + rect.dot1.x), ((rect.dot2.y - rect.dot1.y) / 2) + rect.dot1.y);
        this.radiusX = (rect.dot2.x - rect.dot1.x) / 2;
        this.radiusY = (rect.dot2.y - rect.dot1.y) / 2;
    }

    getRandomDotInEllipse() {
        const angle = Math.floor(Math.random() * Math.PI * 2);
        const x = this.center.x + Math.floor(Math.cos(angle) * this.radiusX * Math.random());
        const y = this.center.x + Math.floor(Math.sin(angle) * this.radiusY * Math.random());
        return new Dot(x, y);
    }
};