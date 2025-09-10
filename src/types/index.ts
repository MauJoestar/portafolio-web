
export interface Skill {
  name: string
  icon: string
  iconPrefix: 'fa-brands' | 'fa-solid' | 'fa-regular' // se usa esto en lugar de booleano
  color: string
  barColor: string
  percent: number
}

export interface Project{
  url:string
  title:string
  description:string
  icon:string
  iconClass:string
}