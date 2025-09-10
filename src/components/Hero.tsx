

export default function Hero() {
  return (

        <section className="pl-4 pt-20">
        
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4 mt-4">
          ¡Hola! Soy Mauricio, Desarrollador Web Fullstack
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mb-6">
          Soy un desarrollador apasionado por crear aplicaciones modernas y eficientes. Manejo tecnologías como JavaScript, React, Node.js y Tailwind. Me encanta resolver problemas reales con código limpio y diseño funcional.
        </p>

       
        <div className="flex gap-6 text-2xl text-gray-700 mt-4">
          <a href="https://facebook.com" target="_blank" className="fa-brands fa-facebook hover:text-blue-600 transition-transform transform hover:scale-125"></a>
          <a href="https://github.com" target="_blank" className="fa-brands fa-github hover:text-black transition-transform transform hover:scale-125"></a>
          <a href="https://linkedin.com" target="_blank" className="fa-brands fa-linkedin hover:text-blue-800 transition-transform transform hover:scale-125"></a>
        </div>
      </section>
  )
}
