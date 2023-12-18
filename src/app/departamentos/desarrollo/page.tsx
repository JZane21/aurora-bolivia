"use client";
import Image from "next/image";
import BasicInfo from "./components/BasicInfo";
import publicity from "./assets/_53183329-d281-4d98-beb2-cc637140398a.png";
import Functions from "./components/Functions";
import Activities from "./components/Activities";
import WorkFlow from "./components/WorkFlow";
const DesarrolloPage = () => {
  return (
    <div className="flex flex-col bg-[#141416] rounded-lg shadow-md">
      <Image alt="Super dev team" src={publicity} className="w-full" />
      <h1 className="w-full text-white text-7xl text-center font-bold mt-8">
        Departamento de Desarrollo
      </h1>
      <BasicInfo />
      <Functions />
      <Activities />
      <WorkFlow />
    </div>
  );
};

export default DesarrolloPage;
