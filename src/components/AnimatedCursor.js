'use client';

import { useEffect, useRef } from 'react';

export default function AnimatedCursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const posRef = useRef({ x: 0, y: 0 });
  const dotPosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    let rafId;

    const onMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      dot.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
    };

    const lerp = (a, b, t) => a + (b - a) * t;

    const animate = () => {
      dotPosRef.current.x = lerp(dotPosRef.current.x, posRef.current.x, 0.12);
      dotPosRef.current.y = lerp(dotPosRef.current.y, posRef.current.y, 0.12);
      cursor.style.transform = `translate(${dotPosRef.current.x - 20}px, ${dotPosRef.current.y - 20}px)`;
      rafId = requestAnimationFrame(animate);
    };

    const onEnter = () => {
      cursor.style.width = '48px';
      cursor.style.height = '48px';
      cursor.style.borderColor = '#1565C0';
      cursor.style.background = 'rgba(21,101,192,0.1)';
    };
    const onLeave = () => {
      cursor.style.width = '40px';
      cursor.style.height = '40px';
      cursor.style.borderColor = '#0d2d5e';
      cursor.style.background = 'transparent';
    };

    document.addEventListener('mousemove', onMove);
    document.querySelectorAll('a, button, [role="button"]').forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    rafId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Ring cursor (trailing) */}
      <div ref={cursorRef} id="custom-cursor-ring" />
      {/* Dot cursor (instant) */}
      <div ref={dotRef} id="custom-cursor-dot" />
    </>
  );
}
