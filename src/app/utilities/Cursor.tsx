'use client';

import { UseEffect, UseRef } from '@/app/modules';

export default function Cursor() {
  const cursorRef = UseRef<HTMLDivElement>(null);

  UseEffect(() => {
    const cursor = cursorRef.current;

    const moveCursor = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
      }
    };

    document.addEventListener('mousemove', moveCursor);
    return () => document.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '1px',
        height: '1px',
        borderRadius: '50%',
        background: 'var(--foreground)',
        boxShadow: '0 0 3rem 2rem var(--foreground)',
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
        transition: '0.1s ease-out',
        opacity: 0.5,
        zIndex: 9999,
      }}
    ></div>
  );
}
