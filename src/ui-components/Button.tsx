import { Link } from 'react-router-dom';
import React, { ReactNode } from 'react';

interface Props {
  type?: 'primary' | 'secondary' | 'transparent' | 'icon';
  children?: ReactNode | undefined;
  to?: string;
  onClick?: () => void;
  isBlock?: boolean;
  disabled?: boolean;
  className?: string;
  href?: string;
  target?: string;
  width?: string;
}

const general = 'disabled:cursor-not-allowed transition-colors duration-200';

const text = 'text-base font-bold font-public-sans';

const padding = {
  primary: 'py-3 px-10 lg:px-14',
  secondary: 'py-3 px-10 lg:px-14',
  transparent: 'py-3 px-10 lg:px-14',
  icon: 'py-3 px-3',
};

const color = {
  primary: 'text-white',
  secondary: 'text-text-gray',
  transparent: 'text-white',
  icon: 'text-white text-2xl',
};

const backgroundColors = {
  primary: 'bg-red-primary hover:opacity-90 focus:opacity-95 disabled:bg-gray-400',
  secondary: 'bg-white',
  transparent: 'bg-transparent',
  icon: 'bg-transparent',
};

const border = {
  primary: 'outline-none rounded border-[1px] border-red-primary focus:ring-2 focus:ring-red-300',
  secondary: 'outline-none rounded border-[1px] border-light-pink focus:ring-1 focus:ring-light-pink',
  transparent: 'outline-none rounded border-[1px] border-light-white focus:ring-1 focus:ring-white',
  icon: 'outline-none rounded-full border-[1px] border-gray-200 focus:ring-1 focus:ring-white',
};

const Button = ({
  type = 'primary',
  children,
  to,
  onClick,
  className = '',
  disabled = false,
  href,
  target,
  isBlock = false,
  width,
}: Props): JSX.Element => {
  const disabledStyle = disabled
    ? 'opacity-50 cursor-not-allowed'
    : 'transition ease-in-out duration-300 hover:cursor-pointer';

  let baseClasses = [general, text, border[type], backgroundColors[type], color[type], padding[type], disabledStyle];

  if (className) {
    baseClasses = [...baseClasses, ...className.split(' ')];
  }
  if (isBlock) {
    baseClasses = [...baseClasses, 'block w-full'];
  }
  if (!!width) {
    baseClasses = [...baseClasses, width];
  }

  if (to) {
    return (
      <Link to={to} target={target} onClick={onClick} className={baseClasses.join(' ')}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target={target} onClick={onClick} className={baseClasses.join(' ')}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses.join(' ')} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
