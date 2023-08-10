"use client";

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import { useCallback, useState, useEffect, useRef } from "react";
import MenuItem from "./MenuItem";
import useLoginModal from "@/app/hooks/useLoginModal";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useCreateModal from "@/app/hooks/useCreateModal";
import { useRouter } from 'next/navigation';
import { SafeUser } from "@/app/types";
import Button from "../Button";
import { signOut } from "next-auth/react";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const createModal = useCreateModal();

  const [isOpen, setIsOpen] = useState(false);
  const dropDownRef = useRef<HTMLDivElement>(null);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const handleGoToDashboard = () => {
    setIsOpen(false);
    router.push('/dashboard');
  };

  useEffect(() => {
    const handleClickOutside: EventListener = (event) => {
      if (
        dropDownRef.current && isOpen &&
        !dropDownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen, dropDownRef, setIsOpen]);

  return (
    <div className="relative">
      {!currentUser ? (
        <div className="flex gap-1">
          <Button outline label="Login" onClick={loginModal.onOpen} />
          <Button label="Sign Up" onClick={registerModal.onOpen} />
        </div>
      ) : (
        <div className="flex flex-row items-center gap-3">
          <div
          onClick={createModal.onOpen}
            className="
            hidden
            md:block
            text-primary-shade
            border
            rounded-md
            border-primary-shade 
            hover:border-primary-main
            font-semibold
            text-sm 
            py-2 
            px-4 
            cursor-pointer
            transform hover:scale-[105%] transition duration-750
          "
          >
            Create New Roster
          </div>
          <div>
            <div
              onClick={toggleOpen}
              ref={dropDownRef}
              className="
              p-4
              md:py-1
              md:px-2
              border-[1px] 
              md:border-neutral-200 
              flex 
              flex-row 
              items-center 
              gap-3 
              rounded-full 
              cursor-pointer 
              hover:shadow-md 
              transition
            "
            >
              <AiOutlineMenu />
              <div className="hidden md:block">
                <Avatar src={currentUser?.image} />
              </div>
            </div>
            {isOpen && (
              <div
                className="
                absolute
                rounded-xl 
                shadow-md
                w-[40vw]
                md:w-3/4 
                bg-white 
                overflow-hidden 
                right-0 
                top-12 
                text-sm
              "
              >
                <div className="flex flex-col cursor-pointer">
                  <MenuItem
                    onClick={() => router.push('/dashboard')}
                    label="Dashboard"
                  />
                  <MenuItem onClick={() => setIsOpen(false)} label="Account" />
                  <hr />
                  <MenuItem label="Logout" onClick={() => signOut()} />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
