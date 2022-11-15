const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
let x = 10
let y = 11
let dx = 3
let dy = 1


class Triangle {
    constructor(){
        this.x = 5
        this.y = 5
        this.dx = 1
        this.dy = 1
        this.width = 6
        this.height = 4
    }

    draw = function (){

        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x+10, this.y+10);
        ctx.lineTo(this.x+10, this.y);
        ctx.fill();
        ctx.fillStyle = "#0085DE"
    }
}

class Box {
    constructor(){
        this.x = 10
        this.y = 10
        this.dx = 1
        this.dy = 1
        this.width = 10
        this.height = 10
    }

    draw(){
        ctx.rect(this.x, this.y, this.width, this.height)
        ctx.fillStyle = "#0085DE"
        ctx.fill()
    }
}

let box1 = new Box();
let triangle1 = new Triangle();

function a_function(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.beginPath()


    box1.draw()
    triangle1.draw()
    console.log(box1.dx , box1.dy)
    // ctx.rect(x,y,10,10)
    // ctx.fillStyle = "#0095DE"
    // ctx.fill()
    ctx.closePath()
    box1.x += box1.dx
    box1.y += box1.dy
    triangle1.x += dx
    triangle1.y += dy
    // console.log(box1.x)
    x += dx
    y += dy

    if(triangle1.x > canvas.width - 10){
        dx = -1
    }
    if(triangle1.y > canvas.height - 10 ){
        dy = -1
    }
    if(triangle1.x < 0 || box1.x < 0 ){
        dx = 1
    }
    if(triangle1.y < 0 || box1.y < 0){
        dy = 1
    }

    if(box1.x > canvas.width - 10){
        box1.dx = -1
    }
    if(box1.y > canvas.height - 10 ){
        box1.dy = -1
    }
    if(box1.x < 0){
        box1.dx = 1
    }
    if(box1.y < 0 ){
        box1.dy = 1
    }
}
setInterval(a_function, 20)
