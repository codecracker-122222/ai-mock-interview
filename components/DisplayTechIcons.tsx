import { getTechLogos } from '@/lib/utils'

interface TechIconProps {
  techStack: string[]
}

const DisplayTechIcons = async ({ techStack }: TechIconProps) => {
  const techIcons = await getTechLogos(techStack)

  return (
    <div className="flex items-center gap-2">
      {techIcons.slice(0, 3).map(({ tech, url }) => (
        <div
          key={tech}
          className="relative group bg-dark-300 rounded-full p-2 flex items-center justify-center"
        >
          <span className="tech tool-tip">{tech}</span>
          <img src={url} alt={tech} className="w-5 h-5" />
        </div>
      ))}
    </div>
  )
}

export default DisplayTechIcons
