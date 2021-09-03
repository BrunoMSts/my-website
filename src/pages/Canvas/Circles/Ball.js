// export function Ball(ctx = null, posX, posY, radius, colorFill = ''){
//   this.posX = posX
//   this.posY = posY
//   this.velocity = {
//       dX: (Math.random() - 0.5) * 5,
//       dY: (Math.random() - 0.5) * 5
//   }
//   this.trailVelocity = 0.05
//   this.radians = Math.random() * Math.PI * 2
//   // this.distanceFromCenter = randomRange(50, 120)
//   this.radius = radius
//   this.lineWidth = 0.2
//   this.minRadius = radius
//   this.colorFill = "#333"
//   this.mass = 1

//   // this.moveRandom = () => {
      
//   //     if(this.posY + this.radius >= canvas.height || this.posY - this.radius < 0){
//   //         this.velocity.dY = -this.velocity.dY
//   //     }
//   //     if(this.posX + this.radius >= canvas.width || this.posX - this.radius < 0){
//   //         this.velocity.dX = -this.velocity.dX
//   //     }
//   //     this.posY += this.velocity.dY
//   //     this.posX += this.velocity.dX

//   // }

//   // this.activeGravity = () => {
//   //     if(this.posY + this.radius + this.velocity.dY > canvas.height - 1){
//   //         this.velocity.dY = -this.velocity.dY * FRICTION
//   //     } else {
//   //         this.velocity.dY += GRAVITY
//   //     }

//   //     this.posY += this.velocity.dY
      
//   // }

//   // this.activeHover = () => {
//   //     if (mouse.cordX - this.posX < 100 && mouse.cordX - this.posX > -100 &&
//   //         mouse.cordY - this.posY < 100 && mouse.cordY - this.posY > -100 && 
//   //         this.radius < maxRadius) {
//   //         this.radius++
//   //         this.lineWidth += 0.1
//   //     } else if (this.radius > this.minRadius) {
//   //         this.radius--
//   //         this.lineWidth -= 0.1
//   //     }
//   // }

//   // this.activeColision = balls => {
//   //     for(let i = 0; i < balls.length; i++) {
//   //         if(this === balls[i]) continue;

//   //         if(getDistance(this.posX, this.posY, balls[i].posX, balls[i].posY) - radius * 2 < 0) {
//   //             resolveCollision(this, balls[i])
//   //         }
//   //     }
//   // }

//   // this.trails = () => {
      
//   //     if(isClick){
//   //         this.radians += this.trailVelocity
//   //         this.posX = mouse.clientX + Math.cos(this.radians) * this.distanceFromCenter
//   //         this.posY = (mouse.clientY - 50) + Math.sin(this.radians) * this.distanceFromCenter
//   //         if(isMouseMoving){
//   //             this.posX = mouse.cordX + Math.cos(this.radians) * this.distanceFromCenter
//   //             this.posY = (mouse.cordY - 50) + Math.sin(this.radians) * this.distanceFromCenter
//   //         }
//   //     }
//   // }

//   // this.lineConnections = balls => {
//   //     for(let i = 0; i < balls.length; i++) {
//   //         if(this === balls[i]) continue;

//   //         const distance = getDistance(this.posX, this.posY, balls[i].posX, balls[i].posY)

//   //         if (distance < 150) {
//   //             context.beginPath()
//   //             context.strokeStyle = this.colorFill
//   //             context.lineWidth = this.lineWidth

//   //             context.moveTo(this.posX, this.posY)
//   //             context.lineTo(balls[i].posX, balls[i].posY)

//   //             context.stroke()
//   //             context.closePath()
//   //         }
//   //     }
//   // }

//   this.draw = () => {
//       this.ctx.beginPath()
//       this.ctx.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, false)
//       this.ctx.fillStyle = this.colorFill
//       this.ctx.fill()
//       this.ctx.closePath()
//   }
// }

export class Ball {
  constructor(posX, posY, radius, colorFill = '')  {
    this.posX = posX 
    this.posY = posY
    this.velocity = {
        dX: (Math.random() - 0.5) * 5,
        dY: (Math.random() - 0.5) * 5
  }
  this.trailVelocity = 0.05
  this.radians = Math.random() * Math.PI * 2
  // this.distanceFromCenter = randomRange(50, 120)
  this.radius = radius
  this.lineWidth = 0.2
  this.minRadius = radius
  this.colorFill = "#ff112230"
  this.mass = 1
 }

  moveRandom(canvaWidth, canvaHeight) {
    if(this.posY + this.radius >= canvaHeight - 10 || this.posY - this.radius < 0){
      this.velocity.dY = -this.velocity.dY
    }
    if(this.posX + this.radius >= canvaWidth - 10 || this.posX - this.radius < 0){
      this.velocity.dX = -this.velocity.dX
    }

    if((this.posX + this.radius > canvaWidth )) {
      this.posX = (this.radius * 2)
    }

    if((this.posY + this.radius > canvaHeight )) {
      this.posY = (this.radius * 2)
    }
    this.posY += this.velocity.dY
    this.posX += this.velocity.dX
  }

  lineConnections(balls, actualBall, context) {
    for(let i = 0; i < balls.length; i++) {
      if(actualBall === balls[i]) continue;

      const distance = this.getDistance(this.posX, this.posY, balls[i].posX, balls[i].posY)

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

  getDistance(posX1, posY1, posX2, posY2) {
    const xDist = posX2 - posX1
    const yDist = posY2 - posY1

    const hypot = Math.hypot(xDist, yDist)

    return hypot
  }

  draw(ctx) {
    ctx.beginPath()
    ctx.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, false)
    ctx.fillStyle = this.colorFill
    ctx.fill()
    ctx.closePath()
  }
}