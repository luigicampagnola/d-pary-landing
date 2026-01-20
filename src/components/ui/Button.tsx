'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  disabled = false,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary: 'bg-navy-primary text-white hover:bg-midnight-blue focus:ring-navy-primary dark:bg-rich-gold dark:text-midnight-navy dark:hover:bg-champagne-gold',
    secondary: 'bg-mint-green text-midnight-navy hover:bg-opacity-90 focus:ring-mint-green',
    outline: 'border-2 border-navy-primary text-navy-primary hover:bg-navy-primary hover:text-white dark:border-rich-gold dark:text-rich-gold dark:hover:bg-rich-gold dark:hover:text-midnight-navy',
    gold: 'bg-rich-gold text-midnight-navy hover:bg-champagne-gold focus:ring-rich-gold',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;

  const MotionComponent = href ? motion.a : motion.button;

  return (
    <MotionComponent
      href={href}
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      className={combinedStyles}
    >
      {children}
    </MotionComponent>
  );
}
