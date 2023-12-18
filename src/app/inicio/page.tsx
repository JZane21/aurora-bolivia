import React from 'react';

const InicioPage = () => {
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
      
    {/* Sección ¿Quiénes Somos? */}
    <div style={sectionStyle}>
        <h3 style={titleStyle}>¿Quiénes Somos?</h3>
        <p style={contentStyle}>
          Somos un colectivo de emprendedores apasionados por la tecnología, dedicados a impulsar 
          la innovación en el sector. Nuestro equipo, compuesto por expertos en Ingeniería de Sistemas, 
          se especializa en diversas áreas clave, lo que nos permite ofrecer soluciones integrales y vanguardistas.
          El proyecto que iniciamos es una piedra en la gran pirámide que deseamos construir, debido a 
          que la visión que tenemos no está centrada solamente en el éxito económico, está inclinada 
          hacia la superación individual y colectiva.
        </p>
      </div>
      
      {/* Sección Misión */}
      <div style={sectionStyle}>
        <h3 style={titleStyle}>Misión</h3>
        <p style={contentStyle}>
          Nuestra misión es desentrañar y simplificar los desafíos tecnológicos, ofreciendo soluciones 
          eficaces y personalizadas. Nos enfocamos en minimizar problemas y maximizar eficiencia, 
          asegurando que cada proyecto se realice con agilidad y precisión. Priorizamos la satisfacción 
          total del cliente, garantizando que cada solución no solo cumpla, sino supere sus expectativas.
        </p>
      </div>
      
      {/* Sección Visión */}
      <div style={sectionStyle}>
        <h3 style={titleStyle}>Visión</h3>
        <p style={contentStyle}>
          En Aurora, nos proyectamos como una empresa líder y referente en el ámbito tecnológico a nivel 
          nacional. Nuestro objetivo es destacarnos por nuestra capacidad de innovar y por la excelencia 
          en la prestación de servicios de comunicación y desarrollo de nuevas tecnologías. Nos comprometemos 
          a ser un pilar en el avance tecnológico, adaptándose y evolucionando constantemente para satisfacer 
          las demandas dinámicas de nuestros clientes.
        </p>
      </div>
    </div>
  );
};

export default InicioPage;
