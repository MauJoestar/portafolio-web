

export default function About() {
  return (
    <section id="acerca-de-mi" className="pl-4 pt-20 ">
        <h2 className="text-3xl font-bold mb-8">Resumen</h2>
        <p>
          soy bal balbal balbalblalbalb abla bla bla blab lab alb alb alb alb alb alb alb alb alb alb lab
        </p>

        <div className="grid grid-cols-2 gap-10 p-4">
            <div className="p-2.5">
              
              <div className="flex items-center mb-2">
                <div className="w-1 h-10 bg-indigo-500 mr-3 rounded"></div> 
                <i className="fas fa-user text-indigo-500 text-2xl mr-2"></i> 
                <h1 className="text-2xl font-mono font-bold">Quién soy</h1>
              </div>

             
              <p className="text-gray-500 text-xl">Mauricio Felipe Meza Leon</p>
              <p className="m-2 text-justify">
                Desarrollador de software innovador y orientado a los plazos, con más de 5 años de experiencia en desarrollo de software, trabajando para consultoras y fintech.
              </p>
              <ul className="list-inside list-disc ml-5 mt-2 text-black">
                <li>6131254958</li>
                <li>mauriciofelipe48@gmail.com</li>
              </ul>
            </div>
          

            <div>
            <div className="flex items-center mb-2">
              <div className="w-1 h-10 bg-blue-500 mr-3 rounded"></div>
              <i className="fas fa-briefcase text-indigo-500 text-2xl mr-2"></i>
              <h1 className="text-2xl font-mono font-bold ">Experiencia Profesional</h1>
            </div>
            
            <p className="text-gray-500 text-xl">MILLICOM(TIGO)</p>
            <p className="text-justify font-bold">2020 - 2025</p>
            <p>Full stack - Sr Developer</p>
            <ul className="list-disc list-inside text-justify">
              <li>Participación en la creación de una app móvil para Android, iOS y su versión Web, desarrollada con el framework Flutter.</li>
              <li>Usando una estructura basada en micro-proyectos desarrollados con el patrón de diseño Clean Architecture. Manejo de estados con BlocProvider y Cubit.</li>
              <li>Colaboración en conjunto con el equipo de UX haciendo uso de la herramienta Figma.</li>
              <li>Creación de micro-servicios usando Python con el framework de FastAPI</li>
            </ul>
          </div>

          <div>
            <div className="flex text-center">
              <div className="w-1 h-10 bg-blue-500 mr-2 rounded"></div>
              <i className="fas fa-book text-2xl text-blue-500 mr-2"></i>
              <h1 className="text-2xl font-mono font-bold ">Educacion</h1>
              
            </div>
            <p className="text-gray-500 text-xl">INGENIERIA EN SISTEMAS COMPUTACIONES</p>
            <p className="text-justify font-bold">2020 - 2025</p>
            <p className="italic m-1">Instituto Tecnológico Superior de Ciudad Constitución</p>
            <p className="text-justify">Estadía para concluir el nivel de Ingenieria realizando el proyecto “Sistema de Geolocalizacion SOLUSOF” realizando ajustes al sistema web ya existente generando nuevas funcionalidades asi como reportes y mejoras de UI. Haciendo uso de C#, MVC, Javascript, SQL Server(select, view, store procedure), ASP.NET.</p>
          </div>

        </div>
      </section>

  )
}
