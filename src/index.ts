class Dot {
    x: number
    y: number

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    static randomDot(maxX: number, maxY: number) {
        return {
            x: (Math.floor(Math.random() * (maxX + 1))),
            y: (Math.floor(Math.random() * (maxY + 1)))
        }
    }
}

class Rect {
    beginX: number;
    beginY: number;
    width: number;
    height: number;

    constructor(dot1: { x: number; y: number; }, dot2: { x: number; y: number; }) {
        this.beginX = Math.min(dot1.x, dot2.x);
        this.beginY = Math.min(dot1.y, dot2.y);
        this.width = Math.max(dot1.x, dot2.x) - this.beginX;
        this.height = Math.max(dot1.y, dot2.y) - this.beginY;
    }

    crossRect(rect: { beginX: number; width: any; beginY: number; height: any; }) {
        const a = this.beginX + this.width;
        const b = rect.beginX + rect.width;
        const c = this.beginY + this.height;
        const d = rect.beginY + rect.height;
        const maxY = Math.max(this.beginY, rect.beginY);
        const maxX = Math.max(this.beginX, rect.beginX);
        const minX = Math.min(a, b);
        const minY = Math.min(c, d);
        if (minX > maxX && minY > maxY) {
            return {
                x: maxX,
                y: maxY,
                width: minX - maxX,
                height: minY - maxY
            };
        };
    }
}

class EllipseInRect {
    x: number;
    y: number;
    radiusX: number;
    radiusY: number;
    constructor(rect: { x: number; width: number; y: number; height: number; }) {
        this.x = rect.x + rect.width / 2;
        this.y = rect.y + rect.height / 2;
        this.radiusX = rect.width / 2;
        this.radiusY = rect.height / 2;
    }

    getRandomDotInEllipse() {
        const angle = Math.floor(Math.random() * Math.PI * 2);
        return {
            x: this.x + Math.floor(Math.cos(angle) * this.radiusX * Math.random()),
            y: this.y + Math.floor(Math.sin(angle) * this.radiusY * Math.random())
        };
    }
}
const numberOfDot: number = 10;

const firstRect = new Rect(Dot.randomDot(400, 400),Dot.randomDot(400, 400));
const secondRect = new Rect(Dot.randomDot(400, 400),Dot.randomDot(400, 400));
console.log(`Rectangle 1: `, firstRect);
console.log(`Rectangle 2: `, secondRect);
const crossRectangle = firstRect.crossRect(secondRect);
console.log(`Cross rectangle: `, crossRectangle);

if (crossRectangle) {
    const newEllipse = new EllipseInRect(crossRectangle);
    console.log(`Ellipse: `,crossRectangle);

    const dotArr: {x:number, y: number}[] = [];

    let i: number = 0;
    while (i < numberOfDot) {
        const dotCoordinate = newEllipse.getRandomDotInEllipse();
        const newDot = new Dot(dotCoordinate.x, dotCoordinate.y)
        dotArr.push(newDot);
        i++;
    };
    console.log(`Dots: `, dotArr);
};