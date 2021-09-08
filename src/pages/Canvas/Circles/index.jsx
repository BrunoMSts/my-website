import { useEffect, useRef, useState } from 'react';
import { Ball } from './Ball'

import styles from './styles.module.scss'

export default function Draw() {

  //const size = { width: window.innerWidth * 0.8, height: window.innerHeight * 0.8 }

  const canvasRef = useRef(null);
  const requestIdRef = useRef(null);

  const qtdBalls = 30

  let width = window.innerWidth - 20;
  let height = window.innerHeight

  let size = {width, height}

  let balls = []

  useEffect(() => {
    for(let i = 0; i < qtdBalls; i++) {
      let radius = Math.random() * 1 + 4;
      let x = Math.random() * (size.width - radius + 1) + radius
      let y = Math.random() * (size.height - radius + 1) + radius
      let ball = new Ball(x, y, radius)
      balls.push(ball)
    }
  }, [])
  
  const renderFrame = () => {
    let width = window.innerWidth
    let height = window.innerHeight
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, (width * 1.5), (height * 1.5));

    window.addEventListener('resize', () => {
      width = window.innerWidth
      height = window.innerHeight
    })

    balls.forEach(ball => {
      ball.moveRandom(width, height);

      ball.lineConnections(balls, ball, ctx)

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

  return <canvas className={styles.content} {...size} ref={canvasRef} />;
}