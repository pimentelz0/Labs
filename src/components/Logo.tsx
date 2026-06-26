import React from 'react';

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  showText?: boolean;
  textColor?: string;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = 40,
  showText = true,
  textColor = 'text-white',
  className = '',
  ...props
}) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Brand SVG Icon */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:scale-105"
        {...props}
        id="hefestus-logo-svg"
      >
        {/* Geometric H shape filled with brand green #10b981 */}
        <path
          d="M 24,24 C 24,21.8 25.8,20 28,20 L 36,20 C 38.2,20 40,21.8 40,24 L 40,44 L 60,44 L 60,24 C 60,21.8 61.8,20 64,20 L 72,20 C 74.2,20 76,21.8 76,24 L 76,76 C 76,78.2 74.2,80 72,80 L 64,80 C 61.8,80 60,78.2 60,76 L 60,56 L 40,56 L 40,76 C 40,78.2 38.2,80 36,80 L 28,80 C 25.8,80 24,78.2 24,76 Z"
          fill="#10b981"
          stroke="none"
        />
      </svg>

      {/* Styled Wordmark */}
      {showText && (
        <span className={`font-sans text-lg font-bold tracking-widest text-white`} id="hefestus-logo-text">
          HEFESTUS
        </span>
      )}
    </div>
  );
};
