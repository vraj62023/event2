"use client"; // Important in Next.js 13/14 App Router

import { useEffect } from 'react';

const AlienFlyer = () => {
  useEffect(() => {
    const moveAlien = () => {
      const alien = document.getElementById('alien');
      if (!alien) return;

      const alienSize = 100;
      const margin = 20;

      const screenW = window.innerWidth;
      const screenH = window.innerHeight;

      const randX = Math.random() * (screenW - alienSize - margin * 2) + margin;
      const randY = Math.random() * (screenH - alienSize - margin * 2) + margin;

      const rotate = Math.random() * 180;
      const opacity = Math.random();

      alien.style.transform = `translate(${randX}px, ${randY}px) rotate(${rotate}deg)`;
      alien.style.opacity = opacity;
    };

    const interval = setInterval(moveAlien, 3000);
    moveAlien();

    return () => clearInterval(interval);
  }, []);

  return null;
};

export default AlienFlyer;
