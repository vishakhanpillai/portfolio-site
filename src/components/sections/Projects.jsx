import { useReveal } from '../../hooks/useReveal'

const PROJECTS = [
  {
    href: 'https://github.com/vishakhanpillai/OpenRecon',
    icon: 'fa-search-location',
    color: 'blue',
    title: 'OpenRecon \u2014 Passive Recon Tool',
    desc: 'A Python tool for passive website reconnaissance that gathers WHOIS, DNS records, IP resolution, HTTP headers, and robots.txt data.',
    tags: [
      { icon: 'fab fa-python', label: 'Python', color: 'text-yellow-500' },
      { icon: 'fas fa-network-wired', label: 'dnspython' },
      { icon: 'fas fa-eye', label: 'OSINT', color: 'text-emerald-400' },
    ],
  },
  {
    href: 'https://github.com/vishakhanpillai/Keylogger-Using-Python',
    icon: 'fa-keyboard',
    color: 'emerald',
    title: 'Python Keylogger',
    desc: 'A Python keylogger built to simulate post-compromise monitoring with timestamped logging, rotating files, and scheduled email log handling.',
    tags: [
      { icon: 'fab fa-python', label: 'Python', color: 'text-yellow-500' },
      { icon: 'fas fa-mouse-pointer', label: 'pynput' },
      { icon: 'fas fa-envelope-open-text', label: 'smtplib' },
    ],
  },
]

const COLOR_MAP = {
  red: { from: 'from-red-600/20', to: 'to-red-600/5', border: 'border-red-600/10', text: 'text-red-400', hover: 'hover:text-red-400' },
  blue: { from: 'from-blue-600/20', to: 'to-blue-600/5', border: 'border-blue-600/10', text: 'text-blue-400', hover: 'hover:text-blue-400' },
  emerald: { from: 'from-emerald-600/20', to: 'to-emerald-600/5', border: 'border-emerald-600/10', text: 'text-emerald-400', hover: 'hover:text-emerald-400' },
}

function ProjectCard({ project }) {
  const c = COLOR_MAP[project.color]
  return (
    <a
      href={project.href}
      target="_blank"
      className="project-card gradient-border group block p-6"
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-lg bg-gradient-to-br ${c.from} ${c.to} border ${c.border}`}>
          <i className={`fas ${project.icon} ${c.text} text-xl`} />
        </div>
        <i className="fas fa-arrow-up-right-from-square text-slate-600 group-hover:text-red-400 transition-colors text-sm mt-1" />
      </div>
      <h3 className={`text-lg font-semibold text-slate-200 ${c.hover} transition-colors mb-2`}>
        {project.title}
      </h3>
      <p className="text-sm text-slate-400 leading-relaxed mb-4">
        {project.desc}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag.label} className="skill-pill text-xs py-1 px-2.5">
            <i className={`${tag.icon} ${tag.color || 'text-slate-400'}`} /> {tag.label}
          </span>
        ))}
      </div>
    </a>
  )
}

export default function Projects() {
  const ref = useReveal()

  return (
    <section id="projects" className="mb-24 scroll-mt-20 lg:scroll-mt-32 reveal" ref={ref}>
      <div className="flex items-center gap-4 mb-8">
        <span className="font-mono text-red-400 text-sm font-semibold">02.</span>
        <h2 className="text-slate-200 font-bold uppercase tracking-widest text-sm">Projects</h2>
        <span className="flex-grow h-px bg-white/5" />
      </div>

      <div className="grid gap-5">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>

      <div className="mt-8 text-center">
        <a
          href="https://github.com/vishakhanpillai"
          target="_blank"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200 transition-colors font-mono"
        >
          <i className="fab fa-github" />
          View more work on GitHub
          <i className="fas fa-arrow-right text-xs" />
        </a>
      </div>
    </section>
  )
}
