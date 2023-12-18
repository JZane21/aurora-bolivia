"use client";
import React from "react";

function Functions() {
  const pins = [
    { title: "Desarrollador Backend", emoji: "💻" },
    { title: "Desarrollador Frontend", emoji: "🌐" },
    { title: "Ingeniero QA", emoji: "🧪" },
    { title: "DevOps", emoji: "🛠️" },
    { title: "Director de Desarrollo", emoji: "👨‍💼" },
    { title: "Soporte técnico", emoji: "🔧" },
  ];
  const handleOpenFunctions = () => {
    window.open(
      "https://docs.google.com/document/d/19PrcvX5dmEWi4xH_kc_dqQ6RuJnYsxSy3ZC5jRWevoE/edit?usp=drive_link",
      "_blank"
    );
  };
  return (
    <>
      <div className="flex flex-col px-5 space-y-5 py-7">
        <label className="text-[#889CE7] font-semibold text-3xl my-6 w-full text-center">
          ¿Eres nuevo en el equipo?
        </label>
        <label className="text-[#889CE7] font-semibold text-xl my-6 w-full text-center">
          ¿Cúal es tu especialidad?
        </label>
        <div className="flex w-full justify-center space-x-5">
          {pins.map((pin, index) => (
            <div key={index} className="flex items-center border-white border-dashed border p-2 rounded-2xl hover:opacity-30">
              <span className="mr-2">{pin.emoji}</span>
              <p className="text-sm text-white font-medium">{pin.title}</p>
            </div>
          ))}
        </div>
        <div className="flex w-full justify-center">
          <button
            className="btn text-white bg-purple-600 hover:bg-purple-700 py-3 px-2 rounded-lg"
            onClick={handleOpenFunctions}
          >
            Manual de Funciones
          </button>
        </div>
      </div>
    </>
  );
}

export default Functions;
