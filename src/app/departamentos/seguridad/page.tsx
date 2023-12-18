"use client";
import Image from "next/image";
import segui from "../../../assets/segui.webp";
const SeguridadInformaticaPage = () => {
  return (
    <div className="flex flex-col w-full h-full bg-[#141416]">
      <div className="w-full flex justify-center">
        <Image
          src={segui}
          alt="Aqui va una imagen chida :D"
          className=" shadow-md rounded-lg w-screen"
        />
      </div>
      <div className="flex flex-row w-full">
        <div className="flex flex-col  bg-[#1B1C1E] rounded-3xl border-8 border-[#121213] shadow-md text-center items-center w-1/3 p-4 m-4">
          <label className="text-[#889CE7] font-semibold text-2xl my-6">
            ¿Quiénes Somos?
          </label>
          <label className="text-white font-light">
            {" "}
            Somos un equipo de profesionales apasionados por la protección de
            datos y la seguridad cibernética. <br />
            Nos dedicamos a salvaguardar la integridad, confidencialidad y
            disponibilidad de la información, tanto de nuestros usuarios como de
            la empresa. Nuestra experiencia y compromiso nos permiten enfrentar
            los desafíos de la ciberseguridad con un enfoque proactivo y
            orientado a resultados.
          </label>
        </div>
        <div className="flex flex-col  bg-[#1B1C1E] rounded-3xl border-8 border-[#121213] shadow-md text-center items-center w-1/3 p-4 m-4">
          <label className="text-[#889CE7] font-semibold text-2xl my-6">
            Misión
          </label>
          <label className="text-white font-light">
            {" "}
            Brindar lineamientos, soluciones y servicios en seguridad
            informática con el principal objetivo de colaborar en la seguridad
            de los clientes y empleados dentro de la empresa. Estamos
            comprometidos a mantener la confianza y privacidad de aquellos a
            quienes servimos.
          </label>
        </div>
        <div className="flex flex-col  bg-[#1B1C1E] rounded-3xl border-8 border-[#121213] shadow-md text-center items-center w-1/3 p-4 m-4">
          <label className="text-[#889CE7] font-semibold text-2xl my-6">
            Visión
          </label>
          <label className="text-white font-light">
            {" "}
            Nos visualizamos como líderes en seguridad informática, <br />
            marcando el estándar de excelencia en la protección de <br />
            datos y la mitigación de riesgos cibernéticos. <br />
            Aspiramos a ser el referente en respuesta efectiva a <br />
            incidentes, demostrando que la seguridad es un pilar
            <br />
            fundamental de nuestra identidad corporativa.
          </label>
        </div>
      </div>
      <div className="flex flex-row border border-white p-10 m-6">
        <div className="flex flex-col  bg-[#1B1C1E] rounded-3xl border-8 border-[#121213] shadow-md w-1/2 p-4 m-4">
          {" "}
          <label className="text-[#889CE7] font-semibold text-3xl m-6 ">
            Actividades
          </label>
          <div className="flex flex-col   rounded-3xl  shadow-md  items-center w-full p-4 m-4">
            <label className="text-[#FD6262] font-semibold text-2xl my-6 text-left w-full">
              Desarrollar estrategias y políticas de seguridad.
            </label>
            <label className="text-white font-light">
              {" "}
              Desarrollo de estrategias y políticas que garanticen la seguridad
              de la información de los clientes y los expertos que manejen la
              plataforma web de la empresa.
            </label>
          </div>
          <div className="flex flex-col   rounded-3xl  shadow-md  items-center w-full p-4 m-4">
            <label className="text-[#FD6262] font-semibold text-2xl my-6 text-left w-full">
              Elaborar procedimientos para ataques informáticos.
            </label>
            <label className="text-white font-light">
              {" "}
              Desarrollar procedimientos detallados que describan las acciones
              específicas a seguir en respuesta a ataques informáticos,
              incluyendo la identificación, contención, erradicación y
              recuperación.
            </label>
          </div>
          <div className="flex flex-col   rounded-3xl  shadow-md  items-center w-full p-4 m-4">
            <label className="text-[#FD6262] font-semibold text-2xl my-6 text-left w-full">
              Verificar el cumplimiento de seguridad
            </label>
            <label className="text-white font-light">
              {" "}
              Realizar auditorías internas para evaluar el cumplimiento de las
              políticas y procedimientos de seguridad establecidos,
              identificando áreas de mejora y asegurando que se mantenga el
              alineamiento con estándares y regulaciones.
            </label>
          </div>
          <div className="flex flex-col   rounded-3xl  shadow-md  items-center w-full p-4 m-4">
            <label className="text-[#FD6262] font-semibold text-2xl my-6 text-left w-full">
              Elaborar cronogramas para auditorías
            </label>
            <label className="text-white font-light">
              {" "}
              Crear planificaciones detalladas que establezcan fechas y
              responsabilidades específicas para la realización de auditorías
              internas y externas de seguridad.
            </label>
          </div>
        </div>
        <div className="w-1/2 flex flex-col m-4 ">
          <div className="flex w-full bg-[#1B1C1E] font-bold hover:bg-red-800 h-1/4 items-center justify-center  hover:text-[#1B1C1E] text-white">
            <a
              className="text-4xl "
              href="https://drive.google.com/file/d/1oIT_f9A_GR3Czuyy1Nxl2slQ2tUzpbrF/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Manual de Funciones
            </a>
          </div>
          <div className="flex w-full bg-red-400 h-1/4 items-center justify-center">
            <a
              className="text-blue-400  text-4xl hover:font-semibold hover:text-blue-800"
              href="https://drive.google.com/file/d/1oIT_f9A_GR3Czuyy1Nxl2slQ2tUzpbrF/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Costos
            </a>
          </div>
          <div className="flex w-full bg-red-400 h-1/4 items-center justify-center">
            <a
              className="text-blue-400  text-4xl hover:font-semibold hover:text-blue-800"
              href="https://drive.google.com/file/d/1oIT_f9A_GR3Czuyy1Nxl2slQ2tUzpbrF/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cronograma
            </a>
          </div>
          <div className="flex flex row w-full bg-red-400 h-1/4 items-center justify-center">
            <div className="w-1/2 h-full">
              <a
                className="text-blue-400  text-4xl hover:font-semibold hover:text-blue-800"
                href="https://drive.google.com/file/d/1oIT_f9A_GR3Czuyy1Nxl2slQ2tUzpbrF/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Flujo de Trabajo
              </a>
            </div>
            <div className="w-1/2 h-full">
              <a
                className="text-blue-400  text-4xl hover:font-semibold hover:text-blue-800"
                href="https://drive.google.com/file/d/1oIT_f9A_GR3Czuyy1Nxl2slQ2tUzpbrF/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Analisis de Procesos
              </a>
            </div>
          </div>
        </div>
      </div>
      <div> </div>
    </div>
  );
};

export default SeguridadInformaticaPage;
