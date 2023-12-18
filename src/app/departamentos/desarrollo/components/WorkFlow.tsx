"use client";
import React from "react";

function WorkFlow() {
  const handleOpenSvg = () => {
    window.open("/departamentos/desarrollo/pages", "_blank");
  };
  const handleOpenRisks = () => {
    window.open(
      "https://docs.google.com/document/d/1JRcL2ReYaBt36hvRSred0dXdRxBAC2ffU4CTI-MatrQ/edit?usp=drive_link",
      "_blank"
    );
  };
  const handleOpenNorms = () => {
    window.open(
      "https://docs.google.com/document/d/17M555Z69uCaxO6UTx4f_dSRbOZG4_R7ki2yjmS53mJk/edit?usp=drive_link",
      "_blank"
    );
  };
  return (
    <>
      <div className="flex flex-col px-5 space-y-5 py-7">
        <label className="text-[#889CE7] font-semibold text-3xl my-6 w-full text-center">
          ¿Cómo trabajamos?
        </label>
        <label className="text-[#889CE7] font-semibold text-xl my-6 w-full text-center">
          Este es nuestro flujo de trabajo
        </label>
        <div className="flex w-full justify-center space-x-5">
          <button
            className="btn text-white bg-purple-600 hover:bg-purple-700 py-3 px-2 rounded-lg"
            onClick={handleOpenSvg}
          >
            Flujo de Trabajo
          </button>
          <button
            className="btn text-white bg-purple-600 hover:bg-purple-700 py-3 px-2 rounded-lg"
            onClick={handleOpenRisks}
          >
            Gestión de Riesgos
          </button>
          <button
            className="btn text-white bg-purple-600 hover:bg-purple-700 py-3 px-2 rounded-lg"
            onClick={handleOpenNorms}
          >
            Normativas
          </button>
        </div>
      </div>
    </>
  );
}

export default WorkFlow;
