import { ReactNode } from "react";
import Link from 'next/link';
import { twMerge } from "tailwind-merge";

interface SidebarItemProps {
  label: string;
  icon: ReactNode;
  active: boolean;
  href: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ 
  label, 
  icon: Icon, 
  active, 
  href 
}) => {
  return (
    <Link href={href}>
      <div className={twMerge(`
        rounded-lg 
        h-fit 
        w-full 
        flex 
        gap-4 
        pl-12 
        pr-4 
        py-4 
        mt-2 
        items-center 
        justify-start 
        cursor-pointer 
        hover:border 
        hover:border-primary-main`, 
        active && "text-primary-main"
      )
      }>
        <div className="h-10 w-10">{Icon}</div>
        <div className="text-lg">{label}</div>
      </div>
    </Link>
  );
};

export default SidebarItem;
