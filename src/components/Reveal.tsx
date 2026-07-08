import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface RevealProps {
  children: React.ReactNode | ((isVisible: boolean) => React.ReactNode);
  className?: string;
  threshold?: number;
  style?: React.CSSProperties;
}

export default function Reveal({ children, className = '', threshold = 0.1, style }: RevealProps) {
  const { ref, isVisible } = useScrollReveal(threshold);

  return (
    <div ref={ref} className={`${className} ${isVisible ? 'is-visible' : ''}`} style={style}>
      {typeof children === 'function' ? children(isVisible) : children}
    </div>
  );
}
