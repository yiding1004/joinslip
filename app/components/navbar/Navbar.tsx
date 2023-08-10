"use client";

import { SafeUser } from "@/app/types";
import Container from "../Container";
import Logo from "./Logo";
import UserMenu from "./UserMenu";

interface NavbarProps {
  currentUser?: SafeUser | null; 
}

const Navbar: React.FC<NavbarProps> = ({
  currentUser
}) => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container className="relative px-10 gap-3 md:gap-0">
          <Logo />
          <UserMenu currentUser={currentUser}/>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
