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
        id="capylabs-logo-svg"
      >
        <defs>
          <linearGradient id="capyGreenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
        </defs>

        {/* The White "C" shape (3/4 of a ring) */}
        <path
          d="M 50,18 A 32,32 0 1 0 82,50 L 66,50 A 16,16 0 1 1 50,34 Z"
          fill="#FFFFFF"
          stroke="none"
        />

        {/* The Leaf/Rounded-Square shape in the top-right quadrant */}
        {/* Top-right quadrant bounded by x=50..82, y=18..50.
            We position it slightly offset to create empty whitespace margin */}
        <path
          d="M 56,18 H 68 C 75.7,18 82,24.3 82,32 V 34 C 82,39.5 77.5,44 72,44 H 56 V 18 Z"
          fill="url(#capyGreenGradient)"
          stroke="none"
        />
      </svg>

      {/* Styled Wordmark */}
      {showText && (
        <span className={`font-sans text-xl font-bold tracking-tight ${textColor}`} id="capylabs-logo-text">
          Capy <span className="text-emerald-500">Labs</span>
        </span>
      )}
    </div>
  );
};
