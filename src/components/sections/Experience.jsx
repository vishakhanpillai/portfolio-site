import { useReveal } from '../../hooks/useReveal'

const EXPERIENCES = [
  {
    role: 'DevSecOps Intern',
    org: 'Gieom Business Solutions Pvt Ltd',
    period: 'Jan 2026 - Present',
    bullets: [
      'Performed SAST, DAST, and Software Composition Analysis on enterprise applications as part of the GZero Product Security Framework.',
      'Analyzed and manually validated security findings, identifying a path traversal issue that exposed sensitive credentials and created unauthorized access risk.',
      'Contributed to NetBox automation workflows to support infrastructure management and operational efficiency.',
    ],
  },
  {
    role: 'CTF Player',
    org: 'TryHackMe',
    period: 'Jun 2024 - Present',
    bullets: [
      'Solve Capture the Flag challenges to sharpen practical cybersecurity skills.',
      'Build proficiency in network exploitation, web application hacking, cryptography, and system reconnaissance.',
      'Apply structured problem solving and analytical thinking to real-world style attack scenarios.',
    ],
  },
]

export default function Experience() {
  const ref = useReveal()

  return (
    <section id="experience" className="mb-24 scroll-mt-20 lg:scroll-mt-32 reveal" ref={ref}>
      <div className="flex items-center gap-4 mb-8">
        <span className="font-mono text-red-400 text-sm font-semibold">02.</span>
        <h2 className="text-slate-200 font-bold uppercase tracking-widest text-sm">Experience</h2>
        <span className="flex-grow h-px bg-white/5" />
      </div>

      <div className="space-y-5">
        {EXPERIENCES.map((experience) => (
          <article key={`${experience.role}-${experience.org}`} className="gradient-border p-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-100">{experience.role}</h3>
                <p className="text-sm text-slate-400">{experience.org}</p>
              </div>
              <span className="text-xs font-mono text-red-400 uppercase tracking-widest">
                {experience.period}
              </span>
            </div>

            <ul className="space-y-3">
              {experience.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-red-400 shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}