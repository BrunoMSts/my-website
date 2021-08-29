import { useEffect, useRef, useState } from 'react';
import { Ball } from './Ball'

export default function Draw() {

  //const size = { width: window.innerWidth * 0.8, height: window.innerHeight * 0.8 }

  const canvasRef = useRef(null);
  const requestIdRef = useRef(null);
  
  const size = { width: 400, height: 250 };
  
  let balls = []
  for(let i = 0; i < 5; i++) {
    let radius = Math.random() * 10 + 20;
    let x = Math.random() * (size.width - radius + 1) + radius
    let y = Math.random() * (size.height - radius + 1) + radius
    let ball = new Ball(x, y, radius, size.width, size.height)
    balls.push(ball)
  }


  const renderFrame = () => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, size.width, size.height);

    balls.forEach(ball => {
      ball.moveRandom()
      ball.draw(ctx)
    })
  };

  const tick = () => {
    if (!canvasRef.current) return;
    renderFrame();
    requestIdRef.current = requestAnimationFrame(tick);
  };

  useEffect(() => {
    requestIdRef.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(requestIdRef.current);
    };
  }, []);

  return <canvas {...size} ref={canvasRef} />;
}