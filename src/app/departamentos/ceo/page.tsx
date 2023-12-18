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

  const contentStyle = {
    marginBottom: '10px',
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
    </div>
  );
};

export default CEOPage;
