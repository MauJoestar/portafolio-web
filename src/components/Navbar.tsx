

export default function Navbar() {
  return (

    <header className="relative">
        <button className="fixed top-4 right-4 sm:top-6 sm:right-6 z-30 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-transform hover:scale-110">
            <i className="fa-solid fa-moon"></i>
        </button>

        <nav className="bg-white shadow-md absolute top-5 left-1/2 transform -translate-x-1/2 w-120 z-10 rounded-full border border-sky-500">
            <div className="max-w-7xl mx-auto px-4 py-3">
                <ul className="flex justify-center gap-8 text-sm font-semibold text-shadow-black">
                    <li><a href="#acerca-de-mi" className="hover:text-blue-900 hover:scale-110 transition-transform duration-300 ease-in-out inline-block">Acerca de mí</a></li>
                    <li><a href="#habilidades" className="hover:text-blue-900 hover:scale-110 transition-transform duration-300 ease-in-out inline-block">Habilidades</a></li>
                    <li><a href="#proyectos" className="hover:text-blue-900 hover:scale-110 transition-transform duration-300 ease-in-out inline-block">Proyectos</a></li>
                    <li><a href="#contacto" className="hover:text-blue-900 hover:scale-110 transition-transform duration-300 ease-in-out inline-block">Contacto</a></li>
                </ul>
            </div>
        </nav>
    </header>
  )
}
