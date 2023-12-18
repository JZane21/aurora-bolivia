const SeguridadInformaticaPage = () => {
  return (
    <div className="flex flex-col w-full h-full bg-[#141416] p-6">
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
            Nos visualizamos como líderes en seguridad informática, <br/>
            marcando el estándar de excelencia en la protección de <br/>
             datos y la mitigación de riesgos cibernéticos.  <br/>
             Aspiramos a ser el referente en respuesta efectiva a  <br/>
            incidentes, demostrando que la seguridad es un pilar<br/>
            fundamental de nuestra identidad corporativa.
          </label>
        </div>
      </div>
      <div> Actividades</div>
      <div> </div>
    </div>
  );
};

export default SeguridadInformaticaPage;
