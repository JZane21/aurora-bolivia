"use client";
import React from "react";

const Functions = () => {
  return (
    <>
      <div className="flex flex-col px-5 space-y-5 py-7">
        <label className="text-[#889CE7] font-semibold text-2xl my-6 w-full text-center">
          ¿Cúal de estos roles coincide con tu descripción?
        </label>
        <div className="flex w-full justify-center space-x-5">
          {[
            "Evaluador técnico",
            "Especialista en Diagnósticos",
            "Coordinador de Asignación",
            "Especialista en Retroalimentación",
          ].map((text, index) => (
            <div
              key={index}
              className="flex flex-col bg-[#1B1C1E] rounded-3xl border-2 shadow-md text-center justify-center
              items-center w-1/3 p-4 m-4"
            >
              <p className="text-sm text-white font-medium">{text}</p>
            </div>
          ))}
        </div>
        <div className="flex w-full justify-center">
          <a
            href="https://docs.google.com/document/d/1mBD_-5xFtMdj6Lbq35vWER-i3qSEMIfhFTq9U9hkeQw/edit"
            className="btn text-white bg-purple-600 hover:bg-purple-700 py-3 px-2 rounded-lg"
          >
            Manual de Funciones
          </a>
        </div>
      </div>
    </>
  );
};

export default Functions;
