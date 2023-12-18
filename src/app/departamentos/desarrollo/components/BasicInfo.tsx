const BasicInfo = () => {
  return (
    <div className="flex flex-col px-5 space-y-5 py-7">
      <div className="flex flex-row w-full">
        <div className="flex flex-col  bg-[#1B1C1E] rounded-3xl border-8 border-[#121213] shadow-md text-center items-center w-1/3 p-4 m-4">
          <label className="text-[#889CE7] font-semibold text-2xl my-6">
            ¿Quiénes Somos?
          </label>
          <label className="text-white font-light">
            {" "}
            En el Departamento de Desarrollo, somos un equipo apasionado de
            ingenieros, diseñadores y profesionales tecnológicos comprometidos
            con la excelencia. Nos destacamos por nuestra habilidad para
            transformar desafíos en oportunidades, siempre impulsados por el
            afán de superar las expectativas. Trabajamos de manera colaborativa,
            adoptando metodologías ágiles que nos permiten responder rápidamente
            a las demandas del mercado. Nuestra fortaleza radica en la
            ampliación constante de las capacidades de la plataforma, asegurando
            que Aurora evolucione de la mano con las últimas tendencias
            tecnológicas. En el Departamento de Desarrollo, creamos el futuro de
            la asistencia técnica con cada línea de código y cada innovación
            implementada.
          </label>
        </div>
        <div className="flex flex-col  bg-[#1B1C1E] rounded-3xl border-8 border-[#121213] shadow-md text-center items-center w-1/3 p-4 m-4">
          <label className="text-[#889CE7] font-semibold text-2xl my-6">
            Misión
          </label>
          <label className="text-white font-light">
            {" "}
            En el Departamento de Desarrollo de Aurora, nuestra misión es
            impulsar la innovación tecnológica y la mejora continua de la
            plataforma. Nos dedicamos a desarrollar soluciones de vanguardia
            mediante la incorporación de tecnologías emergentes y la adaptación
            a las tendencias actuales. Nuestro compromiso es ofrecer una
            experiencia de usuario excepcional al optimizar la usabilidad y la
            interfaz, garantizando así que cada interacción en la plataforma sea
            fluida, atractiva y eficiente.
          </label>
        </div>
        <div className="flex flex-col  bg-[#1B1C1E] rounded-3xl border-8 border-[#121213] shadow-md text-center items-center w-1/3 p-4 m-4">
          <label className="text-[#889CE7] font-semibold text-2xl my-6">
            Visión
          </label>
          <label className="text-white font-light">
            {" "}
            Como líderes en el desarrollo tecnológico, aspiramos a ser pioneros
            en la transformación digital del soporte técnico. Visualizamos una
            plataforma Aurora que no solo resuelve problemas técnicos, sino que
            se anticipa a las necesidades del mercado. Buscamos crear un
            ecosistema dinámico y adaptable, donde la expansión constante de
            funcionalidades y la integración fluida con diversas tecnologías
            establezcan nuevos estándares en la industria. Nuestra visión es ser
            reconocidos por la excelencia en el desarrollo ágil y eficiente,
            marcando el camino hacia el futuro de la asistencia técnica.
          </label>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <button className="btn text-white bg-purple-600 hover:bg-purple-700 py-3 px-2 rounded-lg">
          Fase de Inicio
        </button>
      </div>
    </div>
  );
};
export default BasicInfo;
