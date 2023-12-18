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
        <div className="flex flex-row w-full justify-center">
          <div className="flex flex-col  bg-[#1B1C1E] rounded-3xl border-8 border-[#121213] shadow-md text-center items-center w-1/3 p-4 m-4">
            <label className="text-[#889CE7] font-semibold text-2xl my-6">
              Realizar pruebas de usabilidad
            </label>
            <label className="text-white font-light">
              El objetivo primordial de esta actividad es mantener a todo el
              equipo alineado con los objetivos del proyecto y resolver
              cualquier problema o retraso de manera oportuna. La comunicación
              efectiva en estas reuniones contribuye a una comprensión
              compartida del progreso y permite tomar decisiones informadas para
              superar obstáculos.
            </label>
          </div>
          <div className="flex flex-col  bg-[#1B1C1E] rounded-3xl border-8 border-[#121213] shadow-md text-center items-center w-1/3 p-4 m-4">
            <label className="text-[#889CE7] font-semibold text-2xl my-6">
              Implementar un Sistema de Monitoreo
            </label>
            <label className="text-white font-light">
              Mantener el rendimiento óptimo del servidor y prevenir problemas
              mediante la implementación de un sistema de monitoreo eficiente.
            </label>
          </div>
        </div>
        <div className="flex flex-row w-full justify-center">
          <div className="flex flex-col  bg-[#1B1C1E] rounded-3xl border-8 border-[#121213] shadow-md text-center items-center w-1/3 p-4 m-4">
            <label className="text-[#889CE7] font-semibold text-2xl my-6">
              Implementar medidas de seguridad en la infraestructura de la
              plataforma
            </label>
            <label className="text-white font-light">
              Implementar medidas de seguridad efectivas en la infraestructura
              de la plataforma para mitigar riesgos y garantizar la integridad y
              confidencialidad de los datos.
            </label>
          </div>
          <div className="flex flex-col  bg-[#1B1C1E] rounded-3xl border-8 border-[#121213] shadow-md text-center items-center w-1/3 p-4 m-4">
            <label className="text-[#889CE7] font-semibold text-2xl my-6">
              Organizar ceremonias de seguimiento
            </label>
            <label className="text-white font-light">
              El Director de Desarrollo organiza reuniones regulares para
              revisar el progreso del equipo y abordar cualquier problema o
              retraso en el desarrollo del proyecto. Estas reuniones sirven como
              un foro para la discusión abierta sobre el estado actual del
              proyecto, la identificación de posibles desafíos y la colaboración
              en soluciones.
            </label>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <button className="btn text-white bg-purple-600 hover:bg-purple-700 py-3 px-2">
            Manual de Actividades
          </button>
        </div>
      </div>
    </>
  );
}

export default Activities;
