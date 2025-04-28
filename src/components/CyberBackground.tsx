
import React, { useEffect, useRef } from 'react';

const CyberBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    const shapes: any[] = [];
    const numShapes = 60; // More shapes for complexity
    
    // Create geometric shapes with varying properties
    for (let i = 0; i < numShapes; i++) {
      shapes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 120 + 30,
        opacity: Math.random() * 0.15 + 0.05,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.01,
        vertices: Math.floor(Math.random() * 4) + 3, // 3 to 6 vertices
        lineWidth: Math.random() * 2 + 0.5,
        moveSpeed: Math.random() * 0.4 + 0.1,
        direction: Math.random() * Math.PI * 2,
        pulse: Math.random() * 0.02 + 0.005,
        pulseOffset: Math.random() * Math.PI * 2
      });
    }
    
    const drawShape = (ctx: CanvasRenderingContext2D, shape: any, time: number) => {
      // Apply subtle pulsing effect
      const pulsingOpacity = shape.opacity * (0.8 + 0.2 * Math.sin(time * shape.pulse + shape.pulseOffset));
      
      ctx.beginPath();
      ctx.strokeStyle = `rgba(255, 255, 255, ${pulsingOpacity})`;
      ctx.lineWidth = shape.lineWidth;
      
      for (let i = 0; i <= shape.vertices; i++) {
        const angle = (i * 2 * Math.PI / shape.vertices) + shape.rotation;
        const x = shape.x + shape.size * Math.cos(angle);
        const y = shape.y + shape.size * Math.sin(angle);
        
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      
      ctx.closePath();
      ctx.stroke();
      
      // Add connecting lines between shapes occasionally
      if (Math.random() < 0.2) {
        const nearestShape = shapes.find(s => 
          s !== shape && 
          Math.hypot(s.x - shape.x, s.y - shape.y) < shape.size * 3
        );
        
        if (nearestShape) {
          ctx.beginPath();
          ctx.moveTo(shape.x, shape.y);
          ctx.lineTo(nearestShape.x, nearestShape.y);
          ctx.strokeStyle = `rgba(255, 255, 255, ${pulsingOpacity * 0.5})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    };
    
    let animationFrameId: number;
    let startTime = Date.now();
    
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const currentTime = (Date.now() - startTime) / 1000;
      
      // Update and draw shapes
      shapes.forEach(shape => {
        shape.rotation += shape.rotationSpeed;
        shape.x += Math.cos(shape.direction) * shape.moveSpeed;
        shape.y += Math.sin(shape.direction) * shape.moveSpeed;
        
        // Wrap around screen edges
        if (shape.x < -shape.size) shape.x = canvas.width + shape.size;
        if (shape.x > canvas.width + shape.size) shape.x = -shape.size;
        if (shape.y < -shape.size) shape.y = canvas.height + shape.size;
        if (shape.y > canvas.height + shape.size) shape.y = -shape.size;
        
        drawShape(ctx, shape, currentTime);
      });
      
      animationFrameId = requestAnimationFrame(render);
    };
    
    render();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default CyberBackground;
