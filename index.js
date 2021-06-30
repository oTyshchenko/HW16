var Dot = /** @class */ (function () {
    function Dot(x, y) {
        this.x = x;
        this.y = y;
    }
    Dot.randomDot = function (maxX, maxY) {
        return {
            x: (Math.floor(Math.random() * (maxX + 1))),
            y: (Math.floor(Math.random() * (maxY + 1)))
        };
    };
    return Dot;
}());
var Rect = /** @class */ (function () {
    function Rect(dot1, dot2) {
        this.beginX = Math.min(dot1.x, dot2.x);
        this.beginY = Math.min(dot1.y, dot2.y);
        this.width = Math.max(dot1.x, dot2.x) - this.beginX;
        this.height = Math.max(dot1.y, dot2.y) - this.beginY;
    }
    Rect.prototype.crossRect = function (rect) {
        var a = this.beginX + this.width;
        var b = rect.beginX + rect.width;
        var c = this.beginY + this.height;
        var d = rect.beginY + rect.height;
        var maxY = Math.max(this.beginY, rect.beginY);
        var maxX = Math.max(this.beginX, rect.beginX);
        var minX = Math.min(a, b);
        var minY = Math.min(c, d);
        if (minX > maxX && minY > maxY) {
            return {
                x: maxX,
                y: maxY,
                width: minX - maxX,
                height: minY - maxY
            };
        }
        ;
    };
    return Rect;
}());
var EllipseInRect = /** @class */ (function () {
    function EllipseInRect(rect) {
        this.x = rect.x + rect.width / 2;
        this.y = rect.y + rect.height / 2;
        this.radiusX = rect.width / 2;
        this.radiusY = rect.height / 2;
    }
    EllipseInRect.prototype.getRandomDotInEllipse = function () {
        var angle = Math.floor(Math.random() * Math.PI * 2);
        return {
            x: this.x + Math.floor(Math.cos(angle) * this.radiusX * Math.random()),
            y: this.y + Math.floor(Math.sin(angle) * this.radiusY * Math.random())
        };
    };
    return EllipseInRect;
}());
var numberOfDot = 10;
var firstRect = new Rect(Dot.randomDot(400, 400), Dot.randomDot(400, 400));
var secondRect = new Rect(Dot.randomDot(400, 400), Dot.randomDot(400, 400));
console.log(firstRect);
console.log(secondRect);
var crossRectangle = firstRect.crossRect(secondRect);
console.log(crossRectangle);
if (crossRectangle) {
    var newEllipse = new EllipseInRect(crossRectangle);
    var dotArr = [];
    var i = 0;
    while (i < numberOfDot) {
        var dotCoordinate = newEllipse.getRandomDotInEllipse();
        dotArr.push(dotCoordinate);
        i++;
    }
    ;
    console.log(dotArr);
}
;
