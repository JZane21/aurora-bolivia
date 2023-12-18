"use client";
import React from "react";
import Image from "next/image";
import { NavbarOptions } from "../data/navbarOptions";
import LinkNavBar from "./LinkNavBar";
import loguito from "../assets/loguito.jpeg";
interface Props {
  children: React.ReactNode;
}

const PrincipalLayoutStructure = ({ children }: Props) => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="bg-[#383a69] w-full px-4 py-2 flex flex-row shadow-blue-950">
        <Image
          src={loguito}
          alt="Aqui va una imagen chida :D"
          className="w-1/6"
        />
        <div
          className="flex flex-row w-full items-end justify-between"
          id="navbar-multi-level"
        >
          <ul className="flex flex-row font-medium p-4  border-gray-100 rounded-lg ">
            {NavbarOptions.map((item, index) => (
              <LinkNavBar key={index} refLink={item.ref} text={item.text} />
            ))}
          </ul>
        </div>
      </div>
      <div className="w-full h-full bg-[#F4F0ED]">{children}</div>
    </div>
  );
};

export default PrincipalLayoutStructure;
