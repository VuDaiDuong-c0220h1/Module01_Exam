//Bài 1
let pointArray = [1, 2, 3, 6, 9, 10];
function findMax(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++ ) {
        if (max < array[i]) {
            max = array[i]
        }
    }
    console.log(max) ;
}
findMax(pointArray);

//Bài 2
let intArray = [1, 2, 3, 1, 4, 1, 1, 10, 9];
function tryRemoveFromArray(array, number) {
    let i = 0;
    while (i < array.length) {
        if (array[i] == number) {
            array.splice(i, 1);
        } else {
            i++;
        }
    }
    console.log(array);
}
tryRemoveFromArray(intArray, 1);

//Bài 3
let int = prompt("Nhập vào một số nguyên");
function isFibonacci(n) {
    if (checkFibonacci(n)) {
        alert("Đây là số Fibonacci");
    } else {
        alert("Không phải số Fibonacci");
    }
}
function checkFibonacci(n) {
    let a = 0;
    let b = 1;
    let c = a + b;
    if (n == 0 || n == 1) {
        return true;
    }
    while (c <= n) {
        if (c == n) {
            return true;
        } else {
            a = b;
            b = c;
            c = a + b;
        }
    }
    return false;
}
isFibonacci(int);

//Bài 4
let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
let Circle = function (x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.drawCircle =  function () {
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2* Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.stroke();
    }
};
let circle = new Circle(10, 10, 100, "#000000");
circle.drawCircle();