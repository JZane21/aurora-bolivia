import React from "react";

const Contact = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex flex-col px-5 space-y-5 py-7 w-full">
        <label className="text-[#889CE7] font-semibold text-2xl my-3 w-full text-center">
          Contacto
        </label>
        <div className="flex flex-col  bg-[#1B1C1E] rounded-3xl border-8 border-[#121213] shadow-md text-center items-center w-1/2 p-4 m-auto">
          <label className="text-[#889CE7] font-semibold text-2xl my-6">
            José Samuel Carrasco Encinas
          </label>
          <label className="text-white font-light">
            Director del Departamento de Evaluación Técnica
          </label>
          <label className="text-white font-light">
            Email: jsce2021@gmail.com
          </label>
        </div>
      </div>
    </div>
  );
};

export default Contact;
