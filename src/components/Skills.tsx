import { skills } from '../data/skillsData'

export default function Skills() {
  return (
    <section id="habilidades" className="pl-4 pt-20">
      <h2 className="text-3xl font-bold mb-8">Habilidades</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 bg-gray-50 rounded-lg">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex items-center gap-2 mb-1">
              <i className={`${skill.iconPrefix} ${skill.icon} ${skill.color} text-2xl`}></i>
              <span className="font-semibold text-gray-800">{skill.name}</span>
              <span className="ml-auto text-sm text-gray-600">{skill.percent}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`${skill.barColor} h-2 rounded-full`}
                style={{ width: `${skill.percent}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}