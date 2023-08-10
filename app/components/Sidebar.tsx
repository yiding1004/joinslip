"use client";

import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";

import { SquaresPlusIcon } from "@heroicons/react/24/outline";
import { TicketIcon } from "@heroicons/react/24/outline";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";

import { useMemo } from "react";
import SidebarItem from "./SidebarItem";
import useSideBar from "../hooks/useSiderBar";

// const boxes = [
//   {
//     id: "rosters",
//     label: "My Rosters",
//     icon: <SquaresPlusIcon />
//   },
//   {
//     id: "entries",
//     label: "My Entries",
//     icon: <TicketIcon />
//   },
//   {
//     id: "settings",
//     label: "Settings",
//     icon: <Cog6ToothIcon />
//   }
// ];

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar = ({ children }: SidebarProps) => {
  const sideBar = useSideBar();
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        label: "My Rosters",
        icon: <SquaresPlusIcon />,
        active: pathname == "/dashboard/rosters",
        href: "/dashboard/rosters",
      },
      {
        label: "My Entries",
        icon: <TicketIcon />,
        active: pathname == "/dashboard/entries",
        href: "/dashboard/entries",
      },
      {
        id: "settings",
        label: "Settings",
        icon: <Cog6ToothIcon />,
        active: pathname == "/dashboard/settings",
        href: "/dashboard/settings",
      },
    ],
    [pathname]
  );

  return (
    <div className="flex h-full">
      <div
        className="
          hidden 
          md:flex 
          flex-col 
          gap-y-2 
          bg-white
          border-r-2 
          border-gray-200
          rounded-sm
          h-[100vh]
          w-[300px] 
          p-2
        "
      >
        <div className="flex flex-col py-14">
          {routes.map((item) => (
            <SidebarItem key={item.label} {...item} />
          ))}
        </div>
      </div>
      {children}
    </div>
  );
};

export default Sidebar;
