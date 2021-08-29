export class Pencil {
  contructor() {}

  startDrawing(contexto, offsetX, offsetY) {
    contexto.beginPath()
    contexto.moveTo(offsetX, offsetY)
    this.isDrawing = true;
  }

  drawing(contexto, offsetX, offsetY) {
    if(!this.isDrawing) return;

    contexto.lineTo(offsetX, offsetY)
    contexto.stroke()
  }

  finishDrawing(contexto) {
    contexto.closePath()
    this.isDrawing = false;
  }
}