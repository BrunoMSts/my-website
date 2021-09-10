export class Particle {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.size = 0.8;
    this.initialX = this.x;
    this.initialY = this.y;
    this.density = (Math.random() * 30) + 1;
    this.mouseRadius = 70;
    this.color = color
  }

  draw(context) {
    context.fillStyle = this.color;
    context.beginPath();
    context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    context.closePath();
    context.fill();

    // context.fillStyle = '#000';
    // context.font = '40px Verdana';
    // context.fillText('Made with    by Bruno', 0, 40)
  }

  update(mouseX, mouseY) {
    let dx = mouseX - this.x;
    let dy = mouseY - this.y;
    let distance = Math.hypot(dx, dy);
    let forceDirectionX = dx / distance;
    let forceDirectionY = dy / distance;
    let maxDistance = this.mouseRadius;
    let force = (maxDistance - distance) / maxDistance;
    let directionX = forceDirectionX * force * this.density;
    let directionY = forceDirectionY * force * this.density;

    if(distance < this.mouseRadius) {
      this.x -= directionX;
      this.y -= directionY;
      this.color = "#F43e00"
    } else {
      if(this.x !== this.initialX) {
        let dx = this.x - this.initialX;
        this.x -= dx / 10;
        
      }
      if(this.y !== this.initialY) {
        let dy = this.y - this.initialY;
        this.y -= dy / 10;
      }
      this.color = "#000"
    }
  }


}