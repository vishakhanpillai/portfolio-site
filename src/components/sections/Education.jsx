import { useReveal } from '../../hooks/useReveal'

const EDUCATION = [
  {
    degree: 'Master of Computer Application',
    school: 'Rajagiri College of Social Sciences (Autonomous), Kochi, Kerala',
    period: 'Jun 2024 - Mar 2026',
    details: ['CGPA: 9.0', 'Graduated with first rank in the MCA program'],
  },
  {
    degree: 'Bachelor of Computer Application',
    school: 'St. Joseph\'s College (Autonomous), Devagiri, Kozhikode, Kerala',
    period: 'Sep 2021 - Apr 2024',
    details: ['CGPA: 8.6'],
  },
]

export default function Education() {
  const ref = useReveal()

  return (
    <section id="education" className="mb-24 scroll-mt-20 lg:scroll-mt-32 reveal" ref={ref}>
      <div className="flex items-center gap-4 mb-8">
        <span className="font-mono text-red-400 text-sm font-semibold">03.</span>
        <h2 className="text-slate-200 font-bold uppercase tracking-widest text-sm">Education</h2>
        <span className="flex-grow h-px bg-white/5" />
      </div>

      <div className="space-y-5">
        {EDUCATION.map((item) => (
          <article key={`${item.degree}-${item.school}`} className="gradient-border p-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-100">{item.degree}</h3>
                <p className="text-sm text-slate-400">{item.school}</p>
              </div>
              <span className="text-xs font-mono text-red-400 uppercase tracking-widest">
                {item.period}
              </span>
            </div>

            <ul className="space-y-2">
              {item.details.map((detail) => (
                <li key={detail} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-red-400 shrink-0" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}