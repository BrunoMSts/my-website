const canvas = document.getElementById("main");

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const context = canvas.getContext("2d");
const GRAVITY = 0.5
const maxRadius = 50

let FRICTION = 0.95
let isGravity = true
let isHover = true
let isMovement = true
let isColision = true
let isConnected = true
let isClicked = false
let isTrail = false
let isClick = false
let isMouseMoving = false

const COLORS = [
    ['#6EA0F9', 
     '#60ADDB', 
     '#77E4F2', 
     '#60DBC8', 
     '#6EF9BC'],
     ['#A6034F',
      '#F21D81',
      '#0477BF',
      '#048ABF',
      '#04ADBF'],
     ['#00FC77',
      '#00E02A',
      '#28F70C',
      '#68E000',
      '#CDFC00'],
     ['#3C1C5C',
      '#4B2273',
      '#5A298A',
      '#7134AD',
      '#7E3AC2'],
]

let colorPalet = Math.floor(Math.random() * COLORS.length)

let mouse = {
    cordX: undefined,
    cordY: undefined,
}

function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function getDistance(posX1, posY1, posX2, posY2) {
    const xDist = posX2 - posX1
    const yDist = posY2 - posY1

    const hypot = Math.hypot(xDist, yDist)

    return hypot
}

function changePallet(){
    colorPalet = Math.floor(Math.random() * COLORS.length)
    init()
}

function isGravityOn() {
    let button = document.querySelector(".gravity")
    
    if(isGravity){
        isGravity = false
        button.innerHTML = "Activate gravity"
        init()
    } else {
        isGravity = true
        button.innerHTML = "Deactivate gravity"
    }
}

function isHoverOn()  {
    let button = document.querySelector(".hover")

    if(isHover){
        isHover = false
        button.innerHTML = "Activate hover"
    } else {
        isHover = true
        button.innerHTML = "Deactivate hover"
    }
}

function isMovementOn() {
    let button = document.querySelector(".movement")

    if(isMovement){
        isMovement = false
        button.innerHTML = "Activate movement"
    } else {
        isMovement = true
        button.innerHTML = "Deactivate movement"
    }
}

function isColisionOn() {
    let button = document.querySelector(".colision")

    if(isColision){
        isColision = false
        button.innerHTML = "Activate colision"
    } else {
        isColision = true
        button.innerHTML = "Deactivate colision"
    }
}

function isTrailOn() {
    let button = document.querySelector(".trail")

    if(isTrail){
        isTrail = false
        button.innerHTML = "Activate trail"
    } else {
        isTrail = true
        button.innerHTML = "Deactivate trail"
    }
}

function isClickOn() {
    let button = document.querySelector(".click")

    if(isClick){
        isClick = false
        button.innerHTML = "Active click"
    } else {
        isClick = true
        button.innerHTML = "Deactivate click"
    }
}

function isConnectionOn() {
    let button = document.querySelector(".connection")

    if(isConnected){
        isConnected = false
        button.innerHTML = "Active connections"
    } else {
        isConnected = true
        button.innerHTML = "Deactivate connections"
    }
}

function increaseFriction() {
    if(FRICTION > 0.1){
        FRICTION = FRICTION - 0.05
    } 
}

function decreaseFriction() {
    if(FRICTION <= 0.95){
        FRICTION = FRICTION + 0.05
    }
}

function shake() {
    init()
}

function rotate(velocity, angle) {
    const rotatedVelocities = {
        x: velocity.dX * Math.cos(angle) - velocity.dY * Math.sin(angle),
        y: velocity.dX * Math.sin(angle) + velocity.dY * Math.cos(angle),
    }

    return rotatedVelocities
}

function resolveCollision(particle, otherParticle) {
    const xVelocityDiff = particle.velocity.dX - otherParticle.velocity.dX;
    const yVelocityDiff = particle.velocity.dY - otherParticle.velocity.dY;

    const xDist = otherParticle.posX - particle.posX
    const yDist = otherParticle.posY - particle.posY

    if(xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
        const angle = -Math.atan2(otherParticle.posY -  particle.posY, otherParticle.posX - particle.posX);

        const m1 = particle.mass
        const m2 = otherParticle.mass
        
        const u1 = rotate(particle.velocity, angle)
        const u2 = rotate(otherParticle.velocity, angle)

        const v1 = { dX: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), dY: u1.y }
        const v2 = { dX: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m1 / (m1 + m2), dY: u2.y }

        const vFinal1 = rotate(v1, -angle)
        const vFinal2 = rotate(v2, -angle)

        particle.velocity.dX = vFinal1.x
        particle.velocity.dY = vFinal1.y

        otherParticle.velocity.dX = vFinal2.x
        otherParticle.velocity.dY = vFinal2.y
    }
}

window.addEventListener('mousemove', event => {
    mouse.cordX = event.x
    mouse.cordY = event.y
    isMouseMoving = true
})

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
})

