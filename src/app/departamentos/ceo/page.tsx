import React from 'react';

const CEOPage = () => {
  const pageContainerStyle = {
    padding: '20px',
  };

  const sectionStyle = {
    marginBottom: '20px',
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
  };

  const subtitleStyle = { 
    fontSize: '18px', 
    fontWeight: 'bold', 
    marginTop: '15px' 
  };

  const contentStyle = {
    marginBottom: '10px',
  };

  const manualStyle = {
    backgroundColor: '#800000',
    padding: '10px',
    borderRadius: '5px'
  };

  const manualActivitiesStyle = {
    backgroundColor: '#800000',
    padding: '10px',
    borderRadius: '5px',
    marginTop: '20px',
  };

  return (
    <div style={pageContainerStyle}>
      <h2 style={titleStyle}>Departamento de CEO</h2>
      
      {/* Sección Quiénes Somos */}
      <div style={sectionStyle}>
        <h3 style={titleStyle}>¿Quiénes Somos?</h3>
        <p style={contentStyle}>
          El Departamento de CEO de Aurora está liderado por un equipo de ejecutivos experimentados y 
          visionarios, comprometidos con la excelencia y la innovación en el campo de la tecnología. 
          Nos caracterizamos por nuestra habilidad para anticipar tendencias del mercado, fomentar un 
          ambiente de trabajo colaborativo y empujar los límites de lo posible en el sector tecnológico. 
          Con un enfoque en la toma de decisiones estratégicas, buscamos constantemente oportunidades para 
          impulsar el crecimiento y el éxito sostenible de Aurora.
        </p>
      </div>
      
      {/* Sección Misión */}
      <div style={sectionStyle}>
        <h3 style={titleStyle}>Misión</h3>
        <p style={contentStyle}>
          Nuestra misión es dirigir a Aurora hacia un futuro prometedor, marcando el rumbo para alcanzar 
          la excelencia en todas nuestras actividades. Nos enfocamos en la toma de decisiones estratégicas, 
          el desarrollo de una cultura corporativa fuerte y el fomento de la innovación continua. Estamos 
          dedicados a construir relaciones sólidas y duraderas con clientes, empleados y socios, asegurando 
          que Aurora se mantenga como líder en soluciones tecnológicas avanzadas y servicios de alta calidad.
        </p>
      </div>
      
      {/* Sección Visión */}
      <div style={sectionStyle}>
        <h3 style={titleStyle}>Visión</h3>
        <p style={contentStyle}>
          La visión del Departamento de CEO es posicionar a Aurora como una entidad pionera y referente en 
          la industria tecnológica a nivel mundial. Aspiramos a ser reconocidos por nuestra capacidad para 
          adaptarnos y liderar en un mercado en constante evolución, manteniendo siempre un enfoque en la 
          satisfacción del cliente y la responsabilidad social. Nuestro objetivo es cultivar un entorno donde 
          la innovación, la integridad y la excelencia no solo sean palabras, sino la base de cada acción y 
          decisión que tomamos en el camino hacia un futuro tecnológico más brillante y sostenible.
        </p>
      </div>

       {/* Sección Manual de Funciones */}
       <div style={sectionStyle}>
        <h3 style={titleStyle}>Manual de Funciones</h3>
        <div style={manualStyle}>
          <h4 style={titleStyle}>Identificación del Cargo</h4>
          <p style={contentStyle}><strong>Nombre del Cargo:</strong> CEO (Chief Executive Officer)</p>
          <p style={contentStyle}><strong>Reporta a:</strong> Junta Directiva de Aurora</p>
          <p style={contentStyle}><strong>Cargos que le Reportan:</strong> Directores de Departamento y Gerentes</p>
          <p style={contentStyle}><strong>Objetivo del Cargo:</strong> El CEO es el máximo responsable ejecutivo de Aurora, encargado de liderar, planificar y supervisar todas las operaciones y actividades de la empresa para asegurar su éxito y crecimiento sostenible.</p>
          <p style={contentStyle}><strong>Perfil del Cargo:</strong></p>
          <ul>
            <li><strong>Educación:</strong> Grado académico superior en Administración de Empresas, Finanzas, Ingeniería o campos relacionados.</li>
            <li><strong>Especialización:</strong> Liderazgo ejecutivo, gestión empresarial, estrategia corporativa.</li>
            <li><strong>Experiencia:</strong> Mínimo de 10 años en roles ejecutivos, con experiencia probada en liderazgo y gestión empresarial.</li>
            <li><strong>Características de Personalidad:</strong> Liderazgo visionario, habilidades estratégicas y analíticas, comunicación efectiva, toma de decisiones, gestión del cambio, integridad y ética.</li>
          </ul>
          <p style={contentStyle}><strong>Funciones Principales y Prioritarias:</strong></p>
          <ul>
            <li>Estrategia y Planificación: Desarrollar y revisar la estrategia global de la empresa...</li>
            <li>Liderazgo y Gestión: Liderar el equipo ejecutivo y la gestión general de la empresa...</li>
            <li>Operaciones y Rendimiento: Supervisar las operaciones diarias de la empresa...</li>
            <li>Relaciones Externas y Comunicaciones: Representar a la empresa en eventos, con medios de comunicación y en negociaciones clave. Mantener relaciones estratégicas con socios, clientes, inversores y otras partes interesadas. Comunicar efectivamente la visión y los valores de la empresa.</li>
          <li>Cumplimiento y Riesgo: Asegurar que la empresa cumpla con todas las leyes y regulaciones aplicables. Supervisar la gestión de riesgos y la implementación de políticas de cumplimiento. Actuar como el principal punto de contacto para la junta directiva y accionistas.</li>
          <li>Innovación y Desarrollo de Negocios: Impulsar la innovación y la búsqueda de nuevas oportunidades de negocio. Evaluar y liderar potenciales adquisiciones, fusiones o expansiones. Mantenerse actualizado sobre las tendencias del mercado y ajustar la estrategia de la empresa en consecuencia.</li>

          <p style={contentStyle}><strong>Habilidades:</strong></p>
          <ul>
            <li>Liderazgo visionario, habilidades estratégicas y analíticas, comunicación efectiva, toma de decisiones informadas, gestión del cambio, integridad y ética.</li>
          </ul>

          <p style={contentStyle}><strong>Riesgos:</strong></p>
          <ul>
            <li>Toma de decisiones estratégicas inadecuadas.</li>
            <li>Gestión ineficiente de recursos y talento.</li>
            <li>Fallos en la comunicación y relaciones con stakeholders.</li>
          </ul>

          <p style={contentStyle}><strong>Condiciones de Trabajo:</strong></p>
          <ul>
            <li>Horario flexible y dedicación horaria completa.</li>
            <li>Oficina ejecutiva y acceso a todas las instalaciones de la empresa.</li>
          </ul>

          <p style={contentStyle}><strong>Actitudes:</strong></p>
          <ul>
            <li>Proactivo, orientado a resultados, comprometido con la calidad y la innovación.</li>
          </ul>
          </ul>
        </div>
      </div>

      {/* Sección Manual de Actividades */}
      <div style={sectionStyle}>
        <h3 style={titleStyle}>Manual de Actividades</h3>
        <div style={manualActivitiesStyle}>
          {/* Área de Revisión de Indicadores Clave */}
          <h4 style={subtitleStyle}>Área de Revisión de Indicadores Clave</h4>
          <p style={contentStyle}>
            Responsable: CEO.<br />
            Actividades: Monitorear indicadores clave de rendimiento (KPIs) de cada departamento. Revisar resúmenes de operaciones y ventas diarias.<br />
            Definición: Vigilancia constante y análisis de KPIs para evaluar la eficiencia operativa y el éxito de cada departamento.<br />
            Objetivo: Garantizar que la empresa cumpla o supere sus objetivos estratégicos y operativos.<br />
            Procesos: Análisis diario de informes de KPIs. Evaluación del impacto de decisiones estratégicas sobre las operaciones y ventas.<br />
            Actores: CEO, Jefes de Departamento, Analistas de Datos.<br />
            Recursos: Software de análisis y gestión de datos, Informes operativos y financieros.<br />
            Tecnología: Software de análisis de datos y BI (Business Intelligence) para el seguimiento de KPIs.
          </p>

          {/* Área de Comunicaciones Internas y Externas */}
          <h4 style={subtitleStyle}>Área de Comunicaciones Internas y Externas</h4>
          <p style={contentStyle}>
            Responsable: CEO.<br />
            Actividades: Gestionar las comunicaciones críticas internas y externas. Realizar reuniones breves con equipos clave para mantenerse informado.<br />
            Definición: Manejo eficiente y efectivo de la comunicación dentro y fuera de la empresa.<br />
            Objetivo: Asegurar una comunicación fluida y transparente con todas las partes interesadas.<br />
            Procesos: Revisión y respuesta a comunicaciones importantes. Organización de reuniones informativas regulares.<br />
            Actores: CEO, Equipos de Gestión, Stakeholders.<br />
            Recursos: Sistemas de correo electrónico y mensajería, Herramientas de videoconferencia.<br />
            Tecnología: Plataformas de comunicación empresarial y correo electrónico. Herramientas de videoconferencia para reuniones internas y externas.
          </p>

          {/* Área de Gestión de Crisis */}
          <h4 style={subtitleStyle}>Área de Gestión de Crisis</h4>
          <p style={contentStyle}>
            Responsable: CEO.<br />
            Actividades: Intervenir en situaciones de crisis o decisiones críticas que requieran atención inmediata.<br />
            Definición: Administración proactiva y efectiva de situaciones imprevistas y críticas.<br />
            Objetivo: Minimizar el impacto negativo y manejar efectivamente las crisis.<br />
            Procesos: Detección y análisis rápido de crisis. Desarrollo e implementación de estrategias de gestión de crisis.<br />
            Actores: CEO, Equipos de Gestión de Crisis.<br />
            Recursos: Planes de contingencia, Sistemas de comunicación de emergencia.<br />
            Tecnología: Sistemas de gestión de crisis y comunicación en tiempo real.
          </p>

          {/* Área de Liderazgo y Cultura Corporativa */}
          <h4 style={subtitleStyle}>Área de Liderazgo y Cultura Corporativa</h4>
          <p style={contentStyle}>
            Responsable: CEO.<br />
            Actividades: Fomentar una cultura de innovación, responsabilidad y excelencia.<br />
            Definición: Promoción y desarrollo de una cultura organizacional que apoye la innovación y el alto rendimiento.<br />
            Objetivo: Establecer un ambiente corporativo que incentive la creatividad, la colaboración y el compromiso.<br />
            Procesos: Creación de políticas y programas de cultura empresarial. Implementación de iniciativas para el desarrollo del talento.<br />
            Actores: CEO, Departamento de Recursos Humanos.<br />
            Recursos: Programas de formación y desarrollo, Herramientas de gestión del talento.<br />
            Tecnología: Herramientas para la gestión del rendimiento y el desarrollo del talento.
          </p>  
          </div>
      </div>    
    </div>
  );
};

export default CEOPage;
