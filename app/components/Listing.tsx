"use client";

import Link from "next/link";

import { DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";

interface ListingProps {
  id: string;
  userId: string
  title: string;
  description: string;
  newMemberAllowed: boolean;
  memberEditable: boolean;
  memberNumber: number;
}

const Listing: React.FC<ListingProps> = ({
  id,
  title,
  description,
  memberNumber,
}) => {
  return (
    <div className="flex m-1 p-6 rounded shadow hover:bg-gray-50 cursor-pointer relative items-center border transition delay-75 duration-100">
      <Link className="flex flex-grow" href={`/dashboard/rosters/${id}`}>
        <div className="flex flex-col max-w-[80%]">
          <span className="text-black font-semibold break-all text-xl line-clamp-1">
            {title}
          </span>
          <span className="hidden sm:flex text-xs break-all text-gray-500 line-clamp-1 md:line-clamp-2 lg:line-clamp-3">
            {description}
          </span>
          <span className="text-xs text-gray-500 pt-2">
            {memberNumber} Members
          </span>
        </div>
      </Link>
      <div className="flex">
        <div className="h-12 w-12 p-2 rounded-full hover:text-white hover:bg-primary-main">
          <DocumentDuplicateIcon />
        </div>
        <div className="h-12 w-12 p-2 rounded-full hover:text-white hover:bg-red-400">
          <TrashIcon />
        </div>
      </div>
    </div>
  );
};

export default Listing;
