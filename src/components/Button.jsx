import React from 'react';
import { MagneticButton } from './MagneticButton';

export function Button({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'ghost'
  size = 'md',        // 'sm' | 'md' | 'lg'
  iconLeft,
  iconRight,
  as: Component = 'button',
  href,
  onClick,
  className = '',
  disabled = false,
  isMagnetic = false,
  ...props
}) {
  const buttonClass = `btn btn--${variant} btn--${size} ${disabled ? 'btn--disabled' : ''} ${className}`;

  const content = (
    <Component
      className={buttonClass}
      href={href}
      onClick={disabled ? undefined : onClick}
      disabled={Component === 'button' ? disabled : undefined}
      aria-disabled={disabled}
      {...props}
    >
      {iconLeft && <span className="btn__icon btn__icon--left">{iconLeft}</span>}
      <span className="btn__text">{children}</span>
      {iconRight && <span className="btn__icon btn__icon--right">{iconRight}</span>}
    </Component>
  );

  if (isMagnetic && !disabled) {
    return <MagneticButton>{content}</MagneticButton>;
  }

  return content;
}
