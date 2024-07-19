import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="flex fixed top-0 z-10 w-full justify-between items-center px-8 py-5  bg-[#ffffff] border-y border-solid  border-slate-200 cursor-pointer">
      <div>
        <Image
          src="/assets/logo.png"
          alt="My Image"
          width={200}
          height={200}
          onClick={() => router.push("/")}
        />
      </div>
      <div className="flex justify-center items-center space-x-10">
        <p className="font-medium hover:font-bold" onClick={() => router.push("/")}>Home</p>
        <p className="font-medium hover:font-bold" onClick={() => router.push("/about")}>About</p>
        <p className="font-medium hover:font-bold" onClick={() => router.push("/contact")}>Contact</p>
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
