import React from 'react';

interface PlaceholderProps {
  text: string;
  width: number;
  height: number;
  bgColor?: string;
  textColor?: string;
}

const PlaceholderImage: React.FC<PlaceholderProps> = ({
  text,
  width,
  height,
  bgColor = '#3B0764',
  textColor = '#ffffff'
}) => {
  // Create a data URL for the SVG
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${bgColor}" />
      <text 
        x="50%" 
        y="50%" 
        font-family="Arial, sans-serif" 
        font-size="24" 
        text-anchor="middle" 
        dominant-baseline="middle" 
        fill="${textColor}"
      >
        ${text}
      </text>
    </svg>
  `;
  
  const dataUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
  
  return <img src={dataUrl} alt={text} width={width} height={height} />;
};

export default PlaceholderImage;
