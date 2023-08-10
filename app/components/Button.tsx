'use client';

import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  medium?: boolean;
  icon?: IconType;
}
const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  medium,
  icon: Icon
}) => {
  return ( 
    <button
      onClick={onClick}
      disabled={disabled}
      className={`         
        relative
        disabled:opacity-70
        disabled:cursor-not-allowed
        px-4
        rounded-md
        whitespace-nowrap
        ${outline ? 'bg-white hover:opacity-80' : 'bg-primary-shade hover:bg-primary-main '}
        ${outline ? 'border-black' : 'border-primary-shade hover:border-primary-main'}
        ${outline ? 'text-black' : 'text-white'}
        transition 
        delay-100 
        duration-200
        w-full
        ${small ? 'py-1' : 'py-2'}
        ${small ? 'text-sm' : 'text-lg'}
        ${small ? 'border' : 'border-2'}
        ${medium && 'text-md w-auto min-w-[125px] !bg-primary-light hover:!bg-primary-shade border-primary-shade text-primary-shade  hover:text-gray-100'}
      `}
    >
      {Icon && (
        <Icon
          size={24}
          className="
            absolute
            left-4
            top-3
          "
        />
      )}
      {label}
    </button>
   );
}
 
export default Button;