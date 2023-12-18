"use client";
import Image from "next/image";
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
  const handleOpenBPWIN01 = () => {
    window.open(
      "https://drive.google.com/file/d/1NUXevcpwV_-0wlbLq9mFHSEncK-Wk7h3/view?usp=drive_link",
      "_blank"
    );
  };
  const handleOpenCosts = () => {
    window.open(
      "https://docs.google.com/spreadsheets/d/1_0cMZCSUoYWVubPnLA_pofmmz2zG1QN-CCB9yBW7AZU/edit?usp=drive_link",
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
        <div className="flex space-x-5 w-full justify-center">
          <Image src={"/BPwin0.png"} height={400} alt="Un diag BPWin0 :D" />
          <Image src={"/BPwin1.png"} height={400} alt="Un diag BPWin1 :D" />
        </div>
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
          <button
            className="btn text-white bg-purple-600 hover:bg-purple-700 py-3 px-2 rounded-lg"
            onClick={handleOpenBPWIN01}
          >
            BPWIN 0-1
          </button>
          <button
            className="btn text-white bg-purple-600 hover:bg-purple-700 py-3 px-2 rounded-lg"
            onClick={handleOpenCosts}
          >
            Costos
          </button>
        </div>
        <div>
          <div className="text-[#889CE7] font-bold text-3xl text-center">
            Gestión de Riesgos
          </div>
          <div className="text-white grid grid-cols-3 gap-4 w-full content-start text-center">
            <div className="bg-[#1B1C1E] rounded-3xl border-8 border-[#121213] p-4 m-4">
              <div className="text-[18px] text-[#889CE7]">
                Problemas de comunicación entre personas a quien supervisa
              </div>
              <div className="text-[13px]">
                <span className="font-bold">Riesgo:</span> Malentendidos,
                información incorrecta o incompleta, retrasos en el trabajo.{" "}
                <br />
                <span className="font-bold">Mitigación:</span> Implementar
                canales de comunicación claros y eficientes, fomentar un
                ambiente de trabajo abierto y respetuoso, capacitación en
                habilidades de comunicación. <br />
                <span className="font-bold">Plan de Contigencia:</span> Revisión
                y mejora de los canales de comunicación, sesiones de feedback y
                resolución de conflictos, capacitación adicional en
                comunicación.
              </div>
            </div>
            <div className="bg-[#1B1C1E] rounded-3xl border-8 border-[#121213] p-4 m-4">
              <div className="text-[18px] text-[#889CE7]">
                Problemas de comunicación entre personas que lo supervisan
              </div>
              <div className="text-[13px]">
                <span className="font-bold">Riesgo:</span> Instrucciones
                contradictorias, confusión, retrasos en el trabajo.
                <br />
                <span className="font-bold">Mitigación:</span> Establecer una
                jerarquía clara y canales de comunicación, fomentar la
                transparencia y la colaboración entre los supervisores.
                <br />
                <span className="font-bold">Plan de contingencia:</span>{" "}
                Revisión y mejora de los canales de comunicación, reuniones de
                coordinación entre supervisores, clarificación de roles y
                responsabilidades.
              </div>
            </div>

            <div className="bg-[#1B1C1E] rounded-3xl border-8 border-[#121213] p-4 m-4">
              <div className="text-[18px] text-[#889CE7]">
                No cumplir con los plazos de entrega
              </div>
              <div className="text-[13px]">
                <span className="font-bold">Riesgo:</span> Retrasos en el
                proyecto, insatisfacción del cliente, pérdida de confianza.
                <br />
                <span className="font-bold">Mitigación:</span>
                Planificación eficaz del tiempo y los recursos, seguimiento
                regular del progreso, asignación de tareas de acuerdo a las
                habilidades del equipo.
                <br />
                <span className="font-bold">Plan de contingencia:</span>
                Revisión y ajuste de los plazos y/o recursos, implementación de
                horas extras o asistencia adicional si es necesario,
                comunicación transparente con el cliente sobre los retrasos.
                <br />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="text-[#889CE7] font-bold text-3xl text-center">
            Herramientas
          </div>
          <div className="text-white grid grid-cols-4 gap-4 w-full content-start text-center">
            <div className="bg-[#1B1C1E] rounded-3xl border-8 border-[#121213] p-4 m-4">
              <div className="text-[18px] text-[#889CE7]">VSCode</div>
              <div className="text-[13px]">
                Visual Studio Code es un editor de código fuente desarrollado
                por Microsoft. Es gratuito, de código abierto y altamente
                personalizable. VSCode es conocido por su rendimiento, interfaz
                de usuario intuitiva y una amplia variedad de extensiones
                disponibles en el mercado. Es compatible con numerosos lenguajes
                de programación y ofrece herramientas integradas para la
                depuración, control de versiones y otras tareas de desarrollo.
              </div>
            </div>
            <div className="bg-[#1B1C1E] rounded-3xl border-8 border-[#121213] p-4 m-4">
              <div className="text-[18px] text-[#889CE7]">NextJS</div>
              <div className="text-[13px]">
                Next.js es un marco de desarrollo web de React de código abierto
                que facilita la creación de aplicaciones web modernas y
                eficientes. Proporciona características como el rendimiento
                optimizado, el enrutamiento fácil de página a página y la
                posibilidad de crear aplicaciones estáticas o dinámicas. Next.js
                simplifica el desarrollo al integrar React con características
                como la representación del lado del servidor y la generación de
                sitios estáticos.
              </div>
            </div>
            <div className="bg-[#1B1C1E] rounded-3xl border-8 border-[#121213] p-4 m-4">
              <div className="text-[18px] text-[#889CE7]">NestJs</div>
              <div className="text-[13px]">
                Nest.js es un marco de desarrollo para la construcción de
                aplicaciones del lado del servidor con Node.js. Está construido
                con TypeScript y adopta una arquitectura modular y escalable
                basada en módulos. Nest.js facilita la creación de API RESTful y
                aplicaciones en tiempo real, proporcionando una estructura
                organizada, inyección de dependencias y otras características
                inspiradas en Angular.
              </div>
            </div>
            <div className="bg-[#1B1C1E] rounded-3xl border-8 border-[#121213] p-4 m-4">
              <div className="text-[18px] text-[#889CE7]">MySQL Server</div>
              <div className="text-[13px]">
                MySQL Server es un sistema de gestión de bases de datos
                relacional (RDBMS) que forma parte del conjunto de tecnologías
                de base de datos MySQL. Desarrollado por Oracle Corporation,
                MySQL es de código abierto y se utiliza comúnmente en entornos
                de desarrollo web para almacenar y gestionar datos de manera
                eficiente.
              </div>
            </div>
          </div>
        </div>
        <div className="text-[#889CE7] font-bold text-3xl text-center">
          Normativas
        </div>
        <div className="text-white grid grid-cols-3 gap-4 w-full content-start text-center">
          <div className="bg-[#1B1C1E] rounded-3xl border-8 border-[#121213] p-4 m-4">
            <div className="text-[18px] text-[#889CE7]">ISO 25000</div>
            <div className="text-[13px]">
              <span className="font-bold">
                Análisis de la situación actual:
              </span>
              Evaluación de la calidad del software y servicios de TI existentes
              en la organización. <br />
              <span className="font-bold">Establecimiento de objetivos: </span>
              Definición de los objetivos que se desean alcanzar mediante la
              implementación de la norma. <br />
              <span className="font-bold">
                Implementación del sistema de gestión de calidad:{" "}
              </span>
              Esto implica la adopción de un enfoque de procesos para las
              operaciones, la documentación de los procesos de forma
              significativa, y la adopción de un enfoque centrado en el cliente.
              <span className="font-bold">
                Realización de evaluaciones y auditorías internas:{" "}
              </span>
              Esto implica la realización de auditorías internas para verificar
              la eficacia del sistema de gestión de calidad y la realización de
              evaluaciones para medir la calidad del software.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkFlow;
