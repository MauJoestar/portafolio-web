import React from 'react'
import { projects } from '../data/projectsData'

export default function Projects() {
  return (
    <section id="proyectos" className="pl-4 mt-20">
        <h2 className="text-2xl font-bold mb-8">Proyectos</h2>
        <div>
          <p className="mb-4">Proyectos que eh reliazo a lo largo de mi formacion como desarrollador web</p>
          <div className="grid grid-cols-3 gap-4">
            {projects.map((projects,index) => (
              <a href={`${projects.url}`} target="_blank"  className="block p-4 rounded-lg shadow-md hover:bg-white hover:scale-110 transition">
              <div key={index}>
                <i className={`${projects.iconClass} ${projects.icon} text-2xl mb-2`}></i>
                <h3 className="text-lg font-semibold mb-2">{projects.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{projects.description}</p>
                <div className="flex items-center gap-2 text-blue-600 text-sm">
                  <i className="fa-solid fa-link"></i>
                  <span>{projects.url}</span>
                </div>
              </div>
            </a>
            ))}
          </div>
        </div>
      </section> 
  )
}
