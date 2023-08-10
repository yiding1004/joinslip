"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between">
      <Image
        alt="Logo-Icon"
        className="md:hidden cursor-pointer"
        height="32"
        width="32"
        src="/images/logoIcon.png"
      />
      <Image
        alt="Logo"
        className="hidden md:block cursor-pointer"
        height="90"
        width="90"
        src="/images/logo.png"
      />
    </div>
  );
};

export default Logo;
