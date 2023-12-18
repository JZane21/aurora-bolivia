import Image from "next/image";
import React from "react";
import iniciall from "../../assets/iniciall.jpeg";
import workflow from "../../assets/workflow.jpeg";
import mapa from "../../assets/mapa.jpeg";
import ContactoPage from "../contacto/page";

const InicioPage = () => {
  return (
    <>
      <div className="w-full flex justify-center">
        <Image
          src={iniciall}
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
            Somos un colectivo de emprendedores apasionados por la tecnología,
            dedicados a impulsar la innovación en el sector. Nuestro equipo,
            compuesto por expertos en Ingeniería de Sistemas, se especializa en
            diversas áreas clave, lo que nos permite ofrecer soluciones
            integrales y vanguardistas. El proyecto que iniciamos es una piedra
            en la gran pirámide que deseamos construir, debido a que la visión
            que tenemos no está centrada solamente en el éxito económico, está
            inclinada hacia la superación individual y colectiva.
          </label>
        </div>
        <div className="flex flex-col  bg-[#1B1C1E] rounded-3xl border-8 border-[#121213] shadow-md text-center items-center w-1/3 p-4 m-4">
          <label className="text-[#889CE7] font-semibold text-2xl my-6">
            Misión
          </label>
          <label className="text-white font-light">
            {" "}
            Nuestra misión es desentrañar y simplificar los desafíos
            tecnológicos, ofreciendo soluciones eficaces y personalizadas. Nos
            enfocamos en minimizar problemas y maximizar eficiencia, asegurando
            que cada proyecto se realice con agilidad y precisión. Priorizamos
            la satisfacción total del cliente, garantizando que cada solución no
            solo cumpla, sino supere sus expectativas.
          </label>
        </div>
        <div className="flex flex-col  bg-[#1B1C1E] rounded-3xl border-8 border-[#121213] shadow-md text-center items-center w-1/3 p-4 m-4">
          <label className="text-[#889CE7] font-semibold text-2xl my-6">
            Visión
          </label>
          <label className="text-white font-light">
            {" "}
            En Aurora, nos proyectamos como una empresa líder y referente en el
            ámbito tecnológico a nivel nacional. Nuestro objetivo es destacarnos
            por nuestra capacidad de innovar y por la excelencia en la
            prestación de servicios de comunicación y desarrollo de nuevas
            tecnologías. Nos comprometemos a ser un pilar en el avance
            tecnológico, adaptándose y evolucionando constantemente para
            satisfacer las demandas dinámicas de nuestros clientes.
          </label>
        </div>
      </div>
      <div className="flex flex-row w-full">
        <div className="flex flex-col w-1/3">
        <label className="text-[#889CE7] font-semibold text-2xl text-center my-6"> Flujo de Trabajo</label>
          <div className="w-full h-fit flex justify-center">
            <Image
              src={workflow}
              alt="Aqui va una imagen chida :D"
              className=" shadow-md rounded-lg w-screen"
            />
          </div>
        </div>
        <div className="flex flex-row w-2/3">
          <div className="flex flex-col w-full">
          <label className="text-[#889CE7] font-semibold text-2xl text-center my-6"> Mapa Jerárquico</label>
            <div className="h-fit w-full flex justify-center">
              <Image
                src={mapa}
                alt="Aqui va una imagen chida :D"
                className=" shadow-md rounded-lg w-screen"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full">
      <label className="text-[#889CE7] font-semibold text-2xl text-center my-6"> Participantes</label>

<ContactoPage/>
      </div>
      
    </>
  );
};

export default InicioPage;
