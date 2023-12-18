"use client";
import Image from "next/image";
import BasicInfo from "./components/BasicInfo";
import Activities from "./components/Activities";
import Functions from "./components/Functions";
import WorkFlow from "./components/WorkFlow";
import Contact from "./components/Contact";

const EvaluacionTecnicaPage = () => {
  return (
    <div className="flex flex-col bg-[#141416] rounded-lg shadow-md">
      <div className="flex flex-row">
        {[
          "https://veiglerformacion.com/wp-content/uploads/2022/06/empowerment-300x200.jpg",
          "https://www.bizneo.com/blog/wp-content/uploads/2021/01/herramientas-de-evaluacion-del-desempeno-810x455.jpg",
          "https://www.up-spain.com/wp-content/uploads/2022/11/image-2.png",
          "https://javelo.io/wp-content/uploads/2022/02/Con-que%CC%81-frecuencia-realizar-la-evaluacio%CC%81n-del-desempen%CC%83o--e1650961999649.png",
          "https://theressa.net/images/articles/5bf8f1c024af7reclutamiento-seleccion-personal-contrato-entrevista.jpg",
        ].map((item, index) => (
          <Image
            key={index}
            loader={() => item}
            alt="top image"
            src={item}
            width={249}
            height={250}
          />
        ))}
      </div>
      <h1 className="w-full text-white text-5xl text-center font-bold mt-8">
        Departamento de Evaluación Técnica
      </h1>
      <BasicInfo />
      <Functions />
      <Activities />
      <WorkFlow />
      <Contact />
    </div>
  );
};

export default EvaluacionTecnicaPage;
