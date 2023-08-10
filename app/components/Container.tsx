'use client';

import { twMerge } from "tailwind-merge";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ 
  children, className
}) => {
  return (
    <div className={twMerge(
      `
      max-w-[2520px]
      flex 
      flex-row 
      mx-auto
      justify-between
      items-center 
      `, 
      className
    )}>
      {children}
    </div>
  );  
};

export default Container;
