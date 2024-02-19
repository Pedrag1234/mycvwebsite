'use client';
import React, { useState } from 'react';

interface BadgeProps {
  title: string;
  color: string;
}

function ColorLuminance(hex: string, lum: number) {
  // validate hex string
  hex = String(hex).replace(/[^0-9a-f]/gi, '');
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  lum = lum || 0;

  // convert to decimal and change luminosity
  var rgb = '#',
    c,
    i;
  for (i = 0; i < 3; i++) {
    c = parseInt(hex.substr(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
    rgb += ('00' + c).substr(c.length);
  }

  return rgb;
}

const Badge: React.FC<BadgeProps> = ({ title, color }) => {
  const [isHovered, setIsHovered] = useState(false);

  const hoverColor = ColorLuminance(color, 0.1);

  const badgeStyle = {
    backgroundColor: isHovered ? hoverColor : color,
    transition: 'background-color 0.3s ease',
    borderRadius: '16px', // Adjust the value based on your preference
    padding: '4px 8px', // Adjust the padding for better appearance
    display: 'flex', // Ensures that the span behaves like a block element
    cursor: 'pointer', // Change cursor on hover
    color: 'white', // Set text color to white
    textShadow: '1px 1px 1px black', // Add a black border around the text
    alignItems: 'center',
  };

  const circleStyle = {
    width: '8px', // Adjust the circle size
    height: '8px', // Adjust the circle size
    backgroundColor: 'white', // Circle color
    borderRadius: '50%', // Make it a circle
    marginRight: '4px', // Adjust the distance between circle and text
  };

  return (
    <span
      className="badge m-1 text-xs"
      style={badgeStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span style={circleStyle}></span>
      {title}
    </span>
  );
};

export default Badge;