window.addEventListener('mousedown', event => {
    mouse.clientX = event.x
    mouse.clientY = event.y
    isClicked = true
})

window.addEventListener('mouseup', event => {
    isClicked = false
    isMouseMoving = false
})




function Ball(posX, posY, radius, colorFill){
    this.posX = posX
    this.posY = posY
    this.velocity = {
        dX: (Math.random() - 0.5) * 5,
        dY: (Math.random() - 0.5) * 5
    }
    this.trailVelocity = 0.05
    this.radians = Math.random() * Math.PI * 2
    this.distanceFromCenter = randomRange(50, 120)
    this.radius = radius
    this.lineWidth = 0.2
    this.minRadius = radius
    this.colorFill = colorFill
    this.mass = 1
    

    this.moveRandom = () => {
        
        if(this.posY + this.radius >= canvas.height || this.posY - this.radius < 0){
            this.velocity.dY = -this.velocity.dY
        }
        if(this.posX + this.radius >= canvas.width || this.posX - this.radius < 0){
            this.velocity.dX = -this.velocity.dX
        }
        this.posY += this.velocity.dY
        this.posX += this.velocity.dX

    }

    this.activeGravity = () => {
        if(this.posY + this.radius + this.velocity.dY > canvas.height - 1){
            this.velocity.dY = -this.velocity.dY * FRICTION
        } else {
            this.velocity.dY += GRAVITY
        }

        this.posY += this.velocity.dY
        
    }

    this.activeHover = () => {
        if (mouse.cordX - this.posX < 100 && mouse.cordX - this.posX > -100 &&
            mouse.cordY - this.posY < 100 && mouse.cordY - this.posY > -100 && 
            this.radius < maxRadius) {
            this.radius++
            this.lineWidth += 0.1
        } else if (this.radius > this.minRadius) {
            this.radius--
            this.lineWidth -= 0.1
        }
    }

    this.activeColision = balls => {
        for(let i = 0; i < balls.length; i++) {
            if(this === balls[i]) continue;

            if(getDistance(this.posX, this.posY, balls[i].posX, balls[i].posY) - radius * 2 < 0) {
                resolveCollision(this, balls[i])
            }
        }
    }

    this.trails = () => {
        
        if(isClick){
            this.radians += this.trailVelocity
            this.posX = mouse.clientX + Math.cos(this.radians) * this.distanceFromCenter
            this.posY = (mouse.clientY - 50) + Math.sin(this.radians) * this.distanceFromCenter
            if(isMouseMoving){
                this.posX = mouse.cordX + Math.cos(this.radians) * this.distanceFromCenter
                this.posY = (mouse.cordY - 50) + Math.sin(this.radians) * this.distanceFromCenter
            }
        }
    }

    this.lineConnections = balls => {
        for(let i = 0; i < balls.length; i++) {
            if(this === balls[i]) continue;

            const distance = getDistance(this.posX, this.posY, balls[i].posX, balls[i].posY)

            if (distance < 150) {
                context.beginPath()
                context.strokeStyle = this.colorFill
                context.lineWidth = this.lineWidth

                context.moveTo(this.posX, this.posY)
                context.lineTo(balls[i].posX, balls[i].posY)

                context.stroke()
                context.closePath()
            }
        }
    }

    this.draw = () => {
        context.beginPath()
        context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, false)
        context.fillStyle = this.colorFill
        context.fill()
        context.closePath()
    }
}

let balls = []

function init(){
    balls = []
    for(let i = 0; i < 50; i++){
        let radius = Math.random() * 3 + 5;
        let x = Math.random() * (window.innerWidth - radius + 1) + radius
        let y = Math.random() * (window.innerHeight - radius + 1) + radius
        let colorFill = Math.floor(Math.random() * COLORS[colorPalet].length)

        if(i !== 0){
            for(let j = 0; j < balls.length; j++){
                if(getDistance(x, y, balls[j].posX, balls[j].posY) - radius * 2 < 0) {
                    x = Math.random() * (window.innerWidth - radius + 1) + radius
                    y = Math.random() * (window.innerHeight - radius + 1) + radius

                    j = -1;
                }
            } 
        }

        balls.push(new Ball(x, y, radius, COLORS[colorPalet][colorFill]))
    }
}

function animate(){
    requestAnimationFrame(animate)

    if(isTrail){
        context.fillStyle = 'rgba(255, 255, 255, 0.2)'
        context.fillRect(0, 0, canvas.width, canvas.height)
    } else {
        context.clearRect(0, 0, innerWidth, innerHeight)
    }

    balls.forEach(ball => {
        if(isGravity){
            ball.activeGravity()
        }
        if(isHover){
            ball.activeHover()
        }
        if(isMovement){
            ball.moveRandom()
        }
        if(isColision){
            ball.activeColision(balls)
        }
        if(isClicked){
            ball.trails()
        }
        if(isConnected){
            ball.lineConnections(balls)
        }
        ball.draw()
    })
}

init()
animate()