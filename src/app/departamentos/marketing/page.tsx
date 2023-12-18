"use client";
import Image from "next/image";
import segui from "../../../assets/segui.webp";
const MarketingPage = () => {
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
                En el Departamento de Marketing de Aurora, 
                somos un equipo dinámico y creativo, 
                apasionados por conectar a la gente con soluciones tecnológicas innovadoras. 
                Nuestro enfoque está en entender las necesidades del mercado y en comunicar efectivamente el valor y la visión de Aurora. 
                Nos especializamos en estrategias de marketing digital, comunicación de marca y desarrollo de relaciones con clientes, 
                utilizando un enfoque basado en datos para impulsar el crecimiento y la presencia de Aurora en el mercado.
              </label>
            </div>
            <div className="flex flex-col  bg-[#1B1C1E] rounded-3xl border-8 border-[#121213] shadow-md text-center items-center w-1/3 p-4 m-4">
              <label className="text-[#889CE7] font-semibold text-2xl my-6">
                Misión
              </label>
              <label className="text-white font-light">
                {" "}
                Nuestra misión es promover la marca Aurora y sus servicios de manera efectiva y atractiva, 
                asegurando que nuestros mensajes lleguen al público objetivo de manera oportuna y relevante. 
                Nos esforzamos por crear campañas innovadoras que resuenen con nuestros clientes y refuercen nuestra posición como líderes en el mercado tecnológico. 
                Nos comprometemos a fomentar una comprensión profunda de las necesidades de nuestros clientes y a utilizar esta información para guiar nuestras estrategias y acciones de marketing.
              </label>
            </div>
            <div className="flex flex-col  bg-[#1B1C1E] rounded-3xl border-8 border-[#121213] shadow-md text-center items-center w-1/3 p-4 m-4">
              <label className="text-[#889CE7] font-semibold text-2xl my-6">
                Visión
              </label>
              <label className="text-white font-light">
                {" "}
                La visión del Departamento de Marketing en Aurora es ser reconocidos como un equipo pionero en el uso de estrategias de marketing digital y 
                comunicación de marca para transformar el panorama tecnológico. 
                piramos a establecer a Aurora como una marca sinónimo de innovación, 
                calidad y servicio al cliente excepcional. Nuestro objetivo a largo plazo es liderar la industria en la creación de campañas de marketing que no solo aumenten la visibilidad y 
                el alcance de Aurora, sino que también establezcan nuevos estándares en marketing tecnológico, 
                impulsando el crecimiento sostenible y la lealtad de los clientes.
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
                Desarrollo de Campañas de Publicidad Online
                </label>
                <label className="text-white font-light">
                  {" "}
                  Desarrollar y ejecutar campañas pagadas en línea para promocionar la App web, 
                  utilizando plataformas publicitarias relevantes.
                </label>
              </div>
              <div className="flex flex-col   rounded-3xl  shadow-md  items-center w-full p-4 m-4">
                <label className="text-[#FD6262] font-semibold text-2xl my-6 text-left w-full">
                Gestión de Redes Sociales
                </label>
                <label className="text-white font-light">
                  {" "}
                  Gestionar y mantener perfiles activos en redes sociales para interactuar con la audiencia y 
                  promover la App web.
                </label>
              </div>
              <div className="flex flex-col   rounded-3xl  shadow-md  items-center w-full p-4 m-4">
                <label className="text-[#FD6262] font-semibold text-2xl my-6 text-left w-full">
                Optimización de la App Web y SEO
                </label>
                <label className="text-white font-light">
                  {" "}
                  Evaluar y mejorar continuamente el sitio web de la App web para garantizar una experiencia de usuario óptima y 
                  aplicar estrategias SEO para mejorar la visibilidad en los motores de búsqueda.
                </label>
              </div>
              <div className="flex flex-col   rounded-3xl  shadow-md  items-center w-full p-4 m-4">
                <label className="text-[#FD6262] font-semibold text-2xl my-6 text-left w-full">
                Creación de Contenido
                </label>
                <label className="text-white font-light">
                  {" "}
                  Desarrollar contenido relevante y atractivo para blogs, 
                  newsletters y otros canales de comunicación para atraer y retener a la audiencia.
                </label>
              </div>
              <div className="flex flex-col   rounded-3xl  shadow-md  items-center w-full p-4 m-4">
                <label className="text-[#FD6262] font-semibold text-2xl my-6 text-left w-full">
                Participación en Eventos y Alianzas
                </label>
                <label className="text-white font-light">
                  {" "}
                  Organizar eventos promocionales y participar en ferias del sector, 
                  además de establecer y mantener alianzas estratégicas con otras empresas y organizaciones.
                </label>
              </div>
              <div className="flex flex-col   rounded-3xl  shadow-md  items-center w-full p-4 m-4">
                <label className="text-[#FD6262] font-semibold text-2xl my-6 text-left w-full">
                Monitoreo y Análisis de Métricas
                </label>
                <label className="text-white font-light">
                  {" "}
                  Utilizar herramientas analíticas para recopilar y 
                  analizar datos de marketing, generando informes para evaluar el rendimiento de las campañas y 
                  proponer mejoras.
                </label>
              </div>
            </div>
            <div className="w-1/2 flex flex-col m-4 ">
              <div className="flex w-full bg-[#1B1C1E] font-bold hover:bg-white h-1/4 items-center justify-center  hover:text-[#1B1C1E] text-white m-4">
                <a
                  className="text-4xl "
                  href="https://docs.google.com/document/d/1bxpthGHckYfwZXjAXMlqfzMHoSq7lp53nu9le0sF00o/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Manual de Funciones
                </a>
              </div>
              <div className="flex w-full bg-[#1B1C1E] font-bold hover:bg-white h-1/4 items-center justify-center  hover:text-[#1B1C1E] text-white m-4">
                <a
                  className="text-4xl "
                  href="https://docs.google.com/spreadsheets/d/1rhxxPnMlCkHR-nUOEj4Krl_o_ci-IjwEgRUf1ST3Ugk/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Costos y Cronograma
                </a>
              </div>
              <div className="flex w-full bg-[#1B1C1E] font-bold hover:bg-white h-1/4 items-center justify-center  hover:text-[#1B1C1E] text-white m-4">
                  <a
                    className="text-4xl "
                    href="https://docs.google.com/document/d/15o5f6_i75xNs-hXGo_WtTQRWlPAzyN_IWdE9cuvGj5s/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Flujo de Trabajo
                  </a>
              </div>
            </div>
          </div>
          <div className="m-10">
            <div>
              <div className="text-white font-bold text-[50px] text-center">
                Normativas y Reglamentos Internacionales
              </div>
    
              <div className="text-white font-semibold text-[32px]">
                En base a la norma ISO
              </div>
              <div className="text-white grid grid-cols-4 gap-1 w-full content-start">
                <div className="bg-[#1B1C1E] rounded-3xl border-8 border-[#121213] p-4 m-2">
                  <div className="text-[#889CE7]">ISO 9001:2015</div>
                  <div>
                  La norma ISO 9001:2015 es un estándar internacional para sistemas de gestión de calidad (SGC). 
                  Establecido por la Organización Internacional de Normalización (ISO), 
                  este estándar proporciona un marco para ayudar a las organizaciones a mejorar la calidad de sus productos y servicios, 
                  aumentar la satisfacción del cliente y optimizar sus procesos internos.
                  </div>
                </div>
              </div>
            </div>
    
            <div>
              <div className="text-white font-bold text-[50px] text-center">
                Gestión de Riesgos
              </div>
              <div className="text-white grid grid-cols-3 gap-4 w-full content-start text-center">
                <div className="bg-[#1B1C1E] rounded-3xl border-8 border-[#121213] p-4 m-4">
                  <div className="text-[18px] text-[#889CE7]">
                  Riesgo de inversión no rentable en publicidad digital
                  </div>
                  <div className="text-[13px]">
                  Posibilidad de que la inversión en publicidad no genere el retorno esperado.
                  </div>
                </div>
                <div className="bg-[#1B1C1E] rounded-3xl border-8 border-[#121213] p-4 m-4">
                  <div className="text-[18px] text-[#889CE7]">
                  No alcanzar objetivos de conversión en línea
                  </div>
                  <div className="text-[13px]">
                  Posibilidad de no cumplir con los objetivos de conversión establecidos.
                  </div>
                </div>
    
                <div className="bg-[#1B1C1E] rounded-3xl border-8 border-[#121213] p-4 m-4">
                  <div className="text-[18px] text-[#889CE7]">
                  Competencia intensa
                  </div>
                  <div className="text-[13px]">
                  Posibilidad de que la competencia aumente, afectando la cuota de mercado.
                  </div>
                </div>
              </div>
            </div>
    
            <div>
              <div className="text-white font-bold text-[50px] text-center">
                Herramientas
              </div>
              <div className="text-white grid grid-cols-4 gap-4 w-full content-start text-center">
                <div className="bg-[#1B1C1E] rounded-3xl border-8 border-[#121213] p-4 m-4">
                  <div className="text-[18px] text-[#889CE7]">Google Analytics</div>
                  <div className="text-[13px]">
                  Google Analytics es una herramienta poderosa en el departamento de marketing, 
                  ya que proporciona información valiosa sobre el rendimiento y la eficacia de las 
                  estrategias de marketing en línea. proporciona una visión integral del rendimiento en línea, 
                  lo que permite a los profesionales de marketing tomar decisiones más informadas y optimizar sus estrategias 
                  para lograr mejores resultados.
                  </div>
                </div>
                <div className="bg-[#1B1C1E] rounded-3xl border-8 border-[#121213] p-4 m-4">
                  <div className="text-[18px] text-[#889CE7]">Adobe Creative Cloud</div>
                  <div className="text-[13px]">
                  Adobe Creative Cloud es una herramienta integral que proporciona a los profesionales 
                  del marketing las aplicaciones necesarias para diseñar, crear y editar una variedad de 
                  activos visuales y multimedia. Esto contribuye a la creación de campañas de marketing visualmente atractivas y 
                  efectivas.
                  </div>
                </div>
                <div className="bg-[#1B1C1E] rounded-3xl border-8 border-[#121213] p-4 m-4">
                  <div className="text-[18px] text-[#889CE7]">Moz</div>
                  <div className="text-[13px]">
                  es una herramienta integral para el análisis y la mejora del rendimiento en línea, 
                  especialmente en el ámbito del SEO. Ayuda a los profesionales del marketing a tomar decisiones informadas, 
                  mejorar la visibilidad en los motores de búsqueda y optimizar sus estrategias digitales para obtener mejores 
                  resultados.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
export default MarketingPage;
