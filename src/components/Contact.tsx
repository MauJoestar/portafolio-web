
export default function Contact() {
  return (
<section id="contacto" className="pl-4 pt-20 pb-20">
        <h2 className="text-3xl font-bold mb-8">Informacion de Contacto</h2>
         <div className="grid grid-cols-2 pt-4">  
           <div>
              <div className="flex flex-col gap-6">
                
                <div className="flex items-start gap-2">
                  <i className="fa-solid fa-location-dot text-xl mt-5 pr-2 transition  hover:bg-blue-300 hover:scale-120 rounded-full p-2"></i>
                  <div>
                    <h3 className="font-semibold text-2xl">Dirección</h3>
                    <p>Hermenegildo Galeana</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <i className="fa-solid fa-phone text-xl mt-5 pr-2 transition  hover:bg-blue-300 hover:scale-120 rounded-full p-2"></i>
                  <div>
                    <h3 className="font-semibold text-2xl">Telefono</h3>
                    <p>1234567890</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <i className="fa-solid fa-envelope text-xl mt-5 pr-2 transition  hover:bg-blue-300 hover:scale-120 rounded-full p-2"></i>
                  <div>
                    <h3 className="font-semibold text-2xl">Correo Electronico</h3>
                    <p>mauriciofelipe48@hotmail.com</p>
                  </div>
                </div>
            </div>
            </div>
            <div>
              <form action="">
                <div className="flex flex-col gap-6">
                    <div className="flex gap-4">
                      <div className="flex flex-col gap-2 w-1/2">
                        <label htmlFor="nombre" className="font-medium">Nombre</label>
                        <input type="text" id="nombre" name="nombre" className="border rounded p-2" />
                      </div>

                      <div className="flex flex-col gap-2 w-1/2">
                        <label htmlFor="correo" className="font-medium">Correo</label>
                        <input type="email" id="correo" name="correo" className="border rounded p-2" />
                      </div>
                    </div>


                    <div className="flex flex-col gap-2">
                      <label htmlFor="asunto" className="font-medium">Asunto</label>
                      <input type="text" id="asunto" name="asunto" className="border rounded p-2" />
                    </div>

                  
                    <div className="flex flex-col gap-2">
                      <label htmlFor="mensaje" className="font-medium">Mensaje</label>
                      <textarea id="mensaje" name="mensaje" className="border rounded p-2 h-32"></textarea>
                    </div>

                  
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">
                      Enviar
                    </button>
                </div>

              </form>
            </div>
        </div>
          


       </section> 
  )
}
