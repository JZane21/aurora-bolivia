import React from 'react';

const CEOPage = () => {
  return (
    <div className="flex flex-col w-full h-full bg-[#141416]">
     
      {/* Secciones de Información */}
      <div className="flex flex-row w-full">
        {/* Sección Quiénes Somos */}
        <div className="flex flex-col bg-[#1B1C1E] rounded-3xl border-8 border-[#121213] shadow-md text-center items-center w-1/3 p-4 m-4">
          <label className="text-[#889CE7] font-semibold text-2xl my-6">¿Quiénes Somos?</label>
          <p className="text-white font-light">
            El Departamento de CEO de Aurora está liderado por un equipo de ejecutivos experimentados y 
            visionarios, comprometidos con la excelencia y la innovación en el campo de la tecnología. 
            Nos caracterizamos por nuestra habilidad para anticipar tendencias del mercado, fomentar un 
            ambiente de trabajo colaborativo y empujar los límites de lo posible en el sector tecnológico. 
            Con un enfoque en la toma de decisiones estratégicas, buscamos constantemente oportunidades 
            para impulsar el crecimiento y el éxito sostenible de Aurora.
          </p>
        </div>

        {/* Sección Misión */}
        <div className="flex flex-col bg-[#1B1C1E] rounded-3xl border-8 border-[#121213] shadow-md text-center items-center w-1/3 p-4 m-4">
          <label className="text-[#889CE7] font-semibold text-2xl my-6">Misión</label>
          <p className="text-white font-light">
            Nuestra misión es dirigir a Aurora hacia un futuro prometedor, marcando el rumbo para 
            alcanzar la excelencia en todas nuestras actividades. Nos enfocamos en la toma de 
            decisiones estratégicas, el desarrollo de una cultura corporativa fuerte y el fomento 
            de la innovación continua. Estamos dedicados a construir relaciones sólidas y duraderas 
            con clientes, empleados y socios, asegurando que Aurora se mantenga como líder en 
            soluciones tecnológicas avanzadas y servicios de alta calidad.
          </p>
        </div>

        {/* Sección Visión */}
        <div className="flex flex-col bg-[#1B1C1E] rounded-3xl border-8 border-[#121213] shadow-md text-center items-center w-1/3 p-4 m-4">
          <label className="text-[#889CE7] font-semibold text-2xl my-6">Visión</label>
          <p className="text-white font-light">
            La visión del Departamento de CEO es posicionar a Aurora como una entidad pionera y 
            referente en la industria tecnológica a nivel mundial. Aspiramos a ser reconocidos 
            por nuestra capacidad para adaptarnos y liderar en un mercado en constante evolución, 
            manteniendo siempre un enfoque en la satisfacción del cliente y la responsabilidad 
            social. Nuestro objetivo es cultivar un entorno donde la innovación, la integridad y 
            la excelencia no solo sean palabras, sino la base de cada acción y decisión que tomamos 
            en el camino hacia un futuro tecnológico más brillante y sostenible.
          </p>
        </div>
      </div>

      {/* Sección Manual de Funciones */}
      <div className="flex flex-row w-full">
        <div className="flex flex-col bg-[#1B1C1E] rounded-3xl border-8 border-[#121213] shadow-md text-center items-center w-full p-4 m-4">
          <label className="text-[#889CE7] font-semibold text-2xl my-6">Manual de Funciones</label>
          <div className="text-white font-light">
            <p><strong>Identificación del Cargo:</strong></p>
            <ul>
              <li>Nombre del Cargo: CEO (Chief Executive Officer)</li>
              <li>Reporta a: Junta Directiva de Aurora</li>
              <li>Cargos que le Reportan: Directores de Departamento y Gerentes</li>
              <li>Objetivo del Cargo: El CEO es el máximo responsable ejecutivo de Aurora, encargado de liderar, planificar y supervisar todas las operaciones y actividades de la empresa para asegurar su éxito y crecimiento sostenible.</li>
            </ul>

            <p><strong>Perfil del Cargo:</strong></p>
            <ul>
              <li>Educación: Grado académico superior en Administración de Empresas, Finanzas, Ingeniería o campos relacionados.</li>
              <li>Especialización: Liderazgo ejecutivo, gestión empresarial, estrategia corporativa.</li>
              <li>Experiencia: Mínimo de 10 años en roles ejecutivos, con experiencia probada en liderazgo y gestión empresarial.</li>
              <li>Características de Personalidad: Liderazgo visionario, habilidades estratégicas y analíticas, comunicación efectiva, toma de decisiones, gestión del cambio, integridad y ética.</li>
            </ul>

            <p><strong>Funciones Principales y Prioritarias:</strong></p>
            <ul>
              <li>Estrategia y Planificación: Desarrollar y revisar la estrategia global de la empresa...</li>
              <li>Liderazgo y Gestión: Liderar el equipo ejecutivo y la gestión general de la empresa...</li>
              <li>Operaciones y Rendimiento: Supervisar las operaciones diarias de la empresa...</li>
              <li>Relaciones Externas y Comunicaciones: Representar a la empresa en eventos, con medios de comunicación y en negociaciones clave...</li>
              <li>Cumplimiento y Riesgo: Asegurar que la empresa cumpla con todas las leyes y regulaciones aplicables...</li>
              <li>Innovación y Desarrollo de Negocios: Impulsar la innovación y la búsqueda de nuevas oportunidades de negocio...</li>
            </ul>

            <p><strong>Habilidades:</strong></p>
            <ul>
              <li>Liderazgo visionario, habilidades estratégicas y analíticas, comunicación efectiva, toma de decisiones informadas, gestión del cambio, integridad y ética.</li>
            </ul>

            <p><strong>Riesgos:</strong></p>
            <ul>
              <li>Toma de decisiones estratégicas inadecuadas.</li>
              <li>Gestión ineficiente de recursos y talento.</li>
              <li>Fallos en la comunicación y relaciones con stakeholders.</li>
            </ul>

            <p><strong>Condiciones de Trabajo:</strong></p>
            <ul>
              <li>Horario flexible y dedicación horaria completa.</li>
              <li>Oficina ejecutiva y acceso a todas las instalaciones de la empresa.</li>
            </ul>

            <p><strong>Actitudes:</strong></p>
            <ul>
              <li>Proactivo, orientado a resultados, comprometido con la calidad y la innovación.</li>
            </ul>
          </div>
        </div>

        {/* Sección Manual de Actividades */}
      <div className="flex flex-row w-full">
        <div className="flex flex-col bg-[#1B1C1E] rounded-3xl border-8 border-[#121213] shadow-md text-center items-center w-full p-4 m-4">
          <label className="text-[#889CE7] font-semibold text-2xl my-6">Manual de Actividades</label>
          <div className="text-white font-light">
            {/* Área de Revisión de Indicadores Clave */}
            <p><strong>Área de Revisión de Indicadores Clave:</strong></p>
            <ul>
              <li>Responsable: CEO.</li>
              <li>Actividades: Monitorear indicadores clave de rendimiento (KPIs) de cada departamento. Revisar resúmenes de operaciones y ventas diarias.</li>
              <li>Definición: Vigilancia constante y análisis de KPIs para evaluar la eficiencia operativa y el éxito de cada departamento.</li>
              <li>Objetivo: Garantizar que la empresa cumpla o supere sus objetivos estratégicos y operativos.</li>
              <li>Procesos: Análisis diario de informes de KPIs. Evaluación del impacto de decisiones estratégicas sobre las operaciones y ventas.</li>
              <li>Actores: CEO, Jefes de Departamento, Analistas de Datos.</li>
              <li>Recursos: Software de análisis y gestión de datos, Informes operativos y financieros.</li>
              <li>Tecnología: Software de análisis de datos y BI (Business Intelligence) para el seguimiento de KPIs.</li>
            </ul>

            {/* Área de Comunicaciones Internas y Externas */}
            <p><strong>Área de Comunicaciones Internas y Externas:</strong></p>
            <ul>
              <li>Responsable: CEO.</li>
              <li>Actividades: Gestionar las comunicaciones críticas internas y externas. Realizar reuniones breves con equipos clave para mantenerse informado.</li>
              <li>Definición: Manejo eficiente y efectivo de la comunicación dentro y fuera de la empresa.</li>
              <li>Objetivo: Asegurar una comunicación fluida y transparente con todas las partes interesadas.</li>
              <li>Procesos: Revisión y respuesta a comunicaciones importantes. Organización de reuniones informativas regulares.</li>
              <li>Actores: CEO, Equipos de Gestión, Stakeholders.</li>
              <li>Recursos: Sistemas de correo electrónico y mensajería, Herramientas de videoconferencia.</li>
              <li>Tecnología: Plataformas de comunicación empresarial y correo electrónico. Herramientas de videoconferencia para reuniones internas y externas.</li>
            </ul>

            {/* Área de Gestión de Crisis */}
            <p><strong>Área de Gestión de Crisis:</strong></p>
            <ul>
              <li>Responsable: CEO.</li>
              <li>Actividades: Intervenir en situaciones de crisis o decisiones críticas que requieran atención inmediata.</li>
              <li>Definición: Administración proactiva y efectiva de situaciones imprevistas y críticas.</li>
              <li>Objetivo: Minimizar el impacto negativo y manejar efectivamente las crisis.</li>
              <li>Procesos: Detección y análisis rápido de crisis. Desarrollo e implementación de estrategias de gestión de crisis.</li>
              <li>Actores: CEO, Equipos de Gestión de Crisis.</li>
              <li>Recursos: Planes de contingencia, Sistemas de comunicación de emergencia.</li>
              <li>Tecnología: Sistemas de gestión de crisis y comunicación en tiempo real.</li>
            </ul>

            {/* Área de Liderazgo y Cultura Corporativa */}
            <p><strong>Área de Liderazgo y Cultura Corporativa:</strong></p>
            <ul>
              <li>Responsable: CEO.</li>
              <li>Actividades: Fomentar una cultura de innovación, responsabilidad y excelencia.</li>
              <li>Definición: Promoción y desarrollo de una cultura organizacional que apoye la innovación y el alto rendimiento.</li>
              <li>Objetivo: Establecer un ambiente corporativo que incentive la creatividad, la colaboración y el compromiso.</li>
              <li>Procesos: Creación de políticas y programas de cultura empresarial. Implementación de iniciativas para el desarrollo del talento.</li>
              <li>Actores: CEO, Departamento de Recursos Humanos.</li>
              <li>Recursos: Programas de formación y desarrollo, Herramientas de gestión del talento.</li>
              <li>Tecnología: Herramientas para la gestión del rendimiento y el desarrollo del talento.</li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    {/* Sección de Enlaces */}
    <div className="flex flex-row w-full justify-around mt-10">
        <a
          className="text-blue-400 hover:font-semibold hover:text-blue-800 text-xl"
          href="https://docs.google.com/document/d/1z9wS-carotVw3NhLfV9MELFZuVYzO8zgqSFRr0t0x8U/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Departamento de CEO
        </a>
        <a
          className="text-blue-400 hover:font-semibold hover:text-blue-800 text-xl"
          href="https://docs.google.com/document/d/1Pfr-HCyRPkqWw0N2KwgOffma_HQDQmdQwp0p5r8A7TU/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          CEO - Manual de Funciones
        </a>
        <a
          className="text-blue-400 hover:font-semibold hover:text-blue-800 text-xl"
          href="https://docs.google.com/document/d/1foYyuX_rTVShqzdN5coKE2S3Sy8mDwyb73Jt98JGyow/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          CEO - Manual de Actividades
        </a>
        <a
          className="text-blue-400 hover:font-semibold hover:text-blue-800 text-xl"
          href="https://docs.google.com/document/d/1GqLfjyWsxpeTN-PmMljnU-9dOLOlTpv-WezZ7Une1Eo/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          CEO - Evaluación de riesgos
        </a>
        <a
          className="text-blue-400 hover:font-semibold hover:text-blue-800 text-xl"
          href="https://docs.google.com/document/d/17KX0ZOzhyrGGZ3kGU4kKu3c2HgwozH53N6_GdwPKIB4/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          CEO - Herramientas
        </a>
        <a
          className="text-blue-400 hover:font-semibold hover:text-blue-800 text-xl"
          href="https://trello.com/b/Kx8sNYCV/ceo-cronograma"
          target="_blank"
          rel="noopener noreferrer"
        >
          CEO - Cronograma
        </a>
        <a
          className="text-blue-400 hover:font-semibold hover:text-blue-800 text-xl"
          href="https://docs.google.com/spreadsheets/d/1bdThmcf_vbSsM3dqbymmOrfD5XC7k6IsZgkkHq07KWc/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          CEO - Costos
        </a>
        <a
          className="text-blue-400 hover:font-semibold hover:text-blue-800 text-xl"
          href="https://drive.google.com/file/d/1oMezlpwZ2xfUp2UHGs4ZODj9BwCb4PaB/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          CEO - Workflow
        </a>
        <a
          className="text-blue-400 hover:font-semibold hover:text-blue-800 text-xl"
          href="https://docs.google.com/document/d/1oBXUzH8PP7p7kciqSp5A63IVDkH_zFRYDj_DXYtbrCE/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          CEO - Normativas
        </a>
        </div>
        </div>
  );
};

export default CEOPage;
