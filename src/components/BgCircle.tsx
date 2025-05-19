import React from 'react';

interface CircleProps {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  size: string;
  color: string;
}

const Circle: React.FC<CircleProps> = ({ top, bottom, left, right, size, color }) => {
  const style: React.CSSProperties = {
    position: 'fixed',
    top,
    bottom,
    left,
    right,
    width: size,
    height: size,
    background: `radial-gradient(circle, ${color} 0%, transparent 60%)`,
    pointerEvents: 'none',
    zIndex: -1,
  };

  return <div style={style} />;
};

export default Circle;
