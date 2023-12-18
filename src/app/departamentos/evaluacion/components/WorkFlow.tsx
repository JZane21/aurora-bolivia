"use client";
import Image from "next/image";
import React from "react";
import bpwin0 from "../assets/bpwin-01.png";
import bpwin1 from "../assets/bpwin-02.png";

const WorkFlow = () => {
  const bp0 = bpwin0;
  const bp1 = bpwin1;
  return (
    <>
      <div className="flex flex-col px-5 space-y-5 py-7">
        <label className="text-[#889CE7] font-semibold text-3xl my-6 w-full text-center">
          ¿Cómo trabajamos?
        </label>
        <label className="text-[#889CE7] font-semibold text-xl my-6 w-full text-center">
          Este es nuestro flujo de trabajo
        </label>
        <div className="flex space-x-5 w-full justify-center">
          <Image src={bp0} width={400} height={400} alt="Un diag BPWin0" />
          <Image src={bp1} width={400} height={400} alt="Un diag BPWin1" />
        </div>
        <div className="flex w-full justify-center space-x-5">
          <a
            href="https://app.diagrams.net/#G1OY9_9LPqJ4iy40u2Tovs7a74_AYfR9nq#%7B%22pageId%22%3A%22w4iiypmFHtrCKbPOdAOd%22%7D"
            className="btn text-white bg-purple-600 hover:bg-purple-700 py-3 px-2 rounded-lg"
          >
            Flujo de trabajo
          </a>
          <a
            href="https://docs.google.com/document/d/1gS2e3rZpt3QvWgSQbMBOpT1tReI0Cn9GbMgz3b4b6n8/edit"
            className="btn text-white bg-purple-600 hover:bg-purple-700 py-3 px-2 rounded-lg"
          >
            Gestión de Riesgos
          </a>
          <a
            href="https://docs.google.com/document/d/1SXhl8LRItfi0hTtYPWIkyI_9jgdbF7YGUxpbyVYXugY/edit"
            className="btn text-white bg-purple-600 hover:bg-purple-700 py-3 px-2 rounded-lg"
          >
            Normativas
          </a>
          <a
            href="https://app.diagrams.net/#G1OY9_9LPqJ4iy40u2Tovs7a74_AYfR9nq"
            className="btn text-white bg-purple-600 hover:bg-purple-700 py-3 px-2 rounded-lg"
          >
            BPWIN 0-1
          </a>
          <a
            href="https://docs.google.com/spreadsheets/d/1ODY9tkNXOwBpJAg60KvwgUw_mwvvcZ3z4DN-6NjkkKY/edit#gid=0"
            className="btn text-white bg-purple-600 hover:bg-purple-700 py-3 px-2 rounded-lg"
          >
            Costos
          </a>
        </div>
        <div>
          <div className="text-[#889CE7] font-bold text-3xl text-center">
            Gestión de Riesgos
          </div>
          <div className="text-white grid grid-cols-3 gap-4 w-full content-start text-center">
            {[
              {
                title: "Problemas de comunicación entre el personal",
                riesgos:
                  "Malentendidos, información incorrecta o incompleta, retrasos en el trabajo por incorrecta manipulación y distribución de la información.",
                mitigacion:
                  "Implementar canales de comunicación claros y eficientes, fomentar un ambiente de trabajo abierto y respetuoso, capacitación en habilidades de comunicación y trabajo en equipo.",
                contingencia:
                  "Revisión y mejora de los canales de comunicación, sesiones de feedback y resolución de conflictos, capacitación adicional en comunicación.",
              },
              {
                title: "Dificultades en la Asignación de Problemas",
                riesgos:
                  "Problemas para asignar los problemas a los técnicos más adecuados debido a la falta de información detallada o a la sobrecarga de trabajo.",
                mitigacion:
                  "Desarrollar una base de datos de habilidades y experiencias de los técnicos, implementar un sistema de seguimiento y gestión de problemas eficiente.",
                contingencia:
                  "Establecer equipos de respaldo y sistemas de revisión interna para redistribuir tareas según la carga de trabajo.",
              },
              {
                title: "Falta de Retroalimentación Efectiva",
                riesgos:
                  "Poca participación o retroalimentación insuficiente por parte de los técnicos, lo que podría afectar la mejora continua.",
                mitigacion:
                  "Establecer canales de retroalimentación claros y accesibles, incentivar y reconocer la participación en el proceso de retroalimentación.",
                contingencia:
                  "Realizar encuestas de satisfacción, entrevistas periódicas con los técnicos, implementar sistemas de recompensas por retroalimentación constructiva.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#1B1C1E] rounded-3xl border-8 border-[#121213] p-4 m-4"
              >
                <div className="text-[18px] text-[#889CE7]">{item.title}</div>
                <div className="text-[13px]">
                  <span className="font-bold">Riesgo:</span>
                  {item.riesgos}
                  <br />
                  <span className="font-bold">Mitigación:</span>
                  {item.mitigacion} <br />
                  <span className="font-bold">Plan de Contigencia:</span>
                  {item.contingencia}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-[#889CE7] font-bold text-3xl text-center">
          Normativas
        </div>
        <div className="text-white flex flex-row gap-4 w-full justify-center text-center">
          <div className="bg-[#1B1C1E] rounded-3xl border-8 border-[#121213] p-4 m-4 w-[300px]">
            <div className="text-[18px] text-[#889CE7]">ISO 25000</div>
            <div className="text-[13px]">
              <span className="font-bold">
                Paso 1 - Identificar Objetivos: Establecer objetivos de
                seguridad y calidad del software que se alineen con los
                objetivos del departamento.
                <br />
              </span>
              <span className="font-bold">
                Paso 2 - Evaluación de Requisitos: Identificar los requisitos
                específicos de seguridad y calidad que deben cumplir los
                sistemas de software evaluados.
                <br />
              </span>
              <span className="font-bold">
                Paso 3 - Selección de Métricas: Definir métricas adecuadas para
                evaluar la seguridad y el buen funcionamiento de los sistemas de
                software.
                <br />
              </span>
            </div>
          </div>
          <div className="bg-[#1B1C1E] rounded-3xl border-8 border-[#121213] p-4 m-4 w-[300px]">
            <div className="text-[18px] text-[#889CE7]">ISO 9001</div>
            <div className="text-[13px]">
              <span className="font-bold">
                Paso 1 - Identificación de Procesos Clave: Identificar los
                procesos clave del departamento y establecer procedimientos para
                mejorar su calidad.
                <br />
              </span>
              <span className="font-bold">
                Paso 2 - Gestión y Mejora Continua: Implementar un sistema de
                gestión de la calidad para asegurar la consistencia en la
                evaluación y mejorar continuamente los procesos.
                <br />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkFlow;
