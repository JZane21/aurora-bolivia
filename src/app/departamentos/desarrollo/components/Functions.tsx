import React from "react";

function Functions() {
  return (
    <>
      <div className="flex flex-col px-5 space-y-5 py-7">
        <label className="text-[#889CE7] font-semibold text-3xl my-6 w-full text-center">
          ¿Eres nuevo en el equipo?
        </label>
        <label className="text-[#889CE7] font-semibold text-xl my-6 w-full text-center">
          ¿Cúal es tu especialidad?
        </label>
        <div className="flex w-full justify-center">
          <button className="btn text-white bg-purple-600 hover:bg-purple-700 py-3 px-2">
            Manual de Funciones
          </button>
        </div>
      </div>
    </>
  );
}

export default Functions;
