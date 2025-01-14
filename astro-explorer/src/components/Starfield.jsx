// Starfield.jsx
import React, { useEffect, useRef } from 'react';

const COUNT = 800;
const SPEED = 0.08;

class Star {
 constructor(x = 0, y = 0, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.xPrev = x;
    this.yPrev = y;
 }

 update(width, height, speed) {
    this.xPrev = this.x;
    this.yPrev = this.y;
    this.z += speed * 0.0675;
    this.x += this.x * (speed * 0.0225) * this.z;
    this.y += this.y * (speed * 0.0225) * this.z;
    if (
      this.x > width / 2 ||
      this.x < -width / 2 ||
      this.y > height / 2 ||
      this.y < -height / 2
    ) {
      this.x = Math.random() * width - width / 2;
      this.y = Math.random() * height - height / 2;
      this.xPrev = this.x;
      this.yPrev = this.y;
      this.z = 0;
    }
 }

 draw(ctx) {
    ctx.lineWidth = this.z;
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.xPrev, this.yPrev);
    ctx.stroke();
 }
}

const Starfield = () => {
 const canvasRef = useRef(null);
 const containerRef = useRef(null);
 let stars = Array.from({ length: COUNT }, () => new Star(0, 0, 0));
 let rafId = 0;

 useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const container = containerRef.current;
    const resizeObserver = new ResizeObserver(setup);

    function setup() {
      const { clientWidth: width, clientHeight: height } = container;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);

      for (const star of stars) {
        star.x = Math.random() * width - width / 2;
        star.y = Math.random() * height - height / 2;
        star.z = 0;
      }

      ctx.translate(width / 2, height / 2);
      ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
      ctx.strokeStyle = 'white';
      rafId = requestAnimationFrame(frame);
    }

    function frame() {
      const { clientWidth: width, clientHeight: height } = container;

      for (const star of stars) {
        star.update(width, height, SPEED);
        star.draw(ctx);
      }

      ctx.fillRect(-width / 2, -height / 2, width, height);
      rafId = requestAnimationFrame(frame);
    }

    setup();
    resizeObserver.observe(container);

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
    };
 }, []);

 return (
    <div id="starfield" className="absolute inset-0" ref={containerRef}>
      <canvas id="starfield-canvas" ref={canvasRef}></canvas>
    </div>
 );
};

export default Starfield;