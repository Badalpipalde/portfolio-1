import React, { useEffect, useState, useRef } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

export function CustomCursor() {
  const prefersReducedMotion = useReducedMotion();
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [ringPosition, setRingPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const requestRef = useRef();

  useEffect(() => {
    // Only enable on desktop with fine pointer
    if (prefersReducedMotion || typeof window === 'undefined') return;
    if (window.matchMedia('(hover: none) or (pointer: coarse)').matches) return;

    let targetX = -100;
    let targetY = -100;
    let currentRingX = -100;
    let currentRingY = -100;

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setPosition({ x: targetX, y: targetY });
      if (!isVisible) setIsVisible(true);

      // Check if hovering interactive element
      const target = e.target;
      const isInteractive = Boolean(
        target.closest('a, button, input, textarea, select, [role="button"], .interactive')
      );
      setIsHovered(isInteractive);
    };

    const handleMouseDown = () => setIsActive(true);
    const handleMouseUp = () => setIsActive(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Smooth lerp follower for the ring
    const animateRing = () => {
      currentRingX += (targetX - currentRingX) * 0.18;
      currentRingY += (targetY - currentRingY) * 0.18;
      setRingPosition({ x: currentRingX, y: currentRingY });
      requestRef.current = requestAnimationFrame(animateRing);
    };

    requestRef.current = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [prefersReducedMotion, isVisible]);

  if (prefersReducedMotion || !isVisible) return null;

  return (
    <>
      <div
        className={`custom-cursor ${isHovered ? 'custom-cursor--hovered' : ''} ${
          isActive ? 'custom-cursor--active' : ''
        }`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
        aria-hidden="true"
      >
        <div className="custom-cursor__dot" />
      </div>
      <div
        className="custom-cursor__ring"
        style={{
          transform: `translate3d(${ringPosition.x}px, ${ringPosition.y}px, 0)`,
        }}
        aria-hidden="true"
      />
    </>
  );
}
