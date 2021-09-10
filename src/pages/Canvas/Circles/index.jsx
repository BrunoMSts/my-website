import { useEffect, useRef } from 'react';
import { Ball } from './Ball'
// import { Particle } from './Particle'

import styles from './styles.module.scss'

export default function Draw() {

  //const size = { width: window.innerWidth * 0.8, height: window.innerHeight * 0.8 }
  const canvasRef = useRef(null);
  const requestIdRef = useRef(null);
  const qtdBalls = 30
  
  let mouse = {
    x: null,
    y: null,
  }

  let width = window.innerWidth - 20;
  let height = window.innerHeight

  let size = {width, height}

  let balls = []

  // let particles = []

  useEffect(() => {
    for(let i = 0; i < qtdBalls; i++) {
      let radius = Math.random() * 1 + 4;
      let x = Math.random() * (size.width - radius + 1) + radius
      let y = Math.random() * (size.height - radius + 1) + radius
      balls.push(new Ball(x, y, radius))
    }
  }, [])

  // useEffect(() => {
  //   const ctx = canvasRef.current.getContext("2d");
  //   ctx.fillStyle = '#000';
  //   ctx.font = '40px Verdana';
  //   ctx.fillText('Made with    by Bruno', 0, 40)
    
  //   const textCoordinates = ctx.getImageData(0, 0, width, 140);
  //   let jump = 3
  //   for(let y = 0, y2 = textCoordinates.height; y < y2; y++) {
  //     for(let x = 0, x2 = textCoordinates.width; x < x2; x++) {
  //       if(textCoordinates.data[jump] > 128) {
  //         let positionX = x + 730;
  //         let positionY = y + 410;
  //         particles.push(new Particle(positionX, positionY, '#000')) //RESOLVER PASSANDO O ARRAY DE PARTICULAS
  //       }
  //       jump += 4;
  //     }
  //   }
  // }, [])
  
  const renderFrame = () => {
    let width = window.innerWidth
    let height = window.innerHeight
    const ctx = canvasRef.current.getContext("2d");

    window.addEventListener('resize', () => {
      width = window.innerWidth
      height = window.innerHeight
    })
    
    window.addEventListener('mousemove', event => {
      mouse.x = event.x
      mouse.y = event.y
    })

    ctx.clearRect(0, 0, (width * 1.5), (height * 1.5));    
    balls.forEach(ball => {
      ball.moveRandom(width, height);
      ball.lineConnections(balls, ball, ctx)
      ball.draw(ctx)
    })

    // particles.forEach(particle => {
    //   particle.draw(ctx)
    //   particle.update(mouse.x, mouse.y, ctx)
    // })
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