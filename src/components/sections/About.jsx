import { useReveal } from '../../hooks/useReveal'

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" className="mb-24 scroll-mt-20 lg:scroll-mt-32 reveal" ref={ref}>
      <div className="flex items-center gap-4 mb-8">
        <span className="font-mono text-red-400 text-sm font-semibold">01.</span>
        <h2 className="text-slate-200 font-bold uppercase tracking-widest text-sm">About</h2>
        <span className="flex-grow h-px bg-white/5" />
      </div>

      <div className="space-y-5 text-base leading-relaxed">
        <p className="text-slate-400 text-justify">
          I am a cybersecurity professional with hands-on experience in application security,
          vulnerability analysis, and DevSecOps. My work is centered on identifying risk early,
          validating findings carefully, and improving the security posture of real systems.
        </p>
        <p className="text-slate-400 text-justify">
          I am especially interested in offensive security, red team operations, and adversarial
          security research, and I keep building those skills through CTF practice and hands-on
          security tooling.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <span className="skill-pill"><i className="fas fa-shield-halved text-red-400" /> Application Security</span>
        <span className="skill-pill"><i className="fas fa-bug text-orange-400" /> Vulnerability Analysis</span>
        <span className="skill-pill"><i className="fas fa-gears text-emerald-400" /> DevSecOps</span>
        <span className="skill-pill"><i className="fas fa-crosshairs text-yellow-400" /> Offensive Security</span>
        <span className="skill-pill"><i className="fas fa-flag text-blue-400" /> CTF Practice</span>
      </div>
    </section>
  )
}
