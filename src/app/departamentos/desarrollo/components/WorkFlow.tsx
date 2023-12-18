"use client"
import React from "react";

function WorkFlow() {

  const handleOpenNewTab = () => {
    window.open("/departamentos/desarrollo/pages", "_blank")
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
        <div className="flex w-full justify-center">
          <button className="btn text-white bg-purple-600 hover:bg-purple-700 py-3 px-2" onClick={handleOpenNewTab}>
            Flujo de Trabajo
          </button>
        </div>
      </div>
    </>
  );
}

export default WorkFlow;
