
import React, { useEffect, useRef } from 'react';

const CyberBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas to full screen
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    // Colors for cyber theme
    const colors = ['#9b87f5', '#7E69AB', '#6E59A5', '#1EAEDB', '#33C3F0'];
    
    // Define geometric shapes
    const shapes: any[] = [];
    for (let i = 0; i < 20; i++) {
      shapes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 80 + 40,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * 0.2 + 0.1,
        direction: Math.random() * Math.PI * 2,
        rotation: 0,
        rotationSpeed: (Math.random() - 0.5) * 0.01,
        opacity: Math.random() * 0.2 + 0.05,
        type: Math.floor(Math.random() * 3) // 0: triangle, 1: rectangle, 2: hexagon
      });
    }
    
    // Animation loop
    const render = () => {
      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#1A1F2C');
      gradient.addColorStop(1, '#221F26');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw shapes
      shapes.forEach(shape => {
        ctx.save();
        ctx.globalAlpha = shape.opacity;
        ctx.translate(shape.x, shape.y);
        ctx.rotate(shape.rotation);
        
        // Choose shape type
        if (shape.type === 0) {
          // Triangle
          drawTriangle(ctx, 0, 0, shape.size, shape.color);
        } else if (shape.type === 1) {
          // Rectangle
          drawRectangle(ctx, 0, 0, shape.size * 0.8, shape.size * 1.2, shape.color);
        } else {
          // Hexagon
          drawHexagon(ctx, 0, 0, shape.size / 2, shape.color);
        }
        
        ctx.restore();
        
        // Update position
        shape.x += Math.cos(shape.direction) * shape.speed;
        shape.y += Math.sin(shape.direction) * shape.speed;
        shape.rotation += shape.rotationSpeed;
        
        // Wrap around screen edges
        if (shape.x < -shape.size) shape.x = canvas.width + shape.size;
        if (shape.x > canvas.width + shape.size) shape.x = -shape.size;
        if (shape.y < -shape.size) shape.y = canvas.height + shape.size;
        if (shape.y > canvas.height + shape.size) shape.y = -shape.size;
      });
      
      requestAnimationFrame(render);
    };
    
    // Helper functions to draw shapes
    function drawTriangle(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, color: string) {
      ctx.beginPath();
      ctx.moveTo(x, y - size / 2);
      ctx.lineTo(x - size / 2, y + size / 2);
      ctx.lineTo(x + size / 2, y + size / 2);
      ctx.closePath();
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;
      ctx.stroke();
    }
    
    function drawRectangle(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, color: string) {
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;
      ctx.strokeRect(x - width / 2, y - height / 2, width, height);
    }
    
    function drawHexagon(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, color: string) {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = Math.PI * 2 / 6 * i;
        const pointX = x + size * Math.cos(angle);
        const pointY = y + size * Math.sin(angle);
        
        if (i === 0) {
          ctx.moveTo(pointX, pointY);
        } else {
          ctx.lineTo(pointX, pointY);
        }
      }
      ctx.closePath();
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;
      ctx.stroke();
    }
    
    // Start animation
    render();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
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
