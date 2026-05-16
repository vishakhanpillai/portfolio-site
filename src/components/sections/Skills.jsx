import { useReveal } from '../../hooks/useReveal'

const SKILL_GROUPS = [
  {
    title: 'Programming & Scripting',
    icon: 'fa-code',
    skills: [
      { icon: 'fab fa-python', label: 'Python', color: 'text-yellow-500' },
      { icon: 'fas fa-copyright', label: 'C', color: 'text-blue-400' },
      { icon: 'fas fa-code', label: 'C++', color: 'text-sky-400' },
      { icon: 'fas fa-database', label: 'SQL', color: 'text-yellow-400' },
    ],
  },
  {
    title: 'Application Security',
    icon: 'fa-shield-halved',
    skills: [
      { icon: 'fas fa-shield-halved', label: 'SAST', color: 'text-red-400' },
      { icon: 'fas fa-bug', label: 'DAST', color: 'text-orange-400' },
      { icon: 'fas fa-layer-group', label: 'SCA', color: 'text-emerald-400' },
      { icon: 'fas fa-code-branch', label: 'Secure Code Review', color: 'text-sky-400' },
    ],
  },
  {
    title: 'Security Tools',
    icon: 'fa-toolbox',
    skills: [
      { icon: 'fas fa-bug', label: 'Burp Suite', color: 'text-orange-400' },
      { icon: 'fas fa-shield', label: 'OWASP ZAP', color: 'text-sky-400' },
      { icon: 'fas fa-magnifying-glass', label: 'Caido', color: 'text-red-300' },
      { icon: 'fas fa-chart-line', label: 'SonarQube', color: 'text-indigo-400' },
      { icon: 'fas fa-filter', label: 'Semgrep', color: 'text-emerald-400' },
      { icon: 'fas fa-vial', label: 'Trivy', color: 'text-cyan-400' },
      { icon: 'fas fa-bomb', label: 'Metasploit', color: 'text-red-400' },
      { icon: 'fas fa-magnifying-glass', label: 'Gobuster', color: 'text-yellow-400' },
    ],
  },
  {
    title: 'DevSecOps & Infrastructure',
    icon: 'fa-server',
    skills: [
      { icon: 'fab fa-docker', label: 'Docker', color: 'text-blue-400' },
      { icon: 'fab fa-linux', label: 'Linux' },
      { icon: 'fas fa-gear', label: 'Azure DevOps', color: 'text-cyan-400' },
      { icon: 'fas fa-diagram-project', label: 'NetBox', color: 'text-amber-400' },
      { icon: 'fab fa-git-alt', label: 'Git', color: 'text-orange-500' },
      { icon: 'fas fa-desktop', label: 'VMware Workstation', color: 'text-indigo-300' },
      { icon: 'fas fa-laptop', label: 'VirtualBox', color: 'text-blue-300' },
    ],
  },
]

function SkillGroup({ group }) {
  return (
    <div className="gradient-border p-5">
      <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4 flex items-center gap-2">
        <i className={`fas ${group.icon} text-red-400`} />
        {group.title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span key={skill.label} className="skill-pill">
            <i className={`${skill.icon} ${skill.color || 'text-slate-400'}`} /> {skill.label}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useReveal()

  return (
    <section id="skills" className="mb-24 scroll-mt-20 lg:scroll-mt-32 reveal" ref={ref}>
      <div className="flex items-center gap-4 mb-8">
        <span className="font-mono text-red-400 text-sm font-semibold">03.</span>
        <h2 className="text-slate-200 font-bold uppercase tracking-widest text-sm">Skills & Tools</h2>
        <span className="flex-grow h-px bg-white/5" />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {SKILL_GROUPS.map((g) => (
          <SkillGroup key={g.title} group={g} />
        ))}
      </div>
    </section>
  )
}
