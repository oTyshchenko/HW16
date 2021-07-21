import { Dot } from "./class/Dot";
import { Rect } from "./class/Rect";
import { EllipseInRect } from "./class/Ellipse";

const width: number = 400;
const height: number = 400;
const numberOfDot: number = 10;

const firstRect = new Rect(Dot.getRandomDot(width, height), Dot.getRandomDot(width, height));
const secondRect = new Rect(Dot.getRandomDot(width, height), Dot.getRandomDot(width, height));
const crossRectangle = firstRect.crossRect(secondRect);

console.log('firstRect', firstRect);
console.log('secondRect', secondRect);
console.log('crossRectangle', crossRectangle);

if(crossRectangle) {
    const ellipse = new EllipseInRect(crossRectangle);
    const dots = [];
    
    let i: number = 0;
    while (i < numberOfDot) {
        const newDot = ellipse.getRandomDotInEllipse();
        dots.push(newDot);
        i++;
    };

    console.log('ellipse', ellipse);
    console.log('dots', dots);
};