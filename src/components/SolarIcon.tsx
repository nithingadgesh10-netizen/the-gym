import React from 'react';

interface SolarIconProps {
  icon: string;
  className?: string;
  size?: number | string;
}

export const SolarIcon: React.FC<SolarIconProps> = ({
  icon,
  className = '',
  size = 24,
}) => {
  const iconName = icon.startsWith('solar:') ? icon : `solar:${icon}`;

  return (
    <span
      className={`inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <iconify-icon
        icon={iconName}
        width={typeof size === 'number' ? `${size}px` : size}
        height={typeof size === 'number' ? `${size}px` : size}
        inline
      />
    </span>
  );
};
