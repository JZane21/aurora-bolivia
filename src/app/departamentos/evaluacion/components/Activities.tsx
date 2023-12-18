"use client";

import React from "react";

const Activities = () => {
  return (
    <div className="flex flex-col px-5 space-y-5 py-7">
      <label className="text-[#889CE7] font-semibold text-2xl my-6 w-full text-center">
        Nuestras actividades
      </label>
      <div className="flex flex-row w-full flex-wrap justify-center">
        <div className="flex flex-col  bg-[#1B1C1E] rounded-3xl border-8 border-[#121213] shadow-md text-center items-center w-1/3 p-4 m-4">
          <label className="text-[#889CE7] font-semibold text-2xl my-6">
            Obtención y verificación de los datos del cliente
          </label>
          <label className="text-white font-light">
            Este proceso tiene como objetivo principal obtener datos precisos y
            completos del cliente, validando su autenticidad y utilidad para su
            uso en la prestación de servicios, elaboración de estrategias
            comerciales o cualquier actividad donde la información del cliente
            sea relevante. Asimismo, busca garantizar la integridad de los
            datos, su actualización constante y su idoneidad para respaldar las
            decisiones y acciones empresariales.
          </label>
        </div>
        <div className="flex flex-col  bg-[#1B1C1E] rounded-3xl border-8 border-[#121213] shadow-md text-center items-center w-1/3 p-4 m-4">
          <label className="text-[#889CE7] font-semibold text-2xl my-6">
            Análisis de los problemas dentro de la solicitud
          </label>
          <label className="text-white font-light">
            Su objetivo principal es comprender a fondo los desafíos o
            inconvenientes reportados por el cliente, para posteriormente
            categorizarlos, priorizarlos y proporcionar una base sólida para su
            resolución. Este análisis busca determinar la naturaleza precisa de
            los problemas, facilitando la implementación de soluciones adecuadas
            y efectivas que satisfagan las necesidades del cliente y mejoren su
            experiencia.
          </label>
        </div>

        <div className="flex flex-col  bg-[#1B1C1E] rounded-3xl border-8 border-[#121213] shadow-md text-center items-center w-1/3 p-4 m-4">
          <label className="text-[#889CE7] font-semibold text-2xl my-6">
            Análisis de los resultados que se esperan obtener al resolver los
            problemas
          </label>
          <label className="text-white font-light">
            Anticipar y definir claramente los resultados esperados tras la
            resolución de los problemas planteados por el cliente. Busca
            establecer metas claras y medibles, identificar los beneficios
            esperados, y servir como guía para garantizar que las soluciones
            implementadas satisfagan las necesidades y expectativas del cliente.
          </label>
        </div>

        <div className="flex flex-col  bg-[#1B1C1E] rounded-3xl border-8 border-[#121213] shadow-md text-center items-center w-1/3 p-4 m-4">
          <label className="text-[#889CE7] font-semibold text-2xl my-6">
            Determinar los problemas generales y específicos
          </label>
          <label className="text-white font-light">
            Realizar un análisis exhaustivo para identificar tanto los problemas
            amplios que tienen un impacto general, como los problemas más
            específicos que pueden ser más focalizados. Esto permite comprender
            integralmente los desafíos presentes en un sistema, facilitando así
            la creación de estrategias efectivas para su resolución y mejora.
          </label>
        </div>

        <div className="flex flex-col  bg-[#1B1C1E] rounded-3xl border-8 border-[#121213] shadow-md text-center items-center w-1/3 p-4 m-4">
          <label className="text-[#889CE7] font-semibold text-2xl my-6">
            Subdividir los problemas de la solicitud en 2 áreas distintas
          </label>
          <label className="text-white font-light">
            Clasificar de manera precisa y separar los problemas identificados
            por los clientes en dos categorías fundamentales: hardware y
            software. Esto facilita una comprensión más clara y una gestión más
            efectiva al abordar las necesidades técnicas específicas de cada
            área, permitiendo una resolución más enfocada y eficiente de los
            problemas presentados por los clientes.
          </label>
        </div>

        <div className="flex flex-col  bg-[#1B1C1E] rounded-3xl border-8 border-[#121213] shadow-md text-center items-center w-1/3 p-4 m-4">
          <label className="text-[#889CE7] font-semibold text-2xl my-6">
            Listar y Evaluar los posibles candidatos
          </label>
          <label className="text-white font-light">
            Crear una lista exhaustiva de posibles candidatos o soluciones
            disponibles, seguido por una evaluación minuciosa de sus
            capacidades, experiencia e idoneidad para resolver los problemas
            identificados. Busca identificar a los profesionales o entidades más
            adecuados que puedan ofrecer soluciones efectivas y satisfactorias
            para los problemas en cuestión
          </label>
        </div>

        <div className="flex flex-col  bg-[#1B1C1E] rounded-3xl border-8 border-[#121213] shadow-md text-center items-center w-1/3 p-4 m-4">
          <label className="text-[#889CE7] font-semibold text-2xl my-6">
            Elaboración del documento final
          </label>
          <label className="text-white font-light">
            Documentar de manera detallada y estructurada los problemas
            identificados, así como los resultados o mejoras anticipadas que el
            cliente espera obtener al resolver estos problemas. El documento
            sirve como guía para comprender los desafíos presentes y las
            expectativas del cliente, facilitando así el desarrollo de
            soluciones efectivas y la comunicación clara entre las partes
            involucradas.
          </label>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <a
          href="https://docs.google.com/document/d/1wQqRN79D07Eo64y57iS3KTWfZpdKd8U0R4dFGxeF7Mk/edit#heading=h.g932sok5ksbs"
          className="btn text-white bg-purple-600 hover:bg-purple-700 py-3 px-2 rounded-lg"
        >
          Manual de Actividades
        </a>
      </div>
    </div>
  );
};

export default Activities;
