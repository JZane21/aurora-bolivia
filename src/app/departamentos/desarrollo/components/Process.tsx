import React from "react";

function Activities() {
  return (
    <>
      <div className="flex flex-col px-5 space-y-5 py-7">
        <label className="text-[#889CE7] font-semibold text-3xl my-6 w-full text-center">
          ¿Qué hacemos?
        </label>
        <label className="text-[#889CE7] font-semibold text-xl my-6 w-full text-center">
          Estas son nuestras 4 principales actividades
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

export default Activities;
