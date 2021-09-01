import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss'

import { Pencil } from './Pencil'
import { Slider } from '@material-ui/core'
import { SketchPicker } from 'react-color'

export default function Draw() {

  const size = { width: window.innerWidth, height: window.innerHeight}

  const canvasRef = useRef(null)
  const contextRef = useRef(null)

  const [lineWidth, setLineWidth] = useState(5)
  const [pencilColor, setPencilColor] = useState("#000")

  const [isPencilEraser, setIsPencilEraser] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2
    canvas.height = window.innerHeight * 2
    canvas.style.width = `${window.innerWidth}px`
    canvas.style.height = `${window.innerHeight}px`

    const context = canvas.getContext("2d")
    context.scale(2,2)

    context.lineCap = "round"
    context.strokeStyle = "#000"
    context.lineWidth = 5
    contextRef.current = context
  }, [])
  
  const pencil = new Pencil()
  
  function handleStartDrawing({nativeEvent}) {
    const { offsetX, offsetY } = nativeEvent
    pencil.startDrawing(contextRef.current, offsetX, offsetY )
  }

  function handleDrawing({nativeEvent}) {
    const { offsetX, offsetY } = nativeEvent
    pencil.drawing(contextRef.current, offsetX, offsetY )
  }

  function handleFinishDrawing() {
    pencil.finishDrawing(contextRef.current)
  }

  function changePencilWidth(event, newValue) {
    setLineWidth(newValue)
    contextRef.current.lineWidth = lineWidth
  }

  function changePencilColor(newColor) {
    setPencilColor(newColor.hex)
    contextRef.current.strokeStyle = newColor.hex
  }

  function handlePencil() {
    contextRef.current.strokeStyle = pencilColor
    setIsPencilEraser(false)
  }

  function handleEraser() {
    contextRef.current.strokeStyle = "#FFFFFF"
    setIsPencilEraser(true)
  }

  function handleClear() {
    const width = canvasRef.current.width
    const height = canvasRef.current.height
    contextRef.current.clearRect(0, 0, width, height)
  }

  return (
    <div className={styles.container}>
      <canvas 
        {...size} 
        className={styles.content}
        onMouseDown={handleStartDrawing} 
        onMouseUp={handleFinishDrawing}
        onMouseMove={handleDrawing}
        ref={canvasRef}
      />
      <div className={styles.drawPanel}>
        <div className={styles.options}>
          <button onClick={handlePencil}>Pincel</button>
          <button onClick={handleEraser}>Borracha</button>
          <button onClick={handleClear}>Limpar</button>
        </div>
        <div className={styles.optionsContainer}>
          <div className={styles.pencilContent}>
            <div>
              <Slider 
                value={lineWidth}
                onChange={changePencilWidth}
                min={1}
              />
              { isPencilEraser ? (<span>Tamanho da borracha: {lineWidth}px</span>) : (<span>Tamanho do pincel: {lineWidth}px</span>) }
            </div>
          </div>

          { !isPencilEraser && (
            <SketchPicker 
              color={pencilColor}
              onChange={changePencilColor}
              className={styles.colorPicker}
            />
          )}
        </div>
      </div>
    </div>

  )
}