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
          <div className="flex w-full bg-[#1B1C1E] font-bold hover:bg-white h-1/4 items-center justify-center  hover:text-[#1B1C1E] text-white m-4">
            <a
              className="text-4xl "
              href="https://docs.google.com/document/d/1x7rMLLM6YbwOGLgD6EtGSyM4IEcsH2NaATUeFqyTMzM/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Manual de Funciones
            </a>
          </div>
          <div className="flex w-full bg-[#1B1C1E] font-bold hover:bg-white h-1/4 items-center justify-center  hover:text-[#1B1C1E] text-white m-4">
            <a
              className="text-4xl "
              href="https://docs.google.com/spreadsheets/d/1PpafiJmyOymEjZZ9Q2t0KRrqxqDAILOH0BF1vnINcns/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Costos
            </a>
          </div>
          <div className="flex w-full bg-[#1B1C1E] font-bold hover:bg-white h-1/4 items-center justify-center  hover:text-[#1B1C1E] text-white m-4">
            <a
              className="text-4xl "
              href="https://docs.google.com/spreadsheets/d/1PpafiJmyOymEjZZ9Q2t0KRrqxqDAILOH0BF1vnINcns/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cronograma
            </a>
          </div>
          <div className="flex flex-row w-full h-1/4 justify-center">
            <div className="flex w-1/2 h-full bg-[#1B1C1E] font-bold hover:bg-white  items-center justify-center  hover:text-[#1B1C1E] text-white m-4">
              <a
                className="text-4xl "
                href="https://drive.google.com/file/d/1QMemop1XlJXmyrZCTRyA0WEcWgxFzVgJ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Flujo de Trabajo
              </a>
            </div>
            <div className="flex w-1/2 h-full bg-[#1B1C1E] font-bold hover:bg-white  items-center justify-center  hover:text-[#1B1C1E] text-white m-4">
              <a
                className="text-4xl "
                href="https://drive.google.com/file/d/1QMemop1XlJXmyrZCTRyA0WEcWgxFzVgJ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Analisis de Procesos
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="m-10">
        <div>
          <div className="text-white font-bold text-[50px] text-center">
            Normativas y Reglamentos Internacionales
          </div>

          <div className="text-white font-semibold text-[32px]">
            En base a la norma ISO/IEC 27000
          </div>
          <div className="text-white grid grid-cols-4 gap-1 w-full content-start">
            <div className="bg-[#1B1C1E] rounded-3xl border-8 border-[#121213] p-4 m-2">
              <div className="text-[#889CE7]">ISO 27001</div>
              <div>
                Proporciona un marco para establecer, implementar, operar y
                mejorar continuamente un Sistema de Gestión de Seguridad de la
                Información
              </div>
            </div>
            <div className="bg-[#1B1C1E] rounded-3xl border-8 border-[#121213] p-4 m-2">
              <div className="text-[#889CE7]">ISO 27002 </div>
              <div>
                Ofrece las mejores prácticas y objetivos de control relacionados
                con aspectos clave de la ciberseguridad, incluyendo el control
                de acceso, la criptografía, la seguridad de los recursos humanos
                y la respuesta a incidentes. Es importante porque es la única
                norma en la serie ISO 27k que proporciona orientación de
                implementación en todos los 93 controles definidos en el Anexo A
                de ISO 27001.
              </div>
            </div>
            <div className="bg-[#1B1C1E] rounded-3xl border-8 border-[#121213] p-4 m-2">
              <div className="text-[#889CE7]">ISO 27004</div>
              <div>
                Proporciona orientación y describe un conjunto de mejores
                prácticas para medir el resultado de un SGSI en una
                organización. La norma especifica cómo configurar un programa de
                medición, qué parámetros medir, cuándo medir, cómo medir y ayuda
                a las organizaciones a decidir cómo establecer objetivos de
                rendimiento y criterios de éxito.
              </div>
            </div>
            <div className="bg-[#1B1C1E] rounded-3xl border-8 border-[#121213] p-4 m-2">
              <div className="text-[#889CE7]">ISO 27005</div>
              <div>
                Proporciona directrices para la gestión de riesgos de seguridad
                de la información
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
                Evaluación de Amenazas y Vulnerabilidades
              </div>
              <div className="text-[13px]">
                Identificar amenazas y vulnerabilidades que podrían afectar la
                seguridad de los activos. Se realizaran evaluaciones regulares
                de amenazas, considerando fuentes internas y externas. Se
                Identificarán vulnerabilidades en sistemas, aplicaciones y redes
                mediante pruebas de penetración y auditorías de seguridad.
              </div>
            </div>
            <div className="bg-[#1B1C1E] rounded-3xl border-8 border-[#121213] p-4 m-4">
              <div className="text-[18px] text-[#889CE7]">
                Plan de Respuesta a Incidentes
              </div>
              <div className="text-[13px]">
                Establecer un plan efectivo para responder a incidentes de
                seguridad. Desarrollar un plan de respuesta a incidentes
                detallado, que incluya roles y responsabilidades. Realizar
                simulacros regulares para probar la efectividad del plan de
                respuesta.
              </div>
            </div>

            <div className="bg-[#1B1C1E] rounded-3xl border-8 border-[#121213] p-4 m-4">
              <div className="text-[18px] text-[#889CE7]">
                Análisis de Riesgos
              </div>
              <div className="text-[13px]">
                Evaluar la probabilidad y el impacto de posibles eventos
                adversos.
                <br />
                Calcular el riesgo asociado con cada amenaza identificada y{" "}
                <br />
                Priorizar los riesgos según su nivel de impacto y probabilidad.
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
              <div className="text-[18px] text-[#889CE7]">VM Workstation</div>
              <div className="text-[13px]">
                VMware Workstation Pro eleva la virtualización al siguiente
                nivel al ofrecer la máxima compatibilidad con sistemas
                operativos, una experiencia de usuario enriquecida, un completo
                conjunto de funciones y un alto rendimiento. VMware Workstation
                Pro se ha diseñado para profesionales que dependen de las
                máquinas virtuales para hacer su trabajo.
              </div>
            </div>
            <div className="bg-[#1B1C1E] rounded-3xl border-8 border-[#121213] p-4 m-4">
              <div className="text-[18px] text-[#889CE7]">CloudFlare</div>
              <div className="text-[13px]">
                Garantiza la seguridad, la velocidad y la productividad de las
                aplicaciones web y las API con una conectividad cloud Protege
                fácilmente las aplicaciones y las API contra el abuso, evita los
                bots maliciosos, impide los ataques DDoS y aísla la actividad
                sospechosa, todo ello gracias a la información que ofrece
                nuestra plataforma. Mejora el rendimiento de las aplicaciones
                web con una conectividad que escala sin límites en todas las
                ubicaciones.
              </div>
            </div>
            <div className="bg-[#1B1C1E] rounded-3xl border-8 border-[#121213] p-4 m-4">
              <div className="text-[18px] text-[#889CE7]">Debian</div>
              <div className="text-[13px]">
                La razón tras el estatus de Debian como un sistema operativo
                para desarrolladores es el gran número de paquetes y soporte de
                software, que es algo importante para los desarrolladores. Está
                altamente recomendado para programadores avanzados y
                administradores de sistemas
              </div>
            </div>
            <div className="bg-[#1B1C1E] rounded-3xl border-8 border-[#121213] p-4 m-4">
              <div className="text-[18px] text-[#889CE7]">Datadog</div>
              <div className="text-[13px]">
                Datadog es un servicio de monitorización para aplicaciones en la
                nube, que proporciona monitorización de servidores, bases de
                datos, herramientas y servicios, a través de una plataforma de
                análisis de datos basada en "Software como Servicio"
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeguridadInformaticaPage;
