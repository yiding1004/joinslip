"use client";

import { ReactNode } from "react";

interface CubeInputProps {
  icon: ReactNode;
  label: string;
  selected?: boolean;
  disabled?: boolean;
  onClick: (value: boolean) => void;
}

const CubeInput: React.FC<CubeInputProps> = ({
  icon: Icon,
  label,
  selected,
  disabled,
  onClick,
}) => {
  return (
    <div
      onClick={() => onClick(!selected)}
      className={`
        rounded-xl
        border-2
        p-4
        flex
        flex-col
        gap-3
        hover:border-primary-main
        transition
        cursor-pointer
        ${selected ? "text-primary-shade border-primary-shade" : "text-black border-neutral-200"}
        ${disabled && 'text-secondary-dark border-secondary-dark hover:border-secondary-dark' }
      `}
    >
      
      <div className="h-12 w-12">{Icon}</div>
      <div className="font-semibold">{label}</div>
    </div>
  );
};

export default CubeInput;
