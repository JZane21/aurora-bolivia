"use client";

import React from "react";

const BasicInfo = () => {
  return (
    <div className="flex flex-col px-5 space-y-5 py-7">
      <div className="flex flex-row w-full">
        <div className="flex flex-col  bg-[#1B1C1E] rounded-3xl border-8 border-[#121213] shadow-md text-center items-center w-1/3 p-4 m-4">
          <label className="text-[#889CE7] font-semibold text-2xl my-6">
            ¿Quiénes Somos?
          </label>
          <label className="text-white font-light">
            {" "}
            En el Departamento de Evaluación Técnica de Aurora, conformamos un
            equipo de profesionales altamente capacitados en la industria
            tecnológica. Nuestra responsabilidad primordial radica en recibir y
            procesar las solicitudes de profesionales de distintos sectores,
            especialmente aquellos enfrentando obstáculos al integrar hardware y
            software en sus empresas.
          </label>
        </div>
        <div className="flex flex-col  bg-[#1B1C1E] rounded-3xl border-8 border-[#121213] shadow-md text-center items-center w-1/3 p-4 m-4">
          <label className="text-[#889CE7] font-semibold text-2xl my-6">
            Misión
          </label>
          <label className="text-white font-light">
            {" "}
            En el Departamento de Evaluación de Aurora, nos comprometemos a
            garantizar que todas las solicitudes de servicios hacia nuestra
            empresa sean analizadas exhaustivamente. Nuestra labor se centra en
            detallar minuciosamente los problemas planteados para documentarlos
            de manera precisa y efectiva, facilitando así su entrega a los
            profesionales encargados de ofrecer soluciones técnicas.
          </label>
        </div>
        <div className="flex flex-col  bg-[#1B1C1E] rounded-3xl border-8 border-[#121213] shadow-md text-center items-center w-1/3 p-4 m-4">
          <label className="text-[#889CE7] font-semibold text-2xl my-6">
            Visión
          </label>
          <label className="text-white font-light">
            {" "}
            Como parte integral del equipo de evaluación, nuestra visión es
            consolidarnos como un cuerpo técnico altamente eficiente. Buscamos
            procesar las solicitudes de nuestros clientes con la máxima
            eficiencia y eficacia, minimizando los obstáculos y optimizando la
            respuesta de nuestra empresa a sus necesidades.
          </label>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <a
          href="https://docs.google.com/document/d/1_Zi779hpsHF-x5mZEx7VVcfBbGw5oOEt5zr-QqnXKfo/edit"
          className="btn text-white bg-purple-600 hover:bg-purple-700 py-3 px-2 rounded-lg"
        >
          Fase de Inicio
        </a>
      </div>
    </div>
  );
};

export default BasicInfo;
